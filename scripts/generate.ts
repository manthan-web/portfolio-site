import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents"
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { getVectorStore } from "../src/lib/pinecone";

async function generateEmbeddings() {


    const vectorStore = await getVectorStore()


    const loader = new DirectoryLoader(
        "src/app/",
        {
            ".tsx": (path) => new TextLoader(path)
        },
        true
    )

    const docs = (await loader.load())
    .filter(doc => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
        const url = doc.metadata.source
        .replace(/\\/g, "/")
        .split("/src/app")[1]
        .split("/page")[0] || "/"

        const pageContentTrimmed = doc.pageContent
        .replace(/^import.*$/gm, "") // Remove all import statements
        .replace(/ className=(["']).*?\1| className={.*?}/g, "") // Remove all className props
        .replace(/^\s*[\r]/gm, "") // remove empty lines
        .trim();


        
        return {
            pageContent: pageContentTrimmed,
            metadata: { url }
        }
    })
    
    const splitter = RecursiveCharacterTextSplitter.fromLanguage('html')
    const splittDocs = await splitter.splitDocuments(docs)

    await vectorStore.addDocuments(splittDocs)
    
}

generateEmbeddings()