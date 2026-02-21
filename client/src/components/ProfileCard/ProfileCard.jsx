import { forwardRef } from "react";
import "./ProfileCard.css";

const ProfileCard = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="profile-card">

            {/* Banner */}
            {data.bannerImage && (
                <img
                    src={data.bannerImage}
                    alt="Banner"
                    className="banner"
                />
            )}

            {/* Profile Picture */}
            {data.profileImage && (
                <img
                    src={data.profileImage}
                    alt="Profile"
                    className="profile"
                />
            )}

            {/* Content */}
            <div className="content">

                <h2 className="name">{data.fullName}</h2>

                {/* Roles */}
                <div className="roles">
                    {data.roles.map((role, index) => (
                        <span key={index} className="role">
              {role}
            </span>
                    ))}
                </div>

                {/* Bio */}
                <p className="bio">{data.bio}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                    {data.techStack.map((tech, index) => {
                        const Icon = tech.icon;
                        return <Icon key={index} size={22} />;
                    })}
                </div>

            </div>
        </div>
    );
});

export default ProfileCard;