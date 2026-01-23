import React, { useState, useRef, useEffect } from "react"
import { SendHorizontal, Mic } from "lucide-react"

type Message = {
  id: number
  text: string
  sender: "user" | "agent"
}

const ChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I help you today?", sender: "agent" },
    { id: 2, text: "I want to build an AI app.", sender: "user" },
  ])
  const [input, setInput] = useState("")
  const bottomRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "user",
    }

    setMessages((prev) => [...prev, newMessage])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: "Nice! Let’s build it together 🚀", sender: "agent" },
      ])
    }, 800)
  }

  return (
    <div className="w-full h-80 rounded-xl flex flex-col overflow-hidden">

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 thin-scrollbar">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                msg.sender === "user"
                  ? "bg-gray-700 text-white"
                  : "bg-gray-300 text-gray-900"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Bar – Matches Your Screenshot */}
      <div className="px-3 py-3">
        <div className="flex items-center gap-3 border rounded-xl px-4 py-2">

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask Rachel"
            className="flex-1 bg-transparent text-sm text-600 placeholder-gray-400 focus:outline-none"
          />

          <button className="text-gray-600 hover:text-gray-800 transition ">
            <Mic size={20} />
          </button>

          <button
            onClick={handleSend}
            className="bg-white text-black p-2 rounded-full hover:scale-105 transition"
          >
            <SendHorizontal size={20} />
          </button>

        </div>
      </div>
    </div>
  )
}

export default ChatWidget
