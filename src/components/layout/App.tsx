import "../../styles/index.css";
import "../../styles/globals.css";
import { FileHandler } from "../common/Uploader";
import { IconDisplay } from "../common/IconDisplay";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import bgImage from "../../assets/img/90s Icon Pack.png";
import { BaseCanvas } from "../canvas/BaseCanvas";
import { canvasAssets } from "../canvas/canvasAssets";
import { PerkCanvas } from "../canvas/PerkCanvas";
export function App() {
  const [files, setFiles] = useState<{ name: string; data: string }[]>([]);
  const [canvasURLs, setCanvasURLs] = useState<
    { name: string; data: string; id: number }[]
  >([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("perk");

  const handleTabChange = (tab?: string) => {
    if (tab) setActiveTab(tab);
    setFiles([]);
    setCanvasURLs([]);
    setIsProcessing(false);
  };

  const handleFileUpload: React.Dispatch<
    React.SetStateAction<{ name: string; data: string }[]>
  > = (newFiles) => {
    setFiles(newFiles);
  };

  return (
    <div className="max-w-7xl mx-auto text-center relative z-10">
 {/*     <h1 className="text-5xl font-bold my-4 leading-tight">PERK CREATOR</h1>
      <h2 className="italic text-gray-600">
        Work in Progress, Pardon the jank
      </h2>

      */}

      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={bgImage}
          alt="3D image"
          className="p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] w-[512px]"
        />
      </div>

      <div className="flex justify-center">
        <div className="w-[600px] items-center radio">
          <label>
            <input
              type="radio"
              name="tab"
              value="perk"
              onChange={() => handleTabChange("perk")}
              defaultChecked
            />
            <span className="option">
              Perks
              <span className="click"></span>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="tab"
              value="item"
              onChange={() => handleTabChange("item")}
            />
            <span className="option">
              Items
              <span className="click"></span>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="tab"
              value="addon"
              onChange={() => handleTabChange("addon")}
            />
            <span className="option">
              Addons
              <span className="click"></span>
            </span>
          </label>
          <label>
            <input
              type="radio"
              name="tab"
              value="offering"
              onChange={() => handleTabChange("offering")}
            />
            <span className="option">
              Offerings
              <span className="click"></span>
            </span>
          </label>

          {activeTab === "perk" && (
            <PerkCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
            />
          )}

          {activeTab === "item" && (
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItems.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.item.backgrounds[rarity],
                grad: canvasAssets.item.gradients[rarity],
              })}
            />
          )}

          {activeTab === "addon" && (
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdItemAddons.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.addon.backgrounds[rarity],
                grad: canvasAssets.addon.gradients[rarity],
              })}
            />
          )}

          {activeTab === "offering" && (
            <BaseCanvas
              files={isProcessing ? [] : files}
              setCanvasURLs={setCanvasURLs}
              jsonEndpoint="https://michaelexile.github.io/DBD-IconsJSON/dbdOfferings.json"
              getBackgroundImage={(rarity) => ({
                bg: canvasAssets.offering.backgrounds[rarity],
                grad: canvasAssets.offering.gradients[rarity],
              })}
            />
          )}

          {/* <TabsContent value="perk">

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
*/}
        </div>
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
