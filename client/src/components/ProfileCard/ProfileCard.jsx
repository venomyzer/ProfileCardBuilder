import "./ProfileCard.css";

function ProfileCard( { data }) {

    const themeClass = `card ${data.theme}`;
    const skillsArray = data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");


    return (
        <div className="themeClass" style = {{ borderColor: data.accentColor}}>
            <h2>{data.name}</h2>
            <h4 style={{color: data.accentColor}}>{data.role}</h4>
            <p>{data.bio}</p>

            <div className="skills">
                {skillsArray.map((skill, index) => (
                    <span
                        key={index}
                        className="skill"
                        style={{ backgroundColor: data.accentColor }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ProfileCard;