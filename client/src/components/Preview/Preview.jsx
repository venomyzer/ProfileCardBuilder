import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { generateHTML } from "../../utils/generateHTML.js";
import "./Preview.css";

function Preview({ cardData }) {
    return (
        <div>
            <ProfileCard data={cardData} />
        </div>
    );
}

export default Preview;
