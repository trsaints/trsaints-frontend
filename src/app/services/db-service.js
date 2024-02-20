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
    {
      id: 1,
      title: "Project Title 2",
      stack: [{ tech: "HTML" }, { tech: "CSS" }, { tech: "React" }],
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

function filterProjects(projects, search) {
  return projects.filter((project) => projectTitleHas(project, search));
}
function projectTitleHas(project, search) {
  return project.title.toLowerCase().includes(search.toLowerCase());
}
function getAllSkills() {
  return [
    {
      id: 0,
      title: "HTML",
      type: "hard skill",
      desc: "lorem ipsum dolor sit amet",
      banner: {
        path: "",
        alt: "",
      },
    },
    {
      id: 1,
      title: "CSS",
      type: "hard skill",
      desc: "lorem ipsum dolor sit amet",
      banner: {
        path: "",
        alt: "",
      },
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
  filterProjects,
};

export const skillService = {
  getAllSkills,
};

export const socialMediaService = {
  getAllSocialLinks,
};
