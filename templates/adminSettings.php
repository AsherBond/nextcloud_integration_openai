<?php

/**
 * SPDX-FileCopyrightText: 2022 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

$appId = OCA\OpenAi\AppInfo\Application::APP_ID;
\OCP\Util::addScript($appId, $appId . '-adminSettings');
?>

<div id="openai_prefs"></div>
