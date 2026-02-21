import { useState, useRef } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import defaultData from "./data/defaultData";

function App() {
    const [cardData, setCardData] = useState(defaultData);
    const cardRef = useRef(null);

    return (
        <div className="app">

            {/* LEFT: Preview Section */}
            <div className="preview-section">
                <ProfileCard ref={cardRef} data={cardData} />
            </div>

            {/* RIGHT: Editor Section */}
            <div className="editor-section">
                <Editor
                    cardData={cardData}
                    setCardData={setCardData}
                    cardRef={cardRef}
                />
            </div>

        </div>
    );
}

export default App;