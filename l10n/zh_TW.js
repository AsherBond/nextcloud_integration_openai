OC.L10N.register(
    "integration_openai",
    {
    "Unknown models error" : "未知模型錯誤",
    "Default" : "預設",
    "Text generation" : "產生文字",
    "Image generation" : "影像產生",
    "Audio transcription" : "音訊轉錄",
    "Unknown" : "未知",
    "tokens" : "權杖",
    "images" : "影像",
    "seconds" : "秒",
    "Unknown error while retrieving quota usage." : "擷取額度使用量時發生未知錯誤。",
    "Text generation quota exceeded" : "已超過文字產生額度",
    "Unknown text generation error" : "未知的產生文字錯誤",
    "Could not read audio file." : "無法讀取音訊檔。",
    "Audio transcription quota exceeded" : "已超過音訊轉錄額度",
    "Unknown audio trancription error" : "未知的音訊轉錄錯誤",
    "Image generation quota exceeded" : "已超過影像產生額度",
    "Unknown image generation error" : "未知的產生影像錯誤",
    "Bad HTTP method" : "錯誤的 HTTP 方法",
    "Bad credentials" : "錯誤的憑證",
    "API request error: " : "API 請求錯誤：",
    "Maximum output words" : "最大輸出字數",
    "The maximum number of words/tokens that can be generated in the completion." : "補齊中可以產生的最大文字/權杖數。",
    "Model" : "模型",
    "The model used to generate the completion" : "用來產生補齊的模型",
    "OpenAI's DALL-E 2" : "OpenAI 的DALL-E 2",
    "Size" : "大小",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "選擇性。產生影像的大小。必須為 256x256。預設為 %s",
    "The model used to generate the images" : "用來產生影像的模型",
    "Detect language" : "偵測語言",
    "OpenAI and LocalAI integration" : "OpenAI 與 LocalAI 整合",
    "Integration of OpenAI and LocalAI services" : "OpenAI 與 LocalAI 服務的整合",
    "Service URL" : "服務 URL",
    "Example: {example}" : "範例：{example}",
    "Leave empty to use {openaiApiUrl}" : "留空以使用 {openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "在目前的組態下，用來取得目標模型的 URL 是：",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "這應該包含您的 LocalAI 站台（或任何實作類似 OpenAI 的 API 的服務）的位置，以及 API 的根路徑。Nextcloud 伺服器將會存取此 URL。",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "這可以是包含連接埠（如 {example}）的本機網址。在者種情況下，請確保 config.php 中的「allow_local_remote_servers」設定為 true。",
    "Service name (optional)" : "服務名稱（選擇性）",
    "Example: LocalAI of university ABC" : "範例：ABC 大學的LocalAI",
    "This name will be displayed as provider name in the AI admin settings" : "該名稱將在 AI 管理設定中顯示為提供者名稱",
    "Authentication" : "驗證",
    "Authentication method" : "認證方式",
    "API key" : "API 金鑰",
    "Basic Authentication" : "基本驗證",
    "API key (mandatory with OpenAI)" : "API 金鑰（使用 OpenAI 時必填）",
    "You can create an API key in your OpenAI account settings" : "您可以在您的 OpenAI 帳號設定中建立 API 金鑰",
    "Basic Auth user" : "基礎驗證使用者",
    "Basic Auth password" : "基礎驗證密碼",
    "Text completion endpoint" : "文字補完端點",
    "Chat completions" : "聊天補齊",
    "Completions" : "補齊",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "為 OpenAI 選取的聊天/完成端點無法使用，因為其隱含使用聊天完成來進行「指令追蹤」微調模型。",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "使用聊天端點可以改善「指令追蹤」微調模型的文字產生品質。",
    "Default completion model to use" : "預設使用的補齊模型",
    "More information about OpenAI models" : "關於 OpenAI 模型的更多資訊",
    "More information about LocalAI models" : "更多關於 LocalAI 模型的資訊",
    "Extra completion model parameters" : "額外補完模型參數",
    "Request timeout (seconds)" : "請求逾時（秒）",
    "Default image generation model to use" : "預設使用的影像產生模型",
    "No models to list" : "沒有可列出的模型",
    "Default image size" : "預設影像大小",
    "Usage limits" : "使用量限制",
    "Quota enforcement time period (days)" : "配額執行期限（天）",
    "Usage quotas per time period" : "每個時段的使用量配額",
    "Quota type" : "配額類型",
    "Per-user quota / period" : "每個使用者的配額/週期",
    "Current system-wide usage / period" : "在目前系統範圍內的使用量/週期",
    "A per-user limit for usage of this API type (0 for unlimited)" : "每個使用者使用此 API 類型的用量限制（0 為無限制）",
    "Max new tokens per request" : "每個請求的最大新權杖數",
    "Maximum number of new tokens generated for a single text generation prompt" : "單一文字產生提示產生的新權杖最大數量",
    "Select enabled features" : "選取已啟用的功能",
    "Translation provider (to translate Talk messages for example)" : "翻譯提供者（舉例來說，用來翻譯 Talk 中的訊息）",
    "Text processing providers (to generate text, summarize, context write etc...)" : "文字處理提供者（用來產生文字、摘要、情境寫作等）",
    "Image generation provider" : "影像產生提供者",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "語音轉文字提供者（舉例來說，用來轉錄 Talk 的錄音）",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON 物件。看看 API 文件以取得所有可用參數清單。例如：{example}",
    "Must be in 256x256 format (default is {default})" : "必須為 256x256（預設為 {default}）",
    "Failed to load models" : "載入模型失敗",
    "Failed to load quota info" : "載入配額資訊失敗",
    "OpenAI admin options saved" : "OpenAI 管理選項已儲存",
    "Failed to save OpenAI admin options" : "儲存 OpenAI 管理選項失敗",
    "Your administrator defined a custom service address" : "您的管理員定義了自訂的服務位置",
    "Leave the API key empty to use the one defined by administrators" : "將 API 金鑰留空以使用管理員定義的",
    "You can create a free API key in your OpenAI account settings" : "您可以在您的 OpenAI 帳號設定中建立一個免費的 API 金鑰",
    "Leave the username and password empty to use the ones defined by your administrator" : "將使用者名稱與密碼留空以使用您的管理員定義的",
    "Username" : "使用者名稱",
    "your Basic Auth user" : "您的基本驗證使用者",
    "Password" : "密碼",
    "your Basic Auth password" : "您的基本驗證密碼",
    "Usage quota info" : "使用量配額資訊",
    "Usage" : "使用量",
    "Specifying your own API key will allow unlimited usage" : "指定您自己的 API 金鑰可允許無限制的使用量",
    "OpenAI options saved" : "OpenAI 選項已儲存",
    "Failed to save OpenAI options" : "儲存 OpenAI 選項失敗"
},
"nplurals=1; plural=0;");
