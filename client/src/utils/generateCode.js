export function generateCode(data) {
    const skillsArray = data.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter((skill) => skill !== "");

    const skillsHTML = skillsArray
        .map(
            (skill) =>
                `<span class="skill">${skill}</span>`
        )
        .join("\n      ");

    return `
<!DOCTYPE html>
<html>
<head>
  <style>
    .card {
      width: 320px;
      padding: 20px;
      border: 2px solid ${data.accentColor};
      border-radius: 15px;
      font-family: Arial, sans-serif;
      text-align: center;
      background: white;
    }

    .role {
      color: ${data.accentColor};
    }

    .skill {
      display: inline-block;
      padding: 5px 10px;
      margin: 5px;
      border-radius: 20px;
      background: ${data.accentColor};
      color: white;
      font-size: 12px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h2>${data.name}</h2>
    <h4 class="role">${data.role}</h4>
    <p>${data.bio}</p>
    <div>
      ${skillsHTML}
    </div>
  </div>
</body>
</html>
`;
}
