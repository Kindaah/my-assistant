import Image from 'next/image'
import { Inter } from 'next/font/google'
import { OpenAI } from "langchain/llms/openai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>This is My Virtual Assistant Page </div>
    </main>
  )
}
