"use client";
import Projectcard from "./Projectcard";
import React, { useState } from "react";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Ecomzy",
    description: "Redux based Ecommerce website",
    image: "/images/Project1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Ecomzy",
    description: "Redux based Ecommerce website",
    image: "/images/Project2.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Ecomzy",
    description: "Redux based Ecommerce website",
    image: "/images/Project3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Ecomzy",
    description: "Redux based Ecommerce website",
    image: "/images/Project4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects=projectsData.filter((project)=>
   project.tag.includes(tag)
    
  )
  return (
    <>
      <h2 className="text-white text-center text-4xl font-bold mt-4 mb:8 md:mb-12 ">
        My Projects
      </h2>
      <div className="text-white flex justify-center items-center gap-2 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 px-4">
        {filteredProjects.map((project) => {
          return (
            <Projectcard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsSection;
