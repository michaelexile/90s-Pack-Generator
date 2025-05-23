import "./index.css";
import { APITester } from "./APITester";
import { FileHandler } from "./Uploader";
import { IconDisplay } from "./IconDisplay";
import { DownloadZip } from "./DownloadZip";
import { useState } from "react";
import { MainCanvas } from "./Canvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import logo from "./logo.svg";
import reactLogo from "./react.svg";
import bgImage from "./assets/img/3D-BG.gif";
import itemImage from "./assets/img/3D-itemBG.gif";

export function App() {
  const [fileData, setFileData] = useState<{ name: string; data: string }[]>(
    []
  ); //must match the prop in Canvas
  const [canvasURLs, setCanvasURLs] = useState<
    { name: string; data: string; id: number }[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(false);

  console.log("fileData from App.tsx" + fileData);

  function resetStates() {
    setFileData([]);
    setCanvasURLs([]);
    setIsProcessing(false);
  }

  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <h1 className="text-5xl font-bold my-4 leading-tight">PERK CREATOR</h1>
      <h2 className="italic text-gray-600">
        {" "}
        Work in Progress, Pardon the jank{" "}
      </h2>



      <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="perks">Perks</TabsTrigger>
            <TabsTrigger value="items">Items</TabsTrigger>
            <TabsTrigger value="addons">Addons</TabsTrigger>
            <TabsTrigger value="offerings">Offerings</TabsTrigger>
          </TabsList>
          <TabsContent value="perks"><div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={bgImage}
          alt="3D image"
          className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
      </div></TabsContent>
          <TabsContent value="items"><div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={itemImage}
          alt="3D image"
          className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
      </div></TabsContent>
          <TabsContent value="addons">Add Addons</TabsContent>
          <TabsContent value="offerings">Add Offerings</TabsContent>
        </Tabs>
        <FileHandler
          setFileData={setFileData}
          setIsProcessing={setIsProcessing}
          resetStates={resetStates}
        />
        {/*FileHandler Fixed*/}
        <MainCanvas
          files={isProcessing ? [] : fileData}
          setCanvasURLs={setCanvasURLs}
        />
        {/*MainCanvas Fixed*/}
      </div>
      <div className="w-full">
        <IconDisplay files={canvasURLs} /> {/*IconDisplay Fixed*/}
      </div>
    </div>
  );
}

export default App;
