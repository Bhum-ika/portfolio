"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <section id="experience" className="text-white pb-14">
      <h2 className="text-white text-center text-4xl font-bold mt-4 sm:mb-8 mb-5 ">
        Experience
      </h2>
      <div className="flex px-6 gap-6 flex-wrap-reverse sm:flex-nowrap">      

          <div className="flex flex-col justify-between ">
          <div className="flex py-6 justify-between sm:px-6 sm:gap-0 gap-4 ">
            <div className="flex flex-col gap-2">
              <h3 className="sm:text-2xl text-xl font-semibold">Rapidsoft Technologies</h3>
              <h3 className="sm:text-xl text-sm text-[#e173e5] leading-snug font-medium">
                Frontend Developer Intern
              </h3>
            </div>
            <div className=" flex flex-col gap-1">
              <p className="sm:text-lg text-sm">July 2024 - August 2024</p>
              <p className="text-sm text-zinc-200">On-Site</p>
            </div>
          </div>
          <div className="text-lg sm:px-6 ">
            <ul className="flex gap-3 flex-col list-disc pl-6 flex-wrap ">
              <li>
                Developed a comprehensive and centralized management system,
                named ManageSphere, designed specifically for website
                contributors ,which was built from scratch, following
                industry-standard coding norms.{" "}
              </li>
              <li>
                Successfully digitalized the workflow for DevOps managers,
                transforming traditional manual processes into an automated,
                centralized digital system. It facilitated real-time updates and
                reporting capabilities.{" "}
              </li>
              <li>
                Acquired proficiency in new cutting-edge technologies to develop
                scalable and efficient code. Applied best practices to optimize
                performance, while also focusing on delivering a user-friendly
                interface that improved the overall user experience.{" "}
              </li>
            </ul>
          </div>
      
          <div className="flex gap-2 pl-10 pt-5 flex-wrap">
<div className="border-2 px-4 py-1 rounded-full border-[#eabfee] text-sm text-zinc-200"> ReactJs</div>
<div className="border-2 px-4 py-1 rounded-full border-[#eabfee] text-sm text-zinc-200">Firebase</div>
<div className="border-2 px-4 py-1 rounded-full border-[#eabfee] text-sm text-zinc-200">Tailwind CSS</div>
<div className="border-2 px-4 py-1 rounded-full border-[#eabfee] text-sm text-zinc-200">Communication Skills</div>
<div className="border-2 px-4 py-1 rounded-full border-[#eabfee] text-sm text-zinc-200">React Query</div>
        </div>
          </div>
          <div>
          <Image src="/images/e1.jpg" width={600} height={300} alt="image" />
        </div>
        
          </div>
      
    </section>
  );
};

export default ExperienceSection;
