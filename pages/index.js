import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <button><a href="/about">About chatbees</a></button>

      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="https://www.chatbees.ai/logo_favicon.svg" />
      </Head>

      <main>
        <Header title="Welcome to chatbees + netlify integration demo!"/>
        <p className="Start chatting with chatbees by interacting with the ">
           This chatbot is trained on chatbees documentations. You can ask questions like "what is chatbees?"
        </p>
      </main>

      <Footer />
    </div>
  )
}
