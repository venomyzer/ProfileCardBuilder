export function generateHTML(data) {

    const rolesHTML = (data.roles || [])
        .map(role => `<span class="role">${role}</span>`)
        .join("");

    const techHTML = (data.techStack || [])
        .map(tech => `<span class="tech">${tech.name}</span>`)
        .join("");

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>${data.fullName || "Profile Card"}</title>
<style>
body {
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.card {
  width: 600px;
  background: #1a1a1f;
  border-radius: 20px;
  padding: 24px;
  color: white;
}

.banner {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}

.profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: -60px;
  border: 4px solid #1a1a1f;
}

.role {
  display: inline-block;
  background: #2f2f35;
  padding: 6px 12px;
  border-radius: 20px;
  margin-right: 8px;
  font-size: 12px;
}

.tech {
  display: inline-block;
  background: #232327;
  padding: 6px 12px;
  border-radius: 12px;
  margin: 4px;
  font-size: 12px;
}
</style>
</head>
<body>

<div class="card">

<!--  REPLACE YOUR BANNER IMAGE SOURCE HERE-->
  ${data.bannerImage ? `<img src="${data.bannerImage}" class="banner" />` : ""}

<!--    REPLACE YOUR PROFILE IMAGE SOURCE HERE-->
  ${data.profileImage ? `<img src="${data.profileImage}" class="profile" />` : ""}

  <h2>${data.fullName || ""}</h2>

  <div>${rolesHTML}</div>

  <p>${data.bio || ""}</p>

  <div>${techHTML}</div>

</div>

</body>
</html>
`;
}