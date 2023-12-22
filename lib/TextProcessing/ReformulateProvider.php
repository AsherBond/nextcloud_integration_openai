<?php

declare(strict_types=1);

namespace OCA\OpenAi\TextProcessing;

use Exception;
use OCA\OpenAi\AppInfo\Application;
use OCA\OpenAi\Service\OpenAiAPIService;
use OCA\OpenAi\Service\OpenAiSettingsService;
use OCP\IConfig;
use OCP\IL10N;
use OCP\TextProcessing\IProviderWithExpectedRuntime;
use OCP\TextProcessing\IProviderWithUserId;
use RuntimeException;

class ReformulateProvider implements IProviderWithExpectedRuntime, IProviderWithUserId {
	public function __construct(
		private OpenAiAPIService $openAiAPIService,
		private IConfig $config,
		private IL10N $l10n,
		private ?string $userId,
		private OpenAiSettingsService $openAiSettingsService,
	) {
	}

	public function getName(): string {
		return $this->openAiAPIService->isUsingOpenAi()
			? $this->l10n->t('OpenAI integration')
			: $this->l10n->t('LocalAI integration');
	}

	private function updateExpectedRuntime(int $runtime): void {
		$oldTime = $this->getExpectedRuntime();
		$newTime = intval((1 - Application::EXPECTED_RUNTIME_LOWPASS_FACTOR) * $oldTime + Application::EXPECTED_RUNTIME_LOWPASS_FACTOR * $runtime);

		if ($this->openAiAPIService->isUsingOpenAi()) {
			$this->config->setAppValue(Application::APP_ID, 'openai_text_generation_time', strval($newTime));
		} else {
			$this->config->setAppValue(Application::APP_ID, 'localai_text_generation_time', strval($newTime));
		}
	}

	public function process(string $prompt): string {
		$startTime = time();
		$adminModel = $this->config->getAppValue(Application::APP_ID, 'default_completion_model_id', Application::DEFAULT_COMPLETION_MODEL_ID) ?: Application::DEFAULT_COMPLETION_MODEL_ID;
		$prompt = 'Reformulate the following text:' . "\n\n" . $prompt;
		// Max tokens are limited later to max tokens specified in the admin settings so here we just request PHP_INT_MAX
		try {
			if ($this->openAiAPIService->isUsingOpenAi() || $this->openAiSettingsService->getChatEndpointEnabled()) {
				$completion = $this->openAiAPIService->createChatCompletion($this->userId, $prompt, 1, $adminModel, PHP_INT_MAX, false);
			} else {
				$completion = $this->openAiAPIService->createCompletion($this->userId, $prompt, 1, $adminModel, PHP_INT_MAX, false);
			}
		} catch (Exception $e) {
			throw new RunTimeException('OpenAI/LocalAI request failed: ' . $e->getMessage());
		}
		if (count($completion) > 0) {
			$endTime = time();
			$this->updateExpectedRuntime($endTime - $startTime);
			return array_pop($completion);
		}

		throw new RunTimeException('No result in OpenAI/LocalAI response. ');
	}

	public function getTaskType(): string {
		return ReformulateTaskType::class;
	}

	public function getExpectedRuntime(): int {
		return $this->openAiAPIService->isUsingOpenAi()
			? intval($this->config->getAppValue(Application::APP_ID, 'openai_text_generation_time', strval(Application::DEFAULT_OPENAI_TEXT_GENERATION_TIME)))
			: intval($this->config->getAppValue(Application::APP_ID, 'localai_text_generation_time', strval(Application::DEFAULT_LOCALAI_TEXT_GENERATION_TIME)));
	}

	public function setUserId(?string $userId): void {
		$this->userId = $userId;
	}
}
