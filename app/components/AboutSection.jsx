"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ReactJs</li>
        <li>Redux</li>
        <li>Javascript</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Java</li>
        <li>C</li>
        <li>Nodejs</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BCA - Maharaja Surajmal Institute</li>
        <li>Class XII - Satyawati Sood Arya Girls Sr. Sec. School</li>
        <li>Class X - Satyawati Sood Arya Girls Sr. Sec. School</li>

      </ul>
    ),
  },
  // {
  //   title: "Certifications",
  //   id: "certifications",
  //   content: <ul className="list-disc pl-2"></ul>,
  // },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white " id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 text-white ">About Me</h2>
          <p className="text-base lg:text-lg ">
           I am Bhumika Sharma, a BCA graduate and a frontend  developer. I graduated from Maharaja Surajmal Institute wherein
         I have organized multiple events at the departmental level and I was appointed as the President of The BCA Placement Cell. 
          Moreover, I maintained a CGPA of 9.3 keeping up with the extracurricular activities. 
          </p>
          <div className="flex justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
