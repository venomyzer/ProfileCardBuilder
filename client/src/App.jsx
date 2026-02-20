import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Preview from "./components/Preview/Preview";
import defaultData from "./data/defaultData";

function App() {
    const [cardData, setCardData] = useState(defaultData);

    return (
        <div className="app">
            <Preview cardData={cardData} />
            <Editor cardData={cardData} setCardData={setCardData} />
        </div>
    );
}

export default App;
