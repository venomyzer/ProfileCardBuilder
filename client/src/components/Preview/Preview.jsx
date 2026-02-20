import { useState } from "react";
import ProfileCard from "../ProfileCard/ProfileCard";
import { generateCode } from "../../utils/generateCode";
import "./Preview.css";

function Preview({ cardData }) {
    return (
        <div>
            <ProfileCard data={cardData} />
        </div>
    );
}

export default Preview;
