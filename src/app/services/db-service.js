function getAllProjects() {
  return ["hi mom"];
}

function getAllSkills() {
  return ["skill issues", "more skill issues"];
}

function getAllSocialLinks() {
  return [
    {
      name: "Github",
      url: "https://github.com/trsaints",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/trsaints2003/",
    },
  ];
}

export const projectService = {
  getAllProjects,
};

export const skillService = {
  getAllSkills,
};

export const socialMediaService = {
  getAllSocialLinks,
};
