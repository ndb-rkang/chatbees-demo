import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
       <button><a href="/..">Back to main page</a></button>

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="https://www.chatbees.ai/logo_favicon.svg" />
      </Head>

      <main>
      ABOUT: 

       Welcome to ChatBees, AI Powered Chat Platform for your internal knowledge base! ChatBees helps you easily build an LLM application with your internal knowledge base. ChatBees summarizes information and gets insights through automated analysis of all your data. This helps users get a comprehensive understanding of either a single or all their data sources, including files, websites, Google Docs, Notion, etc.

      Slack/Discord Bots:
      To highlight the capability we have developed Slack/Discord Bots. The bots are tailored to assist teams in obtaining instant, high-quality answers to the questions on their servers. You don't need any coding expertise to set up and utilize the bots. In just a few clicks, you can deploy a Slack/Discord bot, train it with your documents, and content, or with responses in the chat. One use case is to utilize the bot for frequently asked questions on the Slack or Discord server reducing the workload for moderators.

      Develop your own Bot?:
      Check out our quick start Guides and APIs to see how simple it is to develop your bot using ChatBees APIs.

      Get in touch!
      Need Assistance? For any inquiries regarding ChatBees or to provide us with your feedback, please don't hesitate to email us: build@chatbees.ai


      Upload File:
      After the bot is installed in the slack workspace, click ChatBees under Apps, Drag and Drop documents to the bot. The bot will store the documents.
      ChatBees bot does not share documents or information between slack workspaces. Any document uploaded will only be available within the workspace.
      Only Admins are allowed to drop the documents to the bot.
      Currently we support a maximum file size of 10 MB and the following content types
      PDF (.pdf)
      Plaintext (.txt)
      CSV (.csv)
      Markdown (.md)
      Microsoft Words (.docx)
      Documents have to be uniquely named.  If one document is uploaded with a name that is the same as one already uploaded, it will replace that document.

      /beestore command:
      The /beestore Question: How is your day? Answer: Very good. command allows you to store a specific question and answer pair to the bot. This will improve the bot's ability to answer related question. This could be used when the user does not get a good answer for a question, due to the missing or out-of-date information in the uploaded documents. It is recommended that you store frequently asked questions this way.
      The "Question: " and " Answer: " are reserved keywords for /beestore command. Please make sure you follow the format.

      /bees command
      The /bees your question? command is used to ask a question against the documents and information that have been stored with the bot. The bot will analyze all the documents and information that have been shared to the bot, and generate the relevant answer.
      The default permissions for /bees allow everyone to use it in the channel that ChatBees is added to. Please make sure you add ChatBees to the channels that people want to use it.

      Install Discord Bot:
      Please visit pnyx.ai to install and use the Discord bot for your Discord server.

      API Key
      Create API Key
      API Key must be securely retained for all subsequent operations. Without this API Key, access to the collections created using it will be restricted.
      Currently all collections are created under the PUBLIC account. But don't worry. A collection created by an API Key is only accessible to the API Key. Anyone without the same API Key will not be able to access the collections created by that API Key.
      You will soon be able to create your own account and all your data will be within the account.

      ```
      import nautilusdb as ndb
      # Create an API key
      my_api_key = ndb.create_api_key()```

      Collection Operations:
      A Collection is the organizational unit for your data. The question asked to a collection will be analyzed and answered from all data in the collection. It is recommended to put different data into different collections.
      The following operations are supported for Collection:
      Create Collection
      List Collections
      Delete Collection

      Create Collection:
      A Collection is the organizational unit for your data. The question asked to a collection will be analyzed and answered from all data in the collection. It is recommended to put different data into different collections.
      ```import nautilusdb as ndb
        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        # Create a collection
        col = ndb.collection('my_collection')
        ndb.create_collection(col)```


     List Collections:
     You can see list of collections you have access to. For example, this list will include the public read-only collections, as well as all collections that were created using the currently configured API key.
      ```import nautilusdb as ndb
        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        # List collections
        collections = [col.name for col in ndb.list_collections()]

        # returns custom_collection
        print(collections)```


      Delete Collection:
      You can delete a private collection using the same API key that was used to create it.
      ```
        import nautilusdb as ndb

        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        # Delete a collection
        ndb.delete_collection("custom_collection")```


      Upload Document:
      Upload a document to a collection. Currently we support a maximum file size of 10 MB and the following content types
      PDF (.pdf)
      Plaintext (.txt)
      CSV (.csv)
      Markdown (.md)
      Microsoft Words (.docx)
      Documents have to be uniquely named.  If one document is uploaded with a name that is the same as one already uploaded, it will replace that document.

      ```import nautilusdb as ndb

        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        # Create a collection called llm_research.
        collection = ndb.collection('llm_research')
        ndb.create_collection(collection)

        # Local file and URLs are both supported.
        # URL must contain the full scheme prefix (http:// or https://)
        ndb.collection('llm_research').upload_document('/path/to/file.pdf')
        ndb.collection('llm_research').upload_document('https://path/to/file.pdf')```

      Summarize Document:
      After a document is uploaded, you can get a summary of the document. summarize_document() method returns a plain-text summary of the document.

      ```import nautilusdb as ndb
        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        summary = ndb.collection('llm_research').summarize_document('file.pdf')```

      Ask:
      You can ask questions within a collection. ask() method returns a plain-text answer to your question, as well as a list of most relevance references used to derive the answer.
      By default, ask will get answers from all relevant documents in the collection. If you want to ask a single document, you could limit the document when ask.

      ```import nautilusdb as ndb

        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        # get answer from all docs in the collection
        answer, refs = ndb.collection('llm_research').ask('what is a transformer?')

        # get answer from a specific doc in the collection
        answer, refs = ndb.collection('llm_research').ask(question='what is a transformer?', doc_name='file.pdf')```

      Chat:
      You may want to ask a follow-up question on top of the previous questions and answers. You can do so with chat() API. Ask in a chat will answer the question based on the contents related to the question and the previous questions and answers.
      By default, chat will get answers from all relevant documents in the collection. If you want to chat with a single document, you could limit the document when ask.
      ```import nautilusdb as ndb

        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        # start a new chat
        chat = ndb.collection('llm_research').chat()

        # to chat with a single document, specify the doc_name
        # chat = ndb.collection('llm_research').chat(doc_name='file.pdf')

        # ask the first question
        answer, refs = chat.ask('what is a transformer?')

        # ask the second question
        answer, refs = chat.ask('how does transformer work?')
        ```

      List Documents:
      List all documents in a collection. list_documents() method returns a list of document names in the collection.
      ```import nautilusdb as ndb

        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        docs = ndb.collection('llm_research').list_documents()```

      Delete Document:
      Delete a document in a collection.
      ```import nautilusdb as ndb

        # Optional API key to access private collections
        ndb.init(api_key="my_api_key")

        ndb.collection('llm_research').delete_document('file.pdf')```

      Create Crawl:
      Specify the website root url and the collection for the website content. The service will automatically crawl it. This API returns a crawl_id, that you can use to track the crawl status.
      ```import nautilusdb as ndb

        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        col = ndb.collection('my_collection')

        # create crawl, currently crawl up to 200 pages. 
        # a crawl_id is returned, and you could use it to get the crawl status.
        crawl_id = col.create_crawl(root_url)```

      Get Crawl:
      Check the crawl status to see when the crawl completes.
      ```import nautilusdb as ndb

        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        col = ndb.collection('my_collection')

        # check the crawl status
        resp = col.get_crawl(crawl_id)
        print(resp.crawl_status)```


      Index Crawl:
      After a crawl completes and you are satisfied with the crawled pages, simply call index_crawl() to index all content into the collection.
      ``` import nautilusdb as ndb
        # Configure ndb to use the API key
        ndb.init(api_key="my_api_key")

        col = ndb.collection('my_collection')

        col.index_crawl(crawl_id)```
      </main>

      <Footer />
    </div>
  )
}
