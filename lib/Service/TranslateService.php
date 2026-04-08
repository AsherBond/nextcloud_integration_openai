<?php

declare(strict_types=1);

/**
 * SPDX-FileCopyrightText: 2026 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\OpenAi\Service;

use OCA\OpenAi\AppInfo\Application;

class TranslateService {
	/**
	 * @return array<array{code: string, name: string}>
	 */
	public static function getStaticLanguages(): array {
		return array_map(static function (array $language): array {
			return [
				'code' => $language[0],
				'name' => $language[1],
			];
		}, Application::LANGUAGE_CODES_AND_ENDONYMS);
	}

	/**
	 * @return array<string, string>
	 */
	public static function getCoreLanguagesByCode(): array {
		return array_column(Application::LANGUAGE_CODES_AND_ENDONYMS, 1, 0);
	}
}
