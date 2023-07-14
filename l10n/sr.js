OC.L10N.register(
    "integration_openai",
    {
    "ChatGPT-like text generation (by OpenAI)" : "Генерисање текста као са ChatGPT (од OpenAI)",
    "AI image generation (by OpenAI Dall-E 2)" : "AI генерисање слике (са OpenAI Dall-E 2)",
    "AI speech-to-text (Whisper via OpenAI)" : "AI говор-у-текст (Whisper преко OpenAI)",
    "Bad HTTP method" : "Лоша HTTP метода",
    "Bad credentials" : "Лоши креденцијали",
    "Connected accounts" : "Повезани налози",
    "OpenAI's Whisper Speech-To-Text" : "Whisper говор-у-текст компаније OpenAI",
    "OpenAI integration" : "OpenAI интеграција",
    "Integration of OpenAI's GPT-3 and DALL·E 2" : "Интеграција GPT-3 и DALL·E 2 компаније OpenAI",
    "This app includes 3 custom smart pickers for Nextcloud:\n* ChatGPT answers\n* DALL·E 2 images\n* Whisper dictation\n\nIt also implements\n\n* a Translation provider (using ChatGPT)\n* a SpeechToText provider (using Whisper)\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance.\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via OpenAI API: 🔴\n\nNegative:\n* the software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be run on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via OpenAI API: 🔴\n\nNegative:\n* the software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be run on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via OpenAI API: 🔴\n\nNegative:\n* the software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* the trained model is not freely available, so the model can not be ran on-premises\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via OpenAI API: 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n* the training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* the software for training and inferencing of this model is open source\n* the trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* the training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "Ова апликација обезбеђује 3 произвољна паметна бирача за Nextcloud:\n* ChatGPT одговори\n* DALL·E 2 слике\n* Whisper диктирање\n\nТакође имплементира\n\n* пружаоца услуге превођење (помоћу ChatGPT)\n* пружаоца услуге претварања говора у текст (помоћу Whisper)\n\nУместо да се за њих повежете на OpenAI API, такође можете да се повежете са локално хостованом [LocalAI](https://localai.io) инстанцом.\n\n## Рангирање етичке AI\n### Рангирање за генерисање текста употребом ChatGPT преко OpenAI API: 🔴\n\nЛоше стране:\n* софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за превођење употребом ChatGPT преко OpenAI API: 🔴\n\nЛоше стране:\n* софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n### Рангирање за генерисање слике употребом DALL·E преко OpenAI API: 🔴\n\nЛоше стране:\n* софтвер за тренирање и закључивање овог модела је власнички, чиме се ограничава могућност да се покреће локално или да га сами тренирате\n* тренирани модел није јавно доступан, тако да модел не може да се извршава на вашем хардверу\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за претварање говора у текст употребом Whisper преко OpenAI API: 🟡\n\nДобре стране:\n* софтвер за тренирање и закључивање овог модела је отвореног кода\n* тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n### Рангирање за генерисање текста преко LocalAI: 🟢\n\nДобре стране:\n* софтвер за тренирање и закључивање овог модела је отвореног кода\n* тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n* подаци коришћени за тренирање су јавно доступни, чиме постоји могућност да се провери и исправи пристрасност или да се оптимизују перформансе модела и употреба CO2.\n\n\n### Рангирање за генерисање слике употребом Стабилне дифузије преко LocalAI : 🟡\n\nДобре стране:\n* софтвер за тренирање и закључивање овог модела је отвореног кода\n* тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\n\n### Рангирање за претварање говора у тест употребом Whisper преко LocalAI: 🟡\n\nДобре стране:\n* софтвер за тренирање и закључивање овог модела је отвореног кода\n* тренирани модел је јавно доступан, тако да се може извршавати на вашем хардверу\n\nЛоше стране:\n* подаци коришћени за тренирање нису јавно доступни, чиме се ограничава могућност да треће стране провере и исправе пристрасност или да оптимизују перформансе модела и употребу CO2.\n\nСазнајте више о Nextcloud Рангирању етичке AI [на нашем блогу](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "LocalAI URL (leave empty to use openai.com)" : "LocalAI URL (оставите празно да се употреби openai.com)",
    "example:" : "пример:",
    "This should be the address of your LocalAI instance from the point of view of your Nextcloud server. This can be a local address with a port like http://localhost:8080" : "Ово би требало да буде адреса ваше LocalAI инстанце из углавашег Nextcloud сервера. То може да буде локална адреса са портом као што је http://localhost:8080",
    "OpenAI API key" : "OpenAI API кључ",
    "your API key" : "ваш API кључ",
    "You can create a free API key in your OpenAI account settings:" : "Бесплатни API кључ можете да креирате у подешавањима свог OpenAI налога:",
    "Default completion model to use" : "Подразумевани модел довршавања који ће се користити",
    "More information about OpenAI models" : "Више информација о OpenAI моделима",
    "Select which features you want to enable" : "Изаберите могућности које желите да укључите",
    "Whisper transcription/translation with the Smart Picker" : "Whisper транскрипција/превођење са Паметним бирачем",
    "Image generation with the Smart Picker" : "Генерисање слике Паметним бирачем",
    "Text generation with the Smart Picker" : "Генерисање текста Паметним бирачем",
    "Translation provider (to translate Talk messages for example)" : "Пружалац услуге превођења (на пример, за превођење Talk порука)",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Пружалац услуге претварања говора у текст (на пример, за транскрибовање Talk снимака)",
    "OpenAI admin options saved" : "Сачуване су OpenAI админ опције",
    "Failed to save OpenAI admin options" : "Није успело чување OpenAI админ опција",
    "OpenAI image generation" : "OpenAI генерисање слике",
    "Open image in a new tab" : "Отвори слику у новој картици",
    "Image information was not found on the server. The data might have been cleaned up because the image has not been displayed during more than 10 days." : "На серверу нису пронађене информације слике. Могуће је да су очишћени јер је прошло више од 10 дана након последњег приказивања слике.",
    "Loading image" : "Слика се учитава",
    "Generated image" : "Генерисана слика",
    "The remote image cannot be fetched. OpenAI might have deleted it." : "Не може да се добави удаљена слика. Можда ју је OpenAI обрисао.",
    "Direct image link" : "Директни линк на слику",
    "Your administrator defined a custom service address" : "Ваш администратор је дефинисао произвољну адресу сервиса",
    "Leave the API key empty to use the one defined by administrators" : "Оставите поље за API кључ празно ако желите да се користи кључ који су дефинисали администратори",
    "OpenAI options saved" : "Сачуване су OpenAI опције",
    "Failed to save OpenAI options" : "Није успело чување OpenAI опција",
    "ChatGPT-like text generation" : "Генерисање текста као са ChatGPT",
    "Preview" : "Преглед",
    "Preview content" : "Прегледај садржај",
    "Show/hide advanced options" : "Прикажи/сакриј напредне опције",
    "Advanced options" : "Напредне опције",
    "Preview text generation by OpenAI" : "Прегледај текст који је генерисао OpenAI",
    "Submit text generated by OpenAI" : "Предај текст који је генерисао OpenAI",
    "Send" : "Пошаљи",
    "Include the prompt in the result" : "Укључи одзив у резултату",
    "How many results to generate" : "Колико резултата треба да се генерише",
    "Model to use" : "Модел који ће да се користи",
    "Approximate maximum number of words to generate (tokens)" : "Приближан максимални број речи (жетона) који ће да се генерише",
    "What is the matter with putting pineapple on pizza?" : "У чему је ствар са стављањем ананаса на пицу?",
    "by OpenAI" : "помоћу OpenAI",
    "Choose a model" : "Изаберите модел",
    "Regenerate" : "Регенериши",
    "Failed to save OpenAI default model ID" : "Није успело чување подразумеваног OpenAI ID модела",
    "OpenAI error" : "OpenAI грешка",
    "Unknown OpenAI API error" : "Непозната OpenAI API грешка",
    "Prompt" : "Одзив",
    "Result" : "Резултат",
    "Result {index}" : "Резултат {index}",
    "AI image generation" : "AI генерисање слике",
    "Preview images with OpenAI" : "Прегледај слике са OpenAI",
    "Submit the current preview" : "Предај текући преглед",
    "Number of images to generate (1-10)" : "Број слика које се генеришу (1-10)",
    "Size of the generated images" : "Величина генерисаних слика",
    "cyberpunk pizza with pineapple, cats fighting with lightsabers" : "сајберпанк пица са ананасом, мачке које се боре светлосним сабљама",
    "by OpenAI with DALL·E 2" : "помоћу OpenAI са DALL·E 2",
    "Unknown error" : "Непозната грешка",
    "AI speech-to-text" : "AI говор-у-текст",
    "Transcribe" : "Транскрибуј",
    "Translate (only to English)" : "Преведи (само на енглески)",
    "by OpenAI with Whisper" : "помоћу OpenAI са Whisper",
    "Translate" : "Превођење",
    "Failed to get transcription/translation" : "Не може да се добије транскрипција/превод"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
