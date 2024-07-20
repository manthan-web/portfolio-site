import { ChatOpenAI } from "@langchain/openai"
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts"
import { StreamingTextResponse, Message as VercelChatMessage, LangChainAdapter } from 'ai';
import { StringOutputParser } from "@langchain/core/output_parsers"
import { formatDocumentsAsString } from "langchain/util/document";
import { getVectorStore } from "@/lib/pinecone";

export async function POST (req: Request) {


    try {

        const body = await req.json()
        const messages = body.messages

        const currrentMessage = messages[messages.length - 1].content
        const vectorStore = await getVectorStore()
        const docs = await vectorStore.similaritySearch(currrentMessage, 2, {
            person: "manthan"
        })

        const docAsString = formatDocumentsAsString(docs)

        
        const model = new ChatOpenAI({
            model: "gpt-4o-mini",
            streaming: true,
            temperature: 0.5
        })

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "assistant", 
                `You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
                "Answer the user's questions based on the below context. " +
                "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
                "Format your messages in markdown format.\n\n" +
                "Context:\n{context}`,
            ],
            ["user", "Question: {question}"],
        ])

    
        const chain = prompt.pipe(model).pipe(new StringOutputParser())
        
        const response = await chain.stream({
            question: currrentMessage,
            context: docAsString,
        })
        

        return new StreamingTextResponse(LangChainAdapter.toAIStream(response))
        
    } catch (error) {

        return Response.json({error: "Internal server error"})
    }



}