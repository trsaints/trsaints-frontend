function getAllProjects() {
  return [
    {
      id: 0,
      title: "Project Title",
      stack: [{ tech: "HTML" }, { tech: "CSS" }, { tech: "Javascript" }],
      year: 2023,
      banner: "https://picsum.photos/200/300",
      desc: "Project Description",
      links: [
        {
          name: "ver código fonte",
          url: "https://github.com/trsaints",
        },
        {
          name: "deploy",
          url: "https://www.linkedin.com/in/trsaints2003/",
        },
      ],
    },
  ];
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
