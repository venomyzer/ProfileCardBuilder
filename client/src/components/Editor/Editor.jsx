import { useState } from "react";
import * as htmlToImage from "html-to-image";
import "./Editor.css";
import { TECH_OPTIONS } from "../../data/techOptions";
import { ROLE_OPTIONS } from "../../data/roleOptions";

function Editor({ cardData, setCardData, cardRef }) {
    const [techSearch, setTechSearch] = useState("");
    const [roleSearch, setRoleSearch] = useState("");

    /* =======================
       EXPORT PNG
    ======================== */

    const handleExportPNG = async () => {
        if (!cardRef.current) return;

        try {
            const dataUrl = await htmlToImage.toPng(cardRef.current, {
                quality: 1,
                pixelRatio: 2,
                backgroundColor: "#1c1c1f",   // 👈 force solid background
                style: {
                    borderRadius: "22px",
                    overflow: "hidden"
                }
            });

            const link = document.createElement("a");
            link.download = `${cardData.fullName || "profile"}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Export failed:", error);
        }
    };

    /* =======================
       IMAGE UPLOADS
    ======================== */

    const handleBannerUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (cardData.bannerImage) {
            URL.revokeObjectURL(cardData.bannerImage);
        }

        const imageUrl = URL.createObjectURL(file);

        setCardData(prev => ({
            ...prev,
            bannerImage: imageUrl
        }));
    };

    const removeBanner = () => {
        if (cardData.bannerImage) {
            URL.revokeObjectURL(cardData.bannerImage);
        }

        setCardData(prev => ({
            ...prev,
            bannerImage: null
        }));
    };

    const handleProfileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (cardData.profileImage) {
            URL.revokeObjectURL(cardData.profileImage);
        }

        const imageUrl = URL.createObjectURL(file);

        setCardData(prev => ({
            ...prev,
            profileImage: imageUrl
        }));
    };

    const removeProfile = () => {
        if (cardData.profileImage) {
            URL.revokeObjectURL(cardData.profileImage);
        }

        setCardData(prev => ({
            ...prev,
            profileImage: null
        }));
    };

    /* =======================
       NAME
    ======================== */

    const handleNameChange = (e) => {
        setCardData(prev => ({
            ...prev,
            fullName: e.target.value
        }));
    };

    /* =======================
       BIO
    ======================== */

    const handleBioChange = (e) => {
        const words = e.target.value.trim().split(/\s+/);
        if (words.length <= 30) {
            setCardData(prev => ({
                ...prev,
                bio: e.target.value
            }));
        }
    };

    /* =======================
       ROLES
    ======================== */

    const addRole = (role) => {
        if (
            cardData.roles.length >= 2 ||
            cardData.roles.includes(role)
        ) return;

        setCardData(prev => ({
            ...prev,
            roles: [...prev.roles, role]
        }));

        setRoleSearch("");
    };

    const removeRole = (role) => {
        setCardData(prev => ({
            ...prev,
            roles: prev.roles.filter(r => r !== role)
        }));
    };

    const filteredRoles = ROLE_OPTIONS.filter(role =>
        role.toLowerCase().includes(roleSearch.toLowerCase())
    );

    /* =======================
       TECH STACK
    ======================== */

    const addTech = (tech) => {
        if (
            cardData.techStack.length >= 10 ||
            cardData.techStack.some(t => t.name === tech.name)
        ) return;

        setCardData(prev => ({
            ...prev,
            techStack: [...prev.techStack, tech]
        }));

        setTechSearch("");
    };

    const removeTech = (name) => {
        setCardData(prev => ({
            ...prev,
            techStack: prev.techStack.filter(t => t.name !== name)
        }));
    };

    const filteredTech = TECH_OPTIONS.filter(tech =>
        tech.name.toLowerCase().includes(techSearch.toLowerCase())
    );

    return (
        <div className="editor">
            <h2 className="editor-title">Profile Builder</h2>

            {/* Upload Banner */}
            <div className="form-group">
                <label>Upload Banner Image</label>

                <div className="file-upload">
                    <label className="custom-file-btn">
                        Choose Banner
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleBannerUpload}
                            hidden
                        />
                    </label>

                    {cardData.bannerImage && (
                        <button
                            className="remove-btn"
                            onClick={removeBanner}
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>

            {/* Upload Profile */}
            <div className="form-group">
                <label>Upload Profile Picture</label>

                <div className="file-upload">
                    <label className="custom-file-btn">
                        Choose Profile
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfileUpload}
                            hidden
                        />
                    </label>

                    {cardData.profileImage && (
                        <button
                            className="remove-btn"
                            onClick={removeProfile}
                        >
                            Remove
                        </button>
                    )}
                </div>
            </div>

            {/* Name */}
            <div className="form-group">
                <label>Full Name</label>
                <input
                    type="text"
                    value={cardData.fullName}
                    onChange={handleNameChange}
                />
            </div>

            {/* Roles */}
            <div className="form-group">
                <label>Select up to 2 Roles</label>
                <input
                    type="text"
                    placeholder="Search roles..."
                    value={roleSearch}
                    onChange={(e) => setRoleSearch(e.target.value)}
                />

                {roleSearch && (
                    <div className="dropdown">
                        {filteredRoles.map(role => (
                            <div
                                key={role}
                                className="dropdown-item"
                                onClick={() => addRole(role)}
                            >
                                {role}
                            </div>
                        ))}
                    </div>
                )}

                <div className="selected-items">
                    {cardData.roles.map(role => (
                        <div key={role} className="chip">
                            {role}
                            <button onClick={() => removeRole(role)}>✕</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bio */}
            <div className="form-group">
                <label>Bio (Max 30 words)</label>
                <textarea
                    value={cardData.bio}
                    onChange={handleBioChange}
                />
            </div>

            {/* Tech */}
            <div className="form-group">
                <label>Select up to 10 Tech Tools</label>
                <input
                    type="text"
                    placeholder="Search tech..."
                    value={techSearch}
                    onChange={(e) => setTechSearch(e.target.value)}
                />

                {techSearch && (
                    <div className="dropdown">
                        {filteredTech.map(tech => (
                            <div
                                key={tech.name}
                                className="dropdown-item"
                                onClick={() => addTech(tech)}
                            >
                                {tech.name}
                            </div>
                        ))}
                    </div>
                )}

                <div className="selected-items">
                    {cardData.techStack.map(tech => (
                        <div key={tech.name} className="chip">
                            {tech.name}
                            <button onClick={() => removeTech(tech.name)}>✕</button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Export */}
            <button className="export-btn" onClick={handleExportPNG}>
                Export as PNG
            </button>
        </div>
    );
}

export default Editor;