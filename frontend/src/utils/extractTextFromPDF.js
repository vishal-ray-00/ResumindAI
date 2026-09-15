import { TestTubeIcon } from "lucide-react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

const extractTextFromPDF = async (file) => {
    const arrayBuffer= await file.arrayBuffer();
    const pdf=await pdfjsLib.getDocument(arrayBuffer).promise;

    let extractedText="";
    for(let pageNum=1;pageNum<=pdf.numPages;pageNum++){
        const page=await pdf.getPage(pageNum);
        const textContent=await page.getTextContent();
        const pageText=textContent.items.map((item)=>item.str).join(" ");
        extractedText += pageText + "\n";
    }

    return extractedText;
};

export default extractTextFromPDF;
