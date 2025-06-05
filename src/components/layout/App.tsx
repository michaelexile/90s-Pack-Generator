import "../../styles/index.css";
import "../../styles/globals.css";
import { FileHandler } from "../common/Uploader";
import { IconDisplay } from "../common/IconDisplay";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bgImage from "../../assets/img/3D-BG.gif";
import { BaseCanvas } from "../canvas/BaseCanvas";
import { canvasAssets } from "../canvas/canvasAssets";
import { PerkCanvas } from "../canvas/PerkCanvas";
export function App() {
  const [files, setFiles] = useState<{ name: string; data: string }[]>([]);
  const [canvasURLs, setCanvasURLs] = useState<{ name: string; data: string; id: number }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleTabChange = () => {
    setFiles([]);
    setCanvasURLs([]);
    setIsProcessing(false);
  };

  const handleFileUpload: React.Dispatch<React.SetStateAction<{ name: string; data: string }[]>> = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <div className="max-w-7xl mx-auto p-8 text-center relative z-10">
      <h1 className="text-5xl font-bold my-4 leading-tight">PERK CREATOR</h1>
      <h2 className="italic text-gray-600">Work in Progress, Pardon the jank</h2>

      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={bgImage}
          alt="3D image"
          className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="perk" className="w-[400px] items-center" onValueChange={handleTabChange}>
          <TabsList>
            <TabsTrigger value="perk">Perks</TabsTrigger>
            <TabsTrigger value="item">Items</TabsTrigger>
            <TabsTrigger value="addon">Addons</TabsTrigger>
            <TabsTrigger value="offering">Offerings</TabsTrigger>
          </TabsList>

          <TabsContent value="perk">
            {/* Only pass files to PerkCanvas if not currently processing */}
            <PerkCanvas files={isProcessing ? [] : files} setCanvasURLs={setCanvasURLs} />
          </TabsContent>

          <TabsContent value="item">
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItems.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.item.backgrounds[rarity],
                grad: canvasAssets.item.gradients[rarity]
              })}
            />
          </TabsContent>

          <TabsContent value="addon">
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItemAddons.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.addon.backgrounds[rarity],
                grad: canvasAssets.addon.gradients[rarity]
              })}
            />
          </TabsContent>

          <TabsContent value="offering">
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdOfferings.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.offering.backgrounds[rarity],
                grad: canvasAssets.offering.gradients[rarity]
              })}
            />
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex justify-center items-center">
        <FileHandler
          setFileData={handleFileUpload}
          setIsProcessing={setIsProcessing}
          resetStates={handleTabChange}
        />
      </div>

      <div className="w-full">
        <IconDisplay files={canvasURLs} />
      </div>
    </div>
  );
}

export default App;
