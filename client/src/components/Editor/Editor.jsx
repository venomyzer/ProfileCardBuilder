import { useState } from "react";
import "./Editor.css";
import { TECH_OPTIONS } from "../../data/techOptions";
import { ROLE_OPTIONS } from "../../data/roleOptions";

function Editor({ cardData, setCardData }) {

    const [techSearch, setTechSearch] = useState("");
    const [roleSearch, setRoleSearch] = useState("");

    // Banner Upload
    const handleBannerUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (cardData.bannerImage) {
            URL.revokeObjectURL(cardData.bannerImage);
        }

        const imageUrl = URL.createObjectURL(file);

        setCardData((prev) => ({
            ...prev,
            bannerImage: imageUrl
        }));
    };

    // Remove Banner
    const removeBanner = () => {
        if (cardData.bannerImage) {
            URL.revokeObjectURL(cardData.bannerImage);
        }

        setCardData((prev) => ({
            ...prev,
            bannerImage: null
        }));
    };

    // Profile Upload
    const handleProfileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Clean up previous image URL
        if (cardData.profileImage) {
            URL.revokeObjectURL(cardData.profileImage);
        }

        const imageUrl = URL.createObjectURL(file);

        setCardData((prev) => ({
            ...prev,
            profileImage: imageUrl
        }));
    };

    // Remove Profile Picture
    const removeProfile = () => {
        if (cardData.profileImage) {
            URL.revokeObjectURL(cardData.profileImage);
        }

        setCardData((prev) => ({
            ...prev,
            profileImage: null
        }));
    };

    // Full Name
    const handleNameChange = (e) => {
        setCardData((prev) => ({
            ...prev,
            fullName: e.target.value
        }));
    };

    // Add Role (max 2)
    const addRole = (role) => {
        if (
            cardData.roles.length >= 2 ||
            cardData.roles.includes(role)
        ) return;

        setCardData((prev) => ({
            ...prev,
            roles: [...prev.roles, role]
        }));

        setRoleSearch("");
    };

    // Remove Role
    const removeRole = (role) => {
        setCardData((prev) => ({
            ...prev,
            roles: prev.roles.filter((r) => r !== role)
        }));
    };

    // Bio limit (30 words)
    const handleBioChange = (e) => {
        const words = e.target.value.trim().split(/\s+/);

        if (words.length <= 30) {
            setCardData((prev) => ({
                ...prev,
                bio: e.target.value
            }));
        }
    };

    // Filter roles based on search
    const filteredRoles = ROLE_OPTIONS.filter((role) =>
        role.toLowerCase().includes(roleSearch.toLowerCase())
    );

    // Add Tech (max 10)
    const addTech = (tech) => {
        if (
            cardData.techStack.length >= 10 ||
            cardData.techStack.some((t) => t.name === tech.name)
        ) return;

        setCardData((prev) => ({
            ...prev,
            techStack: [...prev.techStack, tech]
        }));

        setTechSearch("");
    };

    // Remove Tech
    const removeTech = (techName) => {
        setCardData((prev) => ({
            ...prev,
            techStack: prev.techStack.filter((t) => t.name !== techName)
        }));
    };

    // Filter Tech
    const filteredTech = TECH_OPTIONS.filter((tech) =>
        tech.name.toLowerCase().includes(techSearch.toLowerCase())
    );

    return (
        <div className="editor">

            <h2>Profile Builder</h2>

            {/* Banner Upload */}
            <label>Upload Banner Image</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleBannerUpload}
            />
            {cardData.bannerImage && (
                <button type="button" onClick={removeBanner}>
                    Remove Banner
                </button>
            )}

            {/* Profile Upload */}
            <label>Upload Profile Picture</label>
            <input
                type="file"
                accept="image/*"
                onChange={handleProfileUpload}
            />
            {cardData.profileImage && (
                <button type="button" onClick={removeProfile}>
                    Remove Profile Picture
                </button>
            )}

            {/* Full Name */}
            <label>Full Name</label>
            <input
                type="text"
                value={cardData.fullName}
                onChange={handleNameChange}
            />

            {/* Roles */}
            <label>Select up to 2 Roles</label>

            <input
                type="text"
                placeholder="Search roles..."
                value={roleSearch}
                onChange={(e) => setRoleSearch(e.target.value)}
            />

            {/* Dropdown */}
            <div>
                {roleSearch &&
                    filteredRoles.map((role) => (
                        <div
                            key={role}
                            onClick={() => addRole(role)}
                        >
                            {role}
                        </div>
                    ))}
            </div>

            {/* Selected Roles */}
            <div>
                {cardData.roles.map((role) => (
                    <span key={role}>
            {role}
                        <button onClick={() => removeRole(role)}>x</button>
          </span>
                ))}
            </div>

            {/* Bio */}
            <label>Bio (Max 30 words)</label>
            <textarea
                value={cardData.bio}
                onChange={handleBioChange}
            />

            {/* Tech Stack */}
            <label>Select up to 10 Tech Tools</label>

            <input
                type="text"
                placeholder="Search tech..."
                value={techSearch}
                onChange={(e) => setTechSearch(e.target.value)}
            />

            <div>
                {techSearch &&
                    filteredTech.map((tech) => (
                        <div
                            key={tech.name}
                            onClick={() => addTech(tech)}
                        >
                            {tech.name}
                        </div>
                    ))}
            </div>

            <div>
                {cardData.techStack.map((tech) => (
                    <span key={tech.name}>
      {tech.name}
                        <button onClick={() => removeTech(tech.name)}>x</button>
    </span>
                ))}
            </div>

        </div>
    );
}

export default Editor;