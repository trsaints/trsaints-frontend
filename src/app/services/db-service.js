function getAllProjects() {
  return [
    {
      id: 0,
      title: "Project Title",
      stack: [{ tech: "HTML" }, { tech: "CSS" }, { tech: "Javascript" }],
      year: 2023,
      banner: {
        src: "https://picsum.photos/200/300",
        alt: "Project banner",
      },
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
  return [
    {
      id: 0,
      title: "HTML",
      type: "hard skill",
      desc: "lorem ipsum dolor sit amet",
    },
  ];
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
