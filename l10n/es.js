OC.L10N.register(
    "integration_openai",
    {
    "Invalid models response received" : "Se recibió una respuesta inválida de los modelos",
    "Default" : "Por defecto",
    "Text generation" : "Generación de texto",
    "Image generation" : "Generación de imágenes",
    "Audio transcription" : "Transcripción de audio",
    "Text to speech" : "Texto a voz",
    "Unknown" : "Desconocido",
    "tokens" : "tokens",
    "images" : "imágenes",
    "seconds" : "seconds",
    "characters" : "caracteres",
    "Unknown error while retrieving quota usage." : "Error desconocido mientras se obtenía el uso de cuota.",
    "Text generation quota exceeded" : "Se excedió la cuota de generación de texto",
    "Unknown text generation error" : "Error desconocido de generación de texto",
    "Could not read audio file." : "No se pudo leer el archivo de audio.",
    "Audio transcription quota exceeded" : "Se excedió la cuota de transcripción de audio",
    "Unknown audio trancription error" : "Error desconocido de transcripción de audio",
    "Image generation quota exceeded" : "Se excedió la cuota de generación de imágenes",
    "Unknown image generation error" : "Error desconocido de generación de imágenes",
    "Speech generation quota exceeded" : "La cuota de generación de voz se ha excedido",
    "Bad HTTP method" : "Método HTTP erróneo",
    "Bad credentials" : "Credenciales erróneas",
    "API request error: " : "Error en solicitud API:",
    "Invalid API Key/Basic Auth: " : "Llave API Inválida/Basic Auth:",
    "Maximum output words" : "Máximo de palabras de salida",
    "The maximum number of words/tokens that can be generated in the output." : "El número máximo de palabras/tokens que pueden generarse en la salida.",
    "Model" : "Modelo",
    "The model used to generate the output" : "El modelo a utilizar para generar la salida",
    "Analyze images" : "Analizar imágenes",
    "Ask a question about the given images." : "Haga una pregunta acerca de las imágenes proporcionadas.",
    "Images" : "Imágenes",
    "Images to ask a question about" : "Imágenes sobre las cuales se formulará una pregunta",
    "Question" : "Pregunta",
    "What to ask about the image." : "Qué preguntar acerca de la imágen",
    "Generated response" : "Respuesta generada",
    "The answer to the question" : "La respuesta a la pregunta",
    "Completion model" : "Modelo de completación",
    "The model used to generate the completion" : "El modelo utilizado para generar la completación",
    "Output voice" : "Voz de salida",
    "The voice used to generate speech" : "La voz utilizada para generar el dictado",
    "Text-to-speech model" : "Modelo de Texto a voz",
    "The model used to generate the speech" : "El modelo utilizado para generar el dictado",
    "Speed" : "Velocidad",
    "Speech speed modifier (Valid values: 0.25-4)" : "Modificador de velocidad del habla (Valores válidos: 0.25-4)",
    "Speech speed modifier" : "Modificador de velocidad del dictado",
    "Remote audio ID" : "ID del audio remoto",
    "The ID of the audio response returned by the remote service" : "El ID de la respuesta de audio retornada por el servicio remoto",
    "Remote audio expiration date" : "Fecha de expiración del audio remoto",
    "The remote audio response stays available in the service until this date" : "La respuesta de audio remota se mantendrá disponible en el servicio hasta esta fecha",
    "Detect language" : "Detectar idioma",
    "Friendlier" : "Más amigable",
    "More formal" : "Más formal",
    "Funnier" : "Más divertido",
    "More casual" : "Más casual",
    "More urgent" : "Más urgente",
    "The maximum number of words/tokens that can be generated in the completion." : "El número máximo de palabras/tokens que pueden generarse en la completación.",
    "Change Tone" : "Cambiar Tono",
    "Ask a question about your data." : "Hacer una pregunta acerca de sus datos.",
    "Input text" : "Texto de entrada",
    "Write a text that you want the assistant to rewrite in another tone." : "Escriba un texto que desee que el asistente reescriba en otro tono.",
    "Desired tone" : "Tono deseado",
    "In which tone should your text be rewritten?" : "¿En qué tono debe reescribirse su texto?",
    "The rewritten text in the desired tone, written by the assistant:" : "El texto reescrito en el tono deseado, escrito por el asistente:",
    "OpenAI's DALL-E 2" : "DALL-E 2 de OpenAI ",
    "Size" : "Tamaño",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Opcional. El tamaño de las imágenes generadas. Debe estar en formato 256x256. El valor por defecto es %s",
    "The model used to generate the images" : "El modelo utilizado para generar las imágenes",
    "OpenAI's Text to Speech" : "Texto a voz de OpenAI",
    "Voice" : "Voz",
    "The voice to use" : "La voz a utilizar",
    "Generate speech" : "Generar dictado",
    "Generate speech from a transcript" : "Generar dictado desde una transcripción",
    "Prompt" : "Prompt",
    "Write transcript that you want the assistant to generate speech from" : "Escriba la transcripción desde la que desea que el asistente genere un dictado",
    "Output speech" : "Dictado de salida",
    "The generated speech" : "El dictado generado",
    "OpenAI and LocalAI integration" : "Integración de OpenAI y LocalAI",
    "Integration of OpenAI and LocalAI services" : "Integración de los servicios de OpenAI y LocalAI",
    "⚠️ The smart pickers have been removed from this app\nas they are now included in the [Assistant app](https://apps.nextcloud.com/apps/assistant).\n\nThis app implements:\n\n* Text generation providers: Free prompt, Summarize, Headline, Context Write, Chat, and Reformulate (using any available large language model)\n* A Translation provider (using any available language model)\n* A SpeechToText provider (using Whisper)\n* An image generation provider\n\n⚠️ Context Write, Summarize, Headline and Reformulate have mainly been tested with OpenAI.\nThey might work when connecting to other services, without any guarantee.\n\nInstead of connecting to the OpenAI API for these, you can also connect to a self-hosted [LocalAI](https://localai.io) instance or [Ollama](https://ollama.com/) instance\nor to any service that implements an API similar to the OpenAI one, for example:\n[IONOS AI Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub), [Plusserver](https://www.plusserver.com/en/ai-platform/) or [MistralAI](https://mistral.ai).\n\n⚠️ This app is mainly tested with OpenAI. We do not guarantee it works perfectly\nwith other services that implement OpenAI-compatible APIs with slight differences.\n\n## Improve AI task pickup speed\n\nTo avoid task processing execution delay, setup at 4 background job workers in the main server (where Nextcloud is installed). The setup process is documented here: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Ethical AI Rating\n### Rating for Text generation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n\n### Rating for Translation using ChatGPT via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inference of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be run on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model's performance and CO2 usage.\n\n### Rating for Image generation using DALL·E via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via the OpenAI API: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can run on-premise\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text-To-Speech via the OpenAI API: 🔴\n\nNegative:\n* The software for training and inferencing of this model is proprietary, limiting running it locally or training by yourself\n* The trained model is not freely available, so the model can not be ran on-premises\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n### Rating for Text generation via LocalAI: 🟢\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n* The training data is freely available, making it possible to check or correct for bias or optimise the performance and CO2 usage.\n\n\n### Rating for Image generation using Stable Diffusion via LocalAI : 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\n\n### Rating for Speech-To-Text using Whisper via LocalAI: 🟡\n\nPositive:\n* The software for training and inferencing of this model is open source\n* The trained model is freely available, and thus can be ran on-premises\n\nNegative:\n* The training data is not freely available, limiting the ability of external parties to check and correct for bias or optimise the model’s performance and CO2 usage.\n\nLearn more about the Nextcloud Ethical AI Rating [in our blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/)." : "⚠️ Los selectores inteligentes se han quitado de esta app\nya que ahora están incluidos en la [app Asistente](https://apps.nextcloud.com/apps/assistant).\n\nEsta app implementa:\n\n* Proveedores de generación de texto: Prompt libre, Resumir, Titular, Escritura contextual, Chat y Reformular (utilizando cualquier modelo de lenguaje disponible)\n* Un proveedor de traducción (utilizando cualquier modelo de lenguaje disponible)\n* Un proveedor de Voz a texto (utilizando Whisper)\n* Un proveedor de generación de imagenes\n\n⚠️ Escritura contextual, Resumir, Titular y Reformular se han probado principalmente con OpenAI.\nPodrían funcionar cuando se conecten a otros servicios, pero no hay garantías.\n\nEn vez de conectarse al API de OpenAI API para las mismas, puede también conectarse a una instancia [LocalAI](https://localai.io) hospedada por Ud. ó  [Ollama](https://ollama.com/) instance\nó a cualquier servicio que provea un API similar al de OpenAI, por ejemplo:\n[IONOS AI Model Hub](https://docs.ionos.com/cloud/ai/ai-model-hub), [Plusserver](https://www.plusserver.com/en/ai-platform/) ó [MistralAI](https://mistral.ai).\n\n⚠️ Esta app ha sido probada principalmente con OpenAI. No podemos garantizar que funcione perfectamente\ncon otros servicios que implementen APIs compatibles con la de OpenAI con ligeras diferencias.\n\n## Mejorar la velocidad con la que se cargan las tareas de IA\n\nPara evitar demoras en el ejecución de tareas de procesamiento, configure 4 gestores de trabajos en segundo plano en el servidor principal (donde Nextcloud está instalado). El proceso de configuración está documentado aquí: https://docs.nextcloud.com/server/latest/admin_manual/ai/overview.html#improve-ai-task-pickup-speed\n\n## Clasificación ética mediante IA\n### Valoración para la generación de Texto utilizando ChatGPT a través del API de OpenAII: 🔴\n\nNegativa:\n* El software para entrenamiento e inferencia de este modelo es propietario, limitando su ejecución local o entrenarlo por sí mismo.\n* El modelo entrenado no está disponible de forma gratuita, por lo tanto, el modelo no puede ejecutarse en su propia infraestructura\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\n\n### Valoración para la Traducción usando ChatGPT a través del API de OpenAI: 🔴\n\nNegativa:\n* El software para entrenamiento e inferencia de este modelo es propietario, limitando su ejecución local o entrenarlo por sí mismo.\n* El modelo entrenado no está disponible de forma gratuita, por lo tanto, el modelo no puede ejecutarse en su propia infraestructura\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\n### Valoración para la generación de imágenes utilizando DALL·E a través del API de OpenAI: 🔴\n\nNegativa:\n* El software para entrenamiento e inferencia de este modelo es propietario, limitando su ejecución local o entrenarlo por sí mismo.\n* El modelo entrenado no está disponible de forma gratuita, por lo tanto, el modelo no puede ejecutarse en su propia infraestructura\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2..\n\n\n### Valoración para la generación de Voz a texto utilizando Whisper a través del API de OpenAII: 🟡\n\nPositiva:\n* El software para entrenamiento e inferencia de este modelo es de código abierto\n* El modelo entrenado está disponible de manera gratuita, por tanto, puede ejecutarse en su propia infraestructura\n\nNegativa:\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2..\n\n### Valoración para la generación de Texto a Voz a través del API de OpenAI: 🔴\n\nNegativa:\n* El software para entrenamiento e inferencia de este modelo es propietario, limitando su ejecución local o entrenarlo por sí mismo.\n* El modelo entrenado no está disponible de forma gratuita, por lo tanto, el modelo no puede ejecutarse en su propia infraestructura\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\n### Valoración para la generación de Texto a través de LocalAI: 🟢\n\nPositiva:\n* El software para entrenamiento e inferencia de este modelo es de código abierto\n* El modelo entrenado está disponible de manera gratuita, por tanto, puede ejecutarse en su propia infraestructura\n* Los datos de entrenamiento están disponibles de forma gratuita, haciendo posible verificar o corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\n\n### Valoración para la generación de imágenes utilizando Stable Diffusion a través de LocalAI : 🟡\n\nPositiva:\n* El software para entrenamiento e inferencia de este modelo es de código abierto\n* El modelo entrenado está disponible de manera gratuita, por tanto, puede ejecutarse en su propia infraestructura\n\nNegativa:\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\n\n### Valoración para la generación de Voz a Texto utilizando Whisper a través de LocalAI: 🟡\n\nPositiva:\n* El software para entrenamiento e inferencia de este modelo es de código abierto\n* El modelo entrenado está disponible de manera gratuita, por tanto, puede ejecutarse en su propia infraestructura\n\nNegativa:\n* Los datos de entrenamiento no están disponibles de forma gratuita, limitando la posibilidad de que terceros puedan verificar y corregir el bias u optimizar el rendimiento del modelo y su uso de CO2.\n\nAprenda más acerca de la Clasificación ética mediante IA de Nextcloud  [en nuestro blog](https://nextcloud.com/blog/nextcloud-ethical-ai-rating/).",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "Objeto JSON. Chequee la documentación de la API para obtener una lista de todos los parámetros disponibles. Por ejemplo {example}",
    "Must be in 256x256 format (default is {default})" : "Debe estar en formato 256x256 (el valor por defecto es {default})",
    "Failed to load models" : "Fallo al cargar modelos",
    "Failed to load quota info" : "Fallo al cargar la información de cuotas",
    "OpenAI admin options saved" : "Las opciones de administrador de OpenAI se han guardado",
    "Failed to save OpenAI admin options" : "Fallo al guardar las opciones de administrador de OpenAI",
    "The Assistant app is not enabled. You need it to use the features provided by the OpenAI/LocalAI integration app." : "La app de Asistente no está habilitada. La necesitará para usar las características provistas por la app de integración OpenAI/LocalAI.",
    "Assistant app" : "app de Asistente",
    "Services with an OpenAI-compatible API:" : "Servicios con un API compatible con OpenAI:",
    "Service URL" : "URL del servicio",
    "Example: {example}" : "Ejemplo: {example}",
    "Leave empty to use {openaiApiUrl}" : "Déjelo en blanco para utilziar {openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "Con la configuración actual, la URL destino utilizada para obtener los modelos es:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Esto debería incluir la dirección de su instancia LocalAI (o cualquier servicio que implemente un API similar al de OpenAI) además de la ruta raíz del API. Esta URL será utilizada por su servidor Nextcloud.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Esto puede ser una dirección local con un puerto, como {example}. En este caso, asegúrese que 'allow_local_remote_servers' esté establecido como verdadero en config.php.",
    "Service name (optional)" : "Nombre del servicio (opcional)",
    "Example: LocalAI of university ABC" : "Ejemplo: LocalAI de la Universidad ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Este nombre se mostrará como un nombre de proveedor en los ajustes de administrador para IA",
    "Request timeout (seconds)" : "Tiempo agotado para petición (segundos)",
    "Timeout for the request to the external API" : "Tiempo máximo de espera para la solicitud al API externo",
    "Authentication" : "Autenticación",
    "Authentication method" : "Método de autenticación",
    "API key" : "Clave de la API",
    "Basic Authentication" : "Autenticación básica",
    "API key (mandatory with OpenAI)" : "Llave API (obligatoria con OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Puede crear una clave API en la configuración de su cuenta OpenAI",
    "Basic Auth user" : "Usuario de autenticación básica",
    "Basic Auth password" : "Contraseña de autenticación básica",
    "Text completion endpoint" : "Punto de acceso para completación de texto",
    "Chat completions" : "Completaciones de chat",
    "Completions" : "Completaciones",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "La selección del endpoint para chat/completación no está disponible para OpenAI ya que utiliza de manera implícita la completación para modelos entonados para \"seguimiento de instrucciones\".",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "UItilizar el endpoint de chat podría mejorar la calidad de la generación de texto para los modelos refinados que \"siguen instrucciones\".",
    "Default completion model to use" : "Modelo de completación por defecto a utilizar",
    "More information about OpenAI models" : "Más información acerca de los modelos OpenAI",
    "More information about LocalAI models" : "Más información sobre los modelos de LocalAI",
    "Extra completion model parameters" : "Parámetros extra para el modelo de completación",
    "Max input tokens per request" : "Número máximo de tokens de entrada por solicitud",
    "Split the prompt into chunks with each chunk being no more than the specified number of tokens (0 disables chunking)" : "Separar el prompt en bloques donde cada bloque no sea mayor el número de tokens especificados (0 deshabilita la separación por bloques)",
    "Default image generation model to use" : "Modelo predeterminado a usar en la generación de imágenes",
    "No models to list" : "No hay modelos que listar",
    "Default image size" : "Tamaño predeterminado de la imagen",
    "Use authentication for image retrieval request" : "Utilice autenticación para la solicitud de recuperación de imágenes",
    "Default transcription model to use" : "Modelo predeterminado a usar en la transcripción",
    "Default speech generation model to use" : "Modelo predeterminado a utilizar para la generación de dictados",
    "TTS Voices" : "Voces TTS",
    "A list of voices supported by the endpoint you are using. Defaults to openai's list." : "Una lista de voces que están soportadas por el endpoint que se encuentra utilizando. De manera predeterminada utilizará la lista de OpenAI",
    "Default voice to use" : "Voz predeterminada a utilizar",
    "Usage limits" : "Límites de uso",
    "Quota enforcement time period (days)" : "Período de imposición de cuota (días)",
    "Usage quotas per time period" : "Cuotas de uso por período de tiempo",
    "Quota type" : "Tipo de cuota",
    "Per-user quota / period" : "Cuotas por usuario / período",
    "Current system-wide usage / period" : "Uso actual global del sistema / período",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Un límite por usuario para el uso de este tipo de API (0 para ilimitado)",
    "Select enabled features" : "Seleccione las características habilitadas",
    "Translation provider (to translate Talk messages for example)" : "Proveedor de traducciones (para traducir mensajes de Talk, por ejemplo)",
    "Text processing providers (to generate text, summarize, context write, etc.)" : "Proveedores de procesamiento de texto (para generar texto, resumir, escritura en contexto, etc.)",
    "Image generation provider" : "Proveedor de generación de imágenes",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Proveedor de voz a texto (para transcribir grabaciones de Talk, por ejemplo)",
    "Text-to-speech provider" : "Proveedor de texto a voz",
    "OpenAI options saved" : "Las opciones de OpenAI fueron guardadas",
    "Failed to save OpenAI options" : "Fallo al guardar las opciones de OpenAI",
    "Your administrator defined a custom service address" : "Su administrador ha definido una dirección de servicio personalizada",
    "Leave the API key empty to use the one defined by administrators" : "Deje la llave API en blanco para utilizar la que fue definida por los administradores",
    "You can create a free API key in your OpenAI account settings" : "Puede crear una clave API gratis en la configuración de su cuenta OpenAI",
    "Leave the username and password empty to use the ones defined by your administrator" : "Deje los campos de usuario y contraseña vacíos para utilizar los que han sido definidos por su administrador",
    "Usage quota info" : "Información de uso de cuotas",
    "Usage" : "Uso",
    "Specifying your own API key will allow unlimited usage" : "Especificar su propia llave API le permitirá uso ilimitado",
    "Use \"{newParam}\" parameter instead of the deprecated \"{deprecatedParam}\"" : "Utilice el parámetro \"{newParam}\" en vez del parámetro deprecado \"{deprecatedParam}\""
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
