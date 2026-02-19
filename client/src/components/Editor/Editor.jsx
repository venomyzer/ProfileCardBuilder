import "./Editor.css";

function Editor({ cardData, setCardData }) {
    const handleChange = (e) => {
        const { name, value } = e.target;

        setCardData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="editor">
            <h2>Edit Portfolio</h2>

            <label>Name</label>
            <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={handleChange}
            />

            <label>Role</label>
            <input
                type="text"
                name="role"
                value={cardData.role}
                onChange={handleChange}
            />

            <label>Bio</label>
            <textarea
                name="bio"
                value={cardData.bio}
                onChange={handleChange}
            />

            <label>Skills (comma separated)</label>
            <input
                type="text"
                name="skills"
                value={cardData.skills}
                onChange={handleChange}
            />

            <label>Accent Color</label>
            <input
                type="color"
                name="accentColor"
                value={cardData.accentColor}
                onChange={handleChange}
            />

            <label>Theme</label>
            <select
                name="theme"
                value={cardData.theme}
                onChange={handleChange}
            >
                <option value="minimal">Minimal</option>
                <option value="gradient">Gradient</option>
                <option value="glass">Glass</option>
            </select>
        </div>
    );
}

export default Editor;
