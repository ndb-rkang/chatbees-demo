import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <md-block>
        #ChatBees Serverless Chat Platform for your knowledge base
            
        ##About
        Welcome to ChatBees, AI Powered Chat Platform for your internal knowledge base! ChatBees helps you easily build an LLM application with your internal knowledge base. ChatBees summarizes information and gets insights through automated analysis of all your data. This helps users get a comprehensive understanding of either a single or all their data sources, including files, websites, Google Docs, Notion, etc.

        </md-block>
      </main>

      <Footer />
    </div>
  )
}
