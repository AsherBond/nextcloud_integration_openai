OC.L10N.register(
    "integration_openai",
    {
    "OpenAI's Whisper Speech-To-Text" : "Whisper говор-у-текст компаније OpenAI",
    "LocalAI's Whisper Speech-To-Text" : "Whisper говор-у-текст са LocalAI",
    "OpenAI's DALL-E 2" : "DALL-E 2 компаније OpenAI",
    "Unknown models error" : "Непозната грешка модела",
    "Default" : "Подразумевано",
    "Text generation" : "Генерисање текста",
    "Image generation" : "Генерисање слике",
    "Audio transcription" : "Звучни транскрипт",
    "Unknown" : "Непознато",
    "tokens" : "жетони",
    "images" : "слике",
    "seconds" : "секунди",
    "Unknown error while retrieving quota usage." : "Грешка приликом преузимања квоте коришћења.",
    "Text generation quota exceeded" : "Прекорачена је квота за генерисање текста",
    "Unknown text generation error" : "Непозната грешка генерисања текста",
    "Could not read audio file." : "Звучни фајл не може да се прочита.",
    "Audio transcription quota exceeded" : "Прекорачена је квота за транскрипт звука",
    "Unknown audio trancription error" : "Непозната грешка транскрипције звука",
    "Image generation quota exceeded" : "Прекорачена је квота за генерисање слике",
    "Unknown image generation error" : "Непозната грешка генерисања слике",
    "Bad HTTP method" : "Лоша HTTP метода",
    "Bad credentials" : "Лоши креденцијали",
    "API request error: " : "Грешка API захтева: ",
    "Maximum output words" : "Максимални број речи у излазу",
    "The maximum number of words/tokens that can be generated in the completion." : "Максимални број речи/жетона који ће се генерисати у довршавању.",
    "Model" : "Модел",
    "The model used to generate the completion" : "Модел који се користи за генерисање довршавања",
    "Size" : "величина",
    "The model used to generate the images" : "Модел који се користи за генерисање слика",
    "Detect language" : "Откриј језик",
    "OpenAI and LocalAI integration" : "OpenAI и LocalAI интеграција",
    "Integration of OpenAI and LocalAI services" : "Интеграција OpenAI и LocalAI сервиса",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance\nor to any service that implements an API similar to the OpenAI one, for example: [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ Из ове апликације су уклоњени паметни бирачи\nјер су сада део [Асистент апликације](https://apps.nextcloud.com/apps/assistant).\n\nОва апликација имплементира:\n\n* Пружаоце услуге генерисања текста: Слободни упит, Резимирање, Наслов, Писање у контексту, Чет и Реформулација (употребом било ког доступног језичког модела)\n* Пружаоца услуге превођење (помоћу било ког доступног великог језичког модела)\n* Пружаоца услуге претварања говора у текст (помоћу Whisper)\n* Пружаоца услуге генерисања слике\n\nУместо да се за њих повежете на OpenAI API, такође можете да се повежете са локално хостованом [LocalAI](https://localai.io) инстанцом\nили са било којим сервисом који имплементира API који личи на OpenAI API, на пример, [Plusserver](https://www.plusserver.com/en/ai-platform/) или [MistralAI](https://mistral.ai).\n\n## Рангирање етичке AI\n### Рангирање за генерисање текста употребом ChatGPT преко OpenAI API: 🔴\n\nЛоше стране:\n* Софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* Тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за превођење употребом ChatGPT преко OpenAI API: 🔴\n\nЛоше стране:\n* Софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* Тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n### Рангирање за генерисање слике употребом DALL·E преко OpenAI API: 🔴\n\nЛоше стране:\n* Софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* Тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за претварање говора у текст употребом Whisper преко OpenAI API: 🟡\n\nДобре стране:\n* Софтвер за тренирање и закључивање овог модела је отвореног кода\n* Тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n### Рангирање за генерисање текста преко LocalAI: 🟢\n\nДобре стране:\n* Софтвер за тренирање и закључивање овог модела је отвореног кода\n* Тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n* Подаци коришћени за тренирање су јавно доступни, чиме постоји могућност да се провери и исправи пристрасност или да се оптимизују перформансе модела и употреба CO2.\n\n\n### Рангирање за генерисање слике употребом Стабилне дифузије преко LocalAI : 🟡\n\nДобре стране:\n* Софтвер за тренирање и закључивање овог модела је отвореног кода\n* Тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за претварање говора у тест употребом Whisper преко LocalAI: 🟡\n\nДобре стране:\n* Софтвер за тренирање и закључивање овог модела је отвореног кода\n* Тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* Подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\nСазнајте више о Nextcloud Рангирању етичке AI [на нашем блогу](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "Service URL" : "URL сервиса",
    "Example: {example}" : "Пример: {example}",
    "Leave empty to use {openaiApiUrl}" : "Оставите празно ако желите да се користи {openaiApiUrl}",
    "This should be the address of your LocalAI instance (or any service implementing an API similar to OpenAI). This URL will be accessed by your Nextcloud server." : "Ово би требало да буде адреса ваше LocalAI инстанце (или било ког сервиса који имплементира API који личи на OpenAI API). Nextcloud сервер ће да приступа овој URL адреси.",
    "This can be a local address with a port like {example}. In this case make sure 'allow_local_remote_servers' is set to true in config.php" : "То може да буде локална адреса са портом, као што је {example}. У том случају проверите да ли је ’allow_local_remote_servers’ у config.php постављено на true",
    "Service name (optional)" : "Назив сервиса (није обавезно)",
    "Example: LocalAI of university ABC" : "Пример: LocalAI универзитета АБВ",
    "This name will be displayed as provider name in the AI admin settings" : "Ово име ће се приказати као име пружаоца услуге у AI админ подешавањима",
    "Authentication" : "Провера идентитета",
    "Authentication method" : "Начин провере идентитета",
    "API key" : "API кључ",
    "Basic Authentication" : "Основна провера идентитета",
    "API key (mandatory with OpenAI)" : "API кључ (обавезан са OpenAI)",
    "You can create an API key in your OpenAI account settings" : "API кључ можете да креирате у подешавањима свог OpenAI налога",
    "Basic Auth user" : "Basic Auth корисник",
    "Basic Auth password" : "Basic Auth лозинка",
    "Text completion endpoint" : "Крајња тачка довршавања текста",
    "Chat completions" : "Довршавања ћаскања",
    "Completions" : "Довршавања",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "Избор крајње тачке за чет/довршавање није доступно за OpenAI јер имплицитно користи довршавања чета за фино подешене моделе типа „праћење инструкција”.",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "Употреба крајње тачке ћаскања може да унапреди квалитет генерисања текста у сличају фино подешених модела методом „слеђење инструкција”.",
    "Default completion model to use" : "Подразумевани модел довршавања који ће се користити",
    "More information about OpenAI models" : "Више информација о OpenAI моделима",
    "More information about LocalAI models" : "Више информација о LocalAI моделима",
    "Extra completion model parameters" : "Додатни параметри модела за довршавање",
    "Request timeout (seconds)" : "Рок захтева (секунде)",
    "Default image generation model to use" : "Подразумевани модел довршавања који ће се користити за генерисање слике",
    "No models to list" : "Не може да се прикаже ниједан модел",
    "Usage limits" : "Границе употребе",
    "Quota enforcement time period (days)" : "Временски период наметања квоте (дана)",
    "Usage quotas per time period" : "Квоте употребе по временском периоду",
    "Quota type" : "Тип квоте",
    "Per-user quota / period" : "Квота по кориснику / период",
    "Current system-wide usage / period" : "Тренутна употреба на нивоу система / период",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Ограничење по кориснику за овај API тип (0 за без ограничења)",
    "Max new tokens per request" : "Максимални број жетон по захтеву",
    "Maximum number of new tokens generated for a single text generation prompt" : "Максимални број нових жетона који се генерише за један захтев за генерисање текста",
    "Select enabled features" : "Изаберите укључене могућности",
    "Translation provider (to translate Talk messages for example)" : "Пружалац услуге превођења (на пример, за превођење Talk порука)",
    "Text processing providers (to generate text, summarize, context write etc...)" : "Пружаоци услуге обраде текста (за генерисање текста, резимирање, писање у контексту, итд.)",
    "Image generation provider" : "Пружалац услуге генерисања слике",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Пружалац услуге претварања говора у текст (на пример, за транскрибовање Talk снимака)",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "JSON објекат. Погледајте API документацију да сазнате листу свих доступних параметара. На пример: {example}",
    "Failed to load models" : "Није успело учитавање модела",
    "Failed to load quota info" : "Није успело учитавање информација о квоти",
    "OpenAI admin options saved" : "Сачуване су OpenAI админ опције",
    "Failed to save OpenAI admin options" : "Није успело чување OpenAI админ опција",
    "Your administrator defined a custom service address" : "Ваш администратор је дефинисао произвољну адресу сервиса",
    "Leave the API key empty to use the one defined by administrators" : "Оставите поље за API кључ празно ако желите да се користи кључ који су дефинисали администратори",
    "You can create a free API key in your OpenAI account settings" : "Бесплатни API кључ можете да креирате у подешавањима свог OpenAI налога",
    "Leave the username and password empty to use the ones defined by your administrator" : "Оставите поља за корисничко име и лозинку празна ако желите да се користе вредности које је дефинисао администратор",
    "Username" : "Корисничко име",
    "your Basic Auth user" : "ваш корисник за основну потврду идентитета",
    "Password" : "Лозинка",
    "your Basic Auth password" : "ваша лозинка за основну потврду идентитета",
    "Usage quota info" : "Информације о квоти употребе",
    "Usage" : "Употреба",
    "Specifying your own API key will allow unlimited usage" : "Ако наведете сопствени API кључ имаћете могућност неограничене употребе",
    "OpenAI options saved" : "Сачуване су OpenAI опције",
    "Failed to save OpenAI options" : "Није успело чување OpenAI опција"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
