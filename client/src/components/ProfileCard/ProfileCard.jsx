import "./ProfileCard.css";
import { useEffect } from "react";

function ProfileCard({ data }) {

    useEffect(() => {
        return () => {
            if (data.bannerImage) URL.revokeObjectURL(data.bannerImage);
            if (data.profileImage) URL.revokeObjectURL(data.profileImage);
        };
    }, [data.bannerImage, data.profileImage]);

    return (
        <div>

            {/* Banner */}
            <div>
                {data.bannerImage ? (
                    <img
                        src={data.bannerImage}
                        alt="Banner"
                        width="600"
                        height="200"
                    />
                ) : (
                    <div>Banner Placeholder</div>
                )}
            </div>

            {/* Profile Picture */}
            <div>
                {data.profileImage ? (
                    <img
                        src={data.profileImage}
                        alt="Profile"
                        width="120"
                        height="120"
                    />
                ) : (
                    <div>PFP Placeholder</div>
                )}
            </div>

            {/* Name */}
            <h2>{data.fullName}</h2>

            {/* Roles */}
            <div>
                <p>Roles:</p>
                {data.roles.map((role, index) => (
                    <span key={index}>{role}</span>
                ))}
            </div>

            {/* Bio */}
            <div>
                <p>Bio:</p>
                <p>{data.bio}</p>
            </div>

            {/* Tech Stack */}
            <div>
                <p>Tech Stack:</p>
                {data.techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                        <IconComponent key={index} size={28} />
                    );
                })}
            </div>

        </div>
    );
}

export default ProfileCard;