import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaCsharp,
    FaAws,
    FaGoogle,
  } from "react-icons/fa";

import { SiDotnet, SiGooglecloud, SiReact, SiAmazonwebservices } from "react-icons/si";

export const about = {
    title: "About me",
    description: `
      I am a software developer with a passion for creating user-friendly
      and efficient web applications. I have a strong foundation in HTML,
      CSS, and JavaScript, and I am proficient in React, Next.js, and Tailwind CSS.
      I am a quick learner and I am always looking for new challenges to tackle.
    `,
    info: [
      {
        fieldName: "Name",
        fieldValue: "Miguel Barreto",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+51) 928 799 438",
      },
      {
        fieldName: "Experience",
        fieldValue: "4+ years",
      },
      {
        fieldName: "LinkedIn",
        fieldValue: "https://www.linkedin.com/in/miguel-barreto-torres-2b6b8a1b6/",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Peruvian",
      },
      {
        fieldName: "Email",
        fieldValue: "mabt2206@gmail.com",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "Spanish, English",
      },
    ],
  };
  
  // experience data
  export const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    items: [
      {
        company: "Kreante Technological Solutions",
        position: "Teach Lead .NET",
        duration: "2024-present",
      },
      {
        company: "Banco de Crédito del Perú",
        position: ".NET Senior Software Engineer",
        duration: "2023-2024",
      },
      {
        company: "Indra Minsait",
        position: "Full Stack Developer Ssr.",
        duration: "2022-2023",
      },
      {
        company: "BD Capital SAC",
        position: "Full Stack Developer Jr.",
        duration: "2021-2022",
      },
    ],
  };
  
  // education data
  export const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    items: [
      {
        institution: "Private University of the North",
        degree: "Computer Systems Engineering",
        duration: "2023-2026",
      },
      {
        institution: "Cibertec Higher Institute of Technology",
        degree: "Professional in Informatics and Computer Science",
        duration: "2022",
      },
      {
        institution: "Cibertec Higher Institute of Technology",
        degree: "Bachelor of Computer Science and Informatics",
        duration: "2019-2021",
      },
      {
        institution: "Continental University",
        degree: "Intensive programming and application development course",
        duration: "2020",
      },
    ],
  };
  
  // skills data
  export const skills = {
    title: "My skills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "Html 5",
      },
      {
        icon: <FaCss3 />,
        name: "Css 3",
      },
      {
        icon: <FaJs />,
        name: "Javascript",
      },
      {
        icon: <SiDotnet />,
        name: ".NET Core & .NET 6,7,8+",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <FaNodeJs />,
        name: "NodeJs",
      },
      {
        icon: <SiGooglecloud />,
        name: "Google Cloud",
      },
      {
        icon: <FaAws />,
        name: "AWS",
      },
    ],
  };