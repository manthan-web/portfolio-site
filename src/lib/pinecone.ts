import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone";


const pineconeApiKey = process.env.PINECONE_API_KEY as string
const pIndex = process.env.PINECONE_INDEX as string



export async function getVectorStore () {


    const pinecone = new Pinecone({
        apiKey: pineconeApiKey
    });

    const pineconeIndex = pinecone.Index(pIndex);

    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        { pineconeIndex }
    );


    return vectorStore;
}