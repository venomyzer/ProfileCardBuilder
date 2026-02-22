import { forwardRef } from "react";
import "./ProfileCard.css";

const ProfileCard = forwardRef(({ data }, ref) => {
    return (
        <div ref={ref} className="export-wrapper">
            <div className="profile-card">

                {/* Banner */}
                <div className="banner">
                    {data.bannerImage ? (
                        <img src={data.bannerImage} alt="Banner" />
                    ) : (
                        <span className="banner-placeholder">
              Banner (600x200)
            </span>
                    )}
                </div>

                {/* Profile Picture */}
                <div className="profile-wrapper">
                    {data.profileImage ? (
                        <img
                            src={data.profileImage}
                            alt="Profile"
                            className="profile"
                        />
                    ) : (
                        <div className="profile-placeholder">
                            PFP 120px
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="content">

                    <h2 className="name">
                        {data.fullName || "John Doe"}
                    </h2>

                    <div className="roles">
                        {data.roles.length > 0 ? (
                            data.roles.map((role, index) => (
                                <span key={index} className="role">
                  {role}
                </span>
                            ))
                        ) : (
                            <>
                                <span className="role">Front End Developer</span>
                                <span className="role">UI UX Designer</span>
                            </>
                        )}
                    </div>

                    <p className="bio">
                        {data.bio ||
                            "This is the bio of the user. He types a short about him here. Lorem Ipsum Lorem Ipsum Lorem Ipsum."}
                    </p>

                    <div className="tech-stack">
                        {data.techStack.length > 0 &&
                            data.techStack.map((tech, index) => {
                                const Icon = tech.icon;
                                return <Icon key={index} size={22} />;
                            })}
                    </div>

                </div>
            </div>
        </div>
    );
});

export default ProfileCard;