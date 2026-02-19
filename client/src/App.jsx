import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import defaultData from "./data/defaultData";

function App() {
    const [cardData, setCardData] = useState(defaultData);

    return (
        <div className="app">
            <Editor cardData={cardData} setCardData={setCardData} />
            <Preview cardData={cardData} />
        </div>
    );
}

export default App;
