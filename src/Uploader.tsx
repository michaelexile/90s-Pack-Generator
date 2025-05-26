import { useEffect, useRef, useState } from "react";
import { MainCanvas } from "./Canvas";

interface FileHandlerProps {
  setFileData: React.Dispatch<React.SetStateAction<{ name: string; data: string }[]>>;
  setIsProcessing: React.Dispatch<React.SetStateAction<boolean>>;
  resetStates: () => void;
}
export function FileHandler({ setFileData, setIsProcessing, resetStates }: FileHandlerProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
   //must match the prop in Canvas

  /*const [fileData, setFileData] = useState<{ name: string; data: string }[]>(
    []
  ); //must match the prop in Canvas*/
  /*const [isProcessing, setIsProcessing] = useState(false);*/

  function uploadFiles(event: any) {
    console.log("FileHandler: uploadFiles called");
    const fileList = event.target.files;

    if (!fileList || fileList.length === 0) {
      console.error("No files selected.");
      return;
    }

    setIsProcessing(true);
    console.log("FileHandler: Files processing:", fileList.length);
    for (let i = 0; i < fileList.length; i++) {
      console.log("FileHandler: Processing file:", fileList[i].name);
      if (!fileList[i].type.startsWith("image/png")) {
        console.error("Only PNG files are allowed.");
        continue;
      } else {
        console.log("FileHandler: creating fileName");
        const fileName = fileList[i].name.substring(
          0,
          fileList[i].name.lastIndexOf(".")
        );
        const icon = fileList[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          console.log("FileHandler: entering reader.onload for file:", fileName);
          const dataUrl = e.target?.result as string;
          setFileData((prevFiles) => {
            console.log("FileHandler: Previous files count:", prevFiles.length);
            const updatedFiles = [...prevFiles, { name: fileName, data: dataUrl }];
            console.log("FileHandler: Updated files count:", updatedFiles.length);
            if (updatedFiles.length === fileList.length) {
              setIsProcessing(false);
              console.log("FileHandler: processing complete, total files:", updatedFiles.length);
            }
            return updatedFiles;
          });
        };

        reader.readAsDataURL(icon);
      }
      console.log("FileHandler: File processed + added to fileData.");
    }
  }

  return (
    <>
      <div className="py-5 ">
        <button
          onClick={() => {
            console.log("FileHandler: Upload button clicked");
            if (fileInputRef.current) {
              fileInputRef.current.value = ''; // Reset the input value
              fileInputRef.current.click();
            }
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Files
        </button>

        <p className="italic text-gray-600">only supports .PNG's</p>

        <input
          type="file"
          id="files"
          name="files"
          multiple
          accept="image/png"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            console.log("FileHandler: File input onChange triggered");
            uploadFiles(e);
          }}
        />
      </div>

    </>

  );
}
