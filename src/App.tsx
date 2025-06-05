import logo from "./logo.svg";
import reactLogo from "./react.svg";
import bgImage from "./assets/img/3D-BG.gif"

export function App() {

  
  const [fileData, setFileData] = useState<{ name: string; data: string }[]>([]); //must match the prop in Canvas
  const [canvasURLs, setCanvasURLs] = useState<{ name: string; data: string; id: number }[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
