import "../../styles/index.css";
import "../../styles/globals.css";
import { FileHandler } from "../common/Uploader";
import { IconDisplay } from "../common/IconDisplay";
import { useState } from "react";
import { PerkCanvas } from "../canvas/PerkCanvas";
import { ItemCanvas } from "../canvas/ItemCanvas";
import { AddonsCanvas } from "../canvas/AddonsCanvas";
import { OfferingCanvas } from "../canvas/OfferingCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bgImage from "../../assets/img/3D-BG.gif";

export function App() {
  // State for managing uploaded files
  const [files, setFiles] = useState<{ name: string; data: string }[]>([]);
  // State for storing the generated canvas URLs with unique IDs
  const [canvasURLs, setCanvasURLs] = useState<{ name: string; data: string; id: number }[]>([]);
  // State to track if files are currently being processed
  const [isProcessing, setIsProcessing] = useState(false);

  // Function to reset all state when switching tabs
  // This ensures a clean slate for each tab
  const handleTabChange = () => {
    setFiles([]); // Clear uploaded files
    setCanvasURLs([]); // Clear generated canvas URLs
    setIsProcessing(false); // Reset processing state
  };

  // Function to handle file uploads
  const handleFileUpload: React.Dispatch<React.SetStateAction<{ name: string; data: string }[]>> = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <h1 className="text-5xl font-bold my-4 leading-tight">PERK CREATOR</h1>
      <h2 className="italic text-gray-600">
        {" "}
        Work in Progress, Pardon the jank{" "}
      </h2>

      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={bgImage}
          alt="3D image"
          className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />

        

        {/*
        <img
          src={logo}
          alt="Bun Logo"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] animate-[spin_20s_linear_infinite]"
        /> */}
      </div>

      <div className="flex justify-center">

      
      <Tabs defaultValue="perk" className="w-[400px] items-center" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="perk">Perks</TabsTrigger>
            <TabsTrigger value="item">Items</TabsTrigger>
            <TabsTrigger value="addon">Addons</TabsTrigger>
            <TabsTrigger value="offering">Offerings</TabsTrigger>

          </TabsList>
          {/* Perk tab content */}
          <TabsContent value="perk">
            {/* Only pass files to PerkCanvas if not currently processing */}
            <PerkCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>
          {/* Item tab content */}
          <TabsContent value="item">
            <ItemCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>
          <TabsContent value="addon">
            <AddonsCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>

          <TabsContent value="offering">
            {/* Only pass files to PerkCanvas if not currently processing */}
            <OfferingCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>
        </Tabs>

        </div>
      <div className="flex justify-center items-center">
        {/* FileHandler component for file uploads */}
        <FileHandler
          setFileData={handleFileUpload}
          setIsProcessing={setIsProcessing}
          resetStates={handleTabChange}
        />
        {/* Tabs component with state reset on change */}
      </div>
      {/* Display generated icons */}
      <div className="w-full">
        <IconDisplay files={canvasURLs} />
      </div>
    </div>
  );
}

export default App;
