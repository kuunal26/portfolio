"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";

export function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "gdbiogas.com",
    description: (
      <ul className="list-disc">
        <li>
          Developed a full-stack enterprise applications using React and Nextjs.
        </li>
        <li>
          Lead the frontend development team, focusing on creating, improving,
          and fine-tuning web applications to make them fast and reliable. My
          job includes planning our technical approaches, guiding the team, and
          actively coding and reviewing code.
        </li>
      </ul>
    ),
    badge: "Software Engineer",
  },
  {
    title: "Silicon Savants",
    description: (
      <ul className="list-disc">
        <li>
          Developed and implemented high-performance, scalable applications
          using technologies like Next.js, Express.js, Flutter, and MySQL.
        </li>
        <li>
          Transitioned into a mentorship role, where I guided high school
          students in developing their soft skills and provided guidance in
          career planning and decision-making.
        </li>
        <li>Volunteered in web development team creating info website</li>
      </ul>
    ),
    badge: "Lead Developer",
  },
  {
    title: "Pivalve",
    description: (
      <ul className="list-disc">
        <li>Developed website for the Pivalve</li>
        <li>
          Supported backend development using PHP and MySQL, ensuring smooth
          data management.
        </li>
        <li>
          Provided mentorship to two IT college students, enhancing their
          practical software engineering skills.
        </li>
      </ul>
    ),
    badge: "Junior Web Engineer",
  },
  {
    title: "",
    description: <ul className="list-disc"></ul>,
    badge: "",
  },
];
