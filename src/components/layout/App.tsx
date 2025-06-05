<<<<<<< Updated upstream
import "./index.css";
import { APITester } from "./APITester";
import { FileHandler } from "./Uploader";
import { IconDisplay } from "./IconDisplay";
import { DownloadZip } from "./DownloadZip";
import { useState } from "react";
import { MainCanvas } from "./Canvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import logo from "./logo.svg";
import reactLogo from "./react.svg";
import bgImage from "./assets/img/3D-BG.gif"

export function App() {

  
  const [fileData, setFileData] = useState<{ name: string; data: string }[]>([]); //must match the prop in Canvas
  const [canvasURLs, setCanvasURLs] = useState<{ name: string; data: string; id: number }[]>([]);
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
      <h2 className="italic text-gray-600"> Work in Progress, Pardon the jank </h2>

      <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>

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

      <div className="flex justify-center items-center">

      <FileHandler setFileData={setFileData} setIsProcessing={setIsProcessing} resetStates={resetStates}/> {/*FileHandler Fixed*/}
      <MainCanvas files={isProcessing ? [] : fileData} setCanvasURLs={setCanvasURLs} />  {/*MainCanvas Fixed*/}
      

      </div>
<div className="w-full"> <IconDisplay files={canvasURLs} />  {/*IconDisplay Fixed*/}</div>
      

    </div>
  );
}

export default App;
=======
import "./styles/index.css";
import "./styles/globals.css"
import addonJson from "./data/dbdItemAddons.json";
import { FileHandler } from "./Uploader";
import { IconDisplay } from "./IconDisplay";
import { useState } from "react";
<<<<<<< Updated upstream:src/App.tsx
import { PerkCanvas } from "./PerkCanvas";
import { ItemCanvas } from "./ItemCanvas";
import { AddonsCanvas } from "./AddonsCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bgImage from "./assets/img/3D-BG.gif";
=======
import { PerkCanvas } from "../canvas/PerkCanvas";
//import { ItemCanvas } from "../oldcanvas/ItemCanvas";
//import { AddonsCanvas } from "../oldcanvas/AddonsCanvas";
//import { OfferingCanvas } from "../oldcanvas/OfferingCanvas";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bgImage from "../../assets/img/3D-BG.gif";
import { canvasAssets } from "../canvas/canvasAssets";
import { BaseCanvas } from "../canvas/BaseCanvas";
>>>>>>> Stashed changes:src/components/layout/App.tsx

export function App() {
  // State for managing uploaded files
  const [files, setFiles] = useState<{ name: string; data: string }[]>([]);
  // State for storing the generated canvas URLs with unique IDs
  const [canvasURLs, setCanvasURLs] = useState<{ name: string; data: string; id: number }[]>([]);
  // State to track if files are currently being processed
  const [isProcessing, setIsProcessing] = useState(false);

  console.log(addonJson[5].name);

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

      
<<<<<<< Updated upstream:src/App.tsx
      <Tabs defaultValue="perk" className="w-[400px] items-center" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="perk">Perks</TabsTrigger>
            <TabsTrigger value="item">Items</TabsTrigger>
            <TabsTrigger value="addon">Addons</TabsTrigger>
          </TabsList>
          {/* Perk tab content */}
          <TabsContent value="perk">
=======
 <Tabs defaultValue="perk" className="w-[400px] items-center" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="perk">Perks</TabsTrigger>
          <TabsTrigger value="item">Items</TabsTrigger>
          <TabsTrigger value="addon">Addons</TabsTrigger>
          <TabsTrigger value="offering">Offerings</TabsTrigger>
        </TabsList>

        <TabsContent value="perk">
>>>>>>> Stashed changes:src/components/layout/App.tsx
            {/* Only pass files to PerkCanvas if not currently processing */}
            <PerkCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>

          <TabsContent value="item">
<<<<<<< Updated upstream:src/App.tsx
            <ItemCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>

          <TabsContent value="addon">
            <AddonsCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>
        </Tabs>
=======
  <BaseCanvas
    files={isProcessing ? [] : files}
    setCanvasURLs={setCanvasURLs}
    jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItems.json"
    getBackgroundImage={(rarity) => ({
      bg: canvasAssets.item.backgrounds[rarity] || canvasAssets.item.backgrounds.event,
      grad: canvasAssets.item.gradients[rarity] || canvasAssets.item.gradients.event
    })}
  />
</TabsContent>

<TabsContent value="addon">
  <BaseCanvas
    files={isProcessing ? [] : files}
    setCanvasURLs={setCanvasURLs}
    jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItemAddons.json"
    getBackgroundImage={(rarity) => ({
      bg: canvasAssets.addon.backgrounds[rarity] || canvasAssets.addon.backgrounds.event,
      grad: canvasAssets.addon.gradients[rarity] || canvasAssets.addon.gradients.event
    })}
  />
</TabsContent>

        <TabsContent value="offering">
          <BaseCanvas
            files={isProcessing ? [] : files}
            setCanvasURLs={setCanvasURLs}
            jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdOfferings.json"
            getBackgroundImage={(rarity) => ({
              bg: canvasAssets.offering.backgrounds[rarity] || canvasAssets.offering.backgrounds.event,
              grad: canvasAssets.offering.gradients[rarity] || canvasAssets.offering.gradients.event
            })}
          />
        </TabsContent>
      </Tabs>
>>>>>>> Stashed changes:src/components/layout/App.tsx
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
>>>>>>> Stashed changes
