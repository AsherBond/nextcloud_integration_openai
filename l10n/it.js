OC.L10N.register(
    "integration_openai",
    {
    "Invalid models response received" : "Ricevuta risposta di modelli non validi",
    "Default" : "Predefinito",
    "Text generation" : "Generazione di testo",
    "Image generation" : "Generazione di immagini",
    "Audio transcription" : "Trascrizione audio",
    "Unknown" : "Sconosciuto",
    "tokens" : "token",
    "images" : "immagini",
    "seconds" : "secondi",
    "characters" : "caratteri",
    "Unknown error while retrieving quota usage." : "Errore sconosciuto durante il recupero dell'utilizzo della quota.",
    "Text generation quota exceeded" : "Superata la quota di generazione del testo",
    "Unknown text generation error" : "Errore di generazione del testo sconosciuto",
    "Could not read audio file." : "Impossibile leggere il file audio.",
    "Audio transcription quota exceeded" : "Superata la quota di trascrizione audio",
    "Unknown audio trancription error" : "Errore sconosciuto nella trascrizione audio",
    "Image generation quota exceeded" : "Quota di generazione delle immagini superata",
    "Unknown image generation error" : "Errore di generazione dell'immagine sconosciuto",
    "Bad HTTP method" : "Metodo HTTP non corretto",
    "Bad credentials" : "Credenziali non valide",
    "API request error: " : "Errore richiesta API:",
    "Invalid API Key/Basic Auth: " : "Chiave API/Autenticazione di base non valida:",
    "Maximum output words" : "Numero massimo di parole in uscita",
    "The maximum number of words/tokens that can be generated in the output." : "Numero massimo di parole/token che possono essere generati nell'output.",
    "Model" : "Modello",
    "The model used to generate the output" : "Il modello utilizzato per generare l'output",
    "Analyze images" : "Analizzare le immagini",
    "Ask a question about the given images." : "Poni una domanda sulle immagini fornite.",
    "Images" : "Immagini",
    "Images to ask a question about" : "Immagini su cui porre una domanda",
    "Question" : "Domanda",
    "What to ask about the image." : "Cosa chiedere riguardo all'immagine.",
    "Generated response" : "Risposta generata",
    "The answer to the question" : "La risposta alla domanda",
    "Completion model" : "Modello di completamento",
    "The model used to generate the completion" : "Il modello utilizzato per generare il completamento",
    "Output voice" : "Voce di uscita",
    "The voice used to generate speech" : "La voce utilizzata per generare il discorso",
    "Speed" : "Velocità",
    "Remote audio ID" : "ID audio remoto",
    "The ID of the audio response returned by the remote service" : "L'ID della risposta audio restituita dal servizio remoto",
    "Remote audio expiration date" : "Data di scadenza dell'audio remoto",
    "The remote audio response stays available in the service until this date" : "La risposta audio remota rimane disponibile nel servizio fino a questa data",
    "Detect language" : "Rileva lingua",
    "Friendlier" : "Più amichevole",
    "More formal" : "Più formale",
    "Funnier" : "Più divertente",
    "More casual" : "Più informale",
    "More urgent" : "Più urgente",
    "The maximum number of words/tokens that can be generated in the completion." : "Numero massimo di parole/token che possono essere generati nel completamento.",
    "Change Tone" : "Cambia Tono",
    "Ask a question about your data." : "Poni una domanda sui tuoi dati.",
    "Input text" : "Testo di input",
    "Write a text that you want the assistant to rewrite in another tone." : "Scrivi un testo che vuoi che l'assistente riscriva con un tono diverso.",
    "Desired tone" : "Tono desiderato",
    "In which tone should your text be rewritten?" : "Con quale tono dovresti riscrivere il tuo testo?",
    "The rewritten text in the desired tone, written by the assistant:" : "Il testo riscritto nel tono desiderato, scritto dall'assistente:",
    "OpenAI's DALL-E 2" : "OpenAI's DALL-E 2",
    "Size" : "Dimensione",
    "Optional. The size of the generated images. Must be in 256x256 format. Default is %s" : "Facoltativo. La dimensione delle immagini generate. Devono essere in formato 256x256. Il valore predefinito è %s",
    "The model used to generate the images" : "Il modello utilizzato per generare le immagini",
    "Voice" : "Voce",
    "The voice to use" : "La voce da usare",
    "Prompt" : "Prompt",
    "OpenAI and LocalAI integration" : "Integrazione OpenAI e LocalAI",
    "Integration of OpenAI and LocalAI services" : "Integrazione dei servizi OpenAI e LocalAI",
    "JSON object. Check the API documentation to get the list of all available parameters. For example: {example}" : "Oggetto JSON. Controlla la documentazione API per ottenere l'elenco di tutti i parametri disponibili. Ad esempio: {example}",
    "Must be in 256x256 format (default is {default})" : "Deve essere in formato 256x256 (il valore predefinito è {default})",
    "Failed to load models" : "Impossibile caricare i modelli",
    "Failed to load quota info" : "Impossibile caricare le informazioni sulla quota",
    "OpenAI admin options saved" : "Opzioni di amministrazione OpenAI salvate",
    "Failed to save OpenAI admin options" : "Impossibile salvare le opzioni di amministrazione di OpenAI",
    "The Assistant app is not enabled. You need it to use the features provided by the OpenAI/LocalAI integration app." : "L'app Assistant non è abilitata. Ti serve per usare le funzionalità fornite dall'app di integrazione OpenAI/LocalAI.",
    "Assistant app" : "App Assistant",
    "Services with an OpenAI-compatible API:" : "Servizi con API compatibile con OpenAI:",
    "Service URL" : "URL del servizio",
    "Example: {example}" : "Esempio: {example}",
    "Leave empty to use {openaiApiUrl}" : "Lasciare vuoto per utilizzare{openaiApiUrl}",
    "With the current configuration, the target URL used to get the models is:" : "Con la configurazione attuale, l'URL di destinazione utilizzato per ottenere i modelli è:",
    "This should include the address of your LocalAI instance (or any service implementing an API similar to OpenAI) along with the root path of the API. This URL will be accessed by your Nextcloud server." : "Dovrebbe includere l'indirizzo della tua istanza LocalAI (o qualsiasi servizio che implementa un'API simile a OpenAI) insieme al percorso radice dell'API. Questo URL sarà accessibile dal tuo server Nextcloud.",
    "This can be a local address with a port like {example}. In this case, make sure 'allow_local_remote_servers' is set to true in config.php." : "Questo può essere un indirizzo locale con una porta come {example}.In questo caso, assicurati che 'allow_local_remote_servers' sia impostato su true in config.php.",
    "Service name (optional)" : "Nome del servizio (facoltativo)",
    "Example: LocalAI of university ABC" : "Esempio: LocalAI dell'università ABC",
    "This name will be displayed as provider name in the AI admin settings" : "Questo nome verrà visualizzato come nome del provider nelle impostazioni di amministrazione AI",
    "Request timeout (seconds)" : "Tempo massimo della richiesta (secondi)",
    "Timeout for the request to the external API" : "Timeout per la richiesta all'API esterna",
    "Authentication" : "Autenticazione",
    "Authentication method" : "Metodo di autenticazione",
    "API key" : "Chiave API",
    "Basic Authentication" : "Autenticazione di base",
    "API key (mandatory with OpenAI)" : "Chiave API (obbligatoria con OpenAI)",
    "You can create an API key in your OpenAI account settings" : "Puoi creare una chiave API nelle impostazioni del tuo account OpenAI",
    "Basic Auth user" : "Utente con autenticazione di base",
    "Basic Auth password" : "Password di autenticazione di base",
    "Text completion endpoint" : "Punto finale di completamento del testo",
    "Chat completions" : "Completamento delle chat",
    "Completions" : "Completamenti",
    "Selection of chat/completion endpoint is not available for OpenAI since it implicitly uses chat completions for \"instruction following\" fine-tuned models." : "La selezione dell'endpoint di chat/completamento non è disponibile per OpenAI poiché utilizza implicitamente i completamenti di chat per i modelli ottimizzati \"seguendo le istruzioni\".",
    "Using the chat endpoint may improve text generation quality for \"instruction following\" fine-tuned models." : "L'utilizzo dell'endpoint della chat può migliorare la qualità della generazione del testo per i modelli ottimizzati che seguono le istruzioni.",
    "Default completion model to use" : "Modello di completamento predefinito da utilizzare",
    "More information about OpenAI models" : "Ulteriori informazioni sui modelli OpenAI",
    "More information about LocalAI models" : "Ulteriori informazioni sui modelli LocalAI",
    "Extra completion model parameters" : "Parametri aggiuntivi del modello di completamento",
    "Max input tokens per request" : "Numero massimo di token di input per richiesta",
    "Split the prompt into chunks with each chunk being no more than the specified number of tokens (0 disables chunking)" : "Suddividere il prompt in blocchi, ognuno dei quali non deve superare il numero specificato di token (0 disabilita la suddivisione in blocchi)",
    "Default image generation model to use" : "Modello di generazione delle immagini predefinito da utilizzare",
    "No models to list" : "Nessun modello da elencare",
    "Default image size" : "Dimensione immagine predefinita",
    "Use authentication for image retrieval request" : "Utilizza l'autenticazione per la richiesta di recupero dell'immagine",
    "Default transcription model to use" : "Modello di trascrizione predefinito da utilizzare",
    "TTS Voices" : "Voci TTS",
    "A list of voices supported by the endpoint you are using. Defaults to openai's list." : "Un elenco di voci supportate dall'endpoint in uso. L'elenco predefinito è quello di OpenAI.",
    "Default voice to use" : "Voce predefinita da utilizzare",
    "Usage limits" : "Limiti di utilizzo",
    "Quota enforcement time period (days)" : "Periodo di applicazione delle quote (giorni)",
    "Usage quotas per time period" : "Quote di utilizzo per periodo di tempo",
    "Quota type" : "Tipo di quota",
    "Per-user quota / period" : "Quota per utente / periodo",
    "Current system-wide usage / period" : "Utilizzo attuale dell'intero sistema / periodo",
    "A per-user limit for usage of this API type (0 for unlimited)" : "Un limite per utente per l'utilizzo di questo tipo di API (0 per illimitato)",
    "Select enabled features" : "Seleziona le funzionalità abilitate",
    "Translation provider (to translate Talk messages for example)" : "Fornitore di traduzioni (per tradurre messaggi di Talk, ad esempio)",
    "Text processing providers (to generate text, summarize, context write, etc.)" : "Fornitori di elaborazione di testo (per generare testo, riassumere, scrivere il contesto, ecc.)",
    "Image generation provider" : "Provider di generazione di immagini",
    "Speech-to-text provider (to transcribe Talk recordings for example)" : "Provider di sintesi vocale (ad esempio per trascrivere registrazioni di conversazioni)",
    "OpenAI options saved" : "Opzioni OpenAI salvate",
    "Failed to save OpenAI options" : "Impossibile salvare le opzioni OpenAI",
    "Your administrator defined a custom service address" : "L'amministratore ha definito un indirizzo di servizio personalizzato",
    "Leave the API key empty to use the one defined by administrators" : "Lasciare vuota la chiave API per utilizzare quella definita dagli amministratori",
    "You can create a free API key in your OpenAI account settings" : "Puoi creare una chiave API gratuita nelle impostazioni del tuo account OpenAI",
    "Leave the username and password empty to use the ones defined by your administrator" : "Lascia il nome utente e la password vuoti per utilizzare quelli definiti dal tuo amministratore",
    "Usage quota info" : "Informazioni sulla quota di utilizzo",
    "Usage" : "Utilizzo",
    "Specifying your own API key will allow unlimited usage" : "Specificando la tua chiave API potrai usufruire di un utilizzo illimitato",
    "Use \"{newParam}\" parameter instead of the deprecated \"{deprecatedParam}\"" : "Utilizza \"{newParam}\" parametro invece del deprecato \"{deprecatedParam}\""
},
"nplurals=3; plural=n == 1 ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
