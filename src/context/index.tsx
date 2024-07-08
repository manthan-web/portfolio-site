"use client"
import { createContext, useState } from "react";
import { nanoid } from "nanoid";


const defaultValue = [{
    id: nanoid(),
    role: "assistant",
    content: `**Welcome to Chatapp**  
    Hey, Feel free to ask the question related to specified chapters ...`
  }]

export type Message = {
    id: string;
    name?: string;
    role: string;
    content: string;
    followUpQuestions?: string;
}

export type MessageContextType = {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
    updateMessage: (id: string, updateFn: (prevText: string) => string) => void;
    addMessage: (message: Message) => void
};


export const MessageContext = createContext<MessageContextType>({
    messages: [],
    setMessages: () => {},
    updateMessage: () => {},
    addMessage: () => {},
});



export const MessageContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [messages, setMessages] = useState<Message[]>(defaultValue);

    const updateMessage = (id: string, updateFn: (prevText: string) => string) => {
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message.id === id
            ? { id, role: "assistant", content: updateFn(message.content) }
            : message
        )
      );
    }

    const addMessage = (message: Message) => {
      setMessages((prev) => [...prev, message])
    }


    return (
        <MessageContext.Provider value={{ messages, setMessages, updateMessage, addMessage}}>
          {children}
        </MessageContext.Provider>
      );
}