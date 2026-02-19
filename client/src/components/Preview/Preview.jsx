import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { generateCode } from "../../utils/generateCode";
import "./Preview.css";

function Preview({ cardData }) {

    const [showModal, setShowModal] = useState(false);
    const [generatedCode, setGeneratedCode] = useState("");

    const handleExport = () => {
        const code = generateCode(cardData);
        setGeneratedCode(code);
        setShowModal(true);
    };
    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode);
        alert("Code copied to clipboard!");
    };

    return (
        <div className="preview">
            <ProfileCard data={cardData} />

            <button className="export-btn" onClick={handleExport}>
                Export Code
            </button>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Generated HTML</h3>
                        <textarea
                            value={generatedCode}
                            readOnly
                        />
                        <button onClick={copyToClipboard}>
                            Copy Code
                        </button>
                        <button onClick={() => setShowModal(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Preview;
