import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiDotnet,
  SiGooglecloud,
} from "react-icons/si";

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
      fieldValue:
        "https://www.linkedin.com/in/miguel-barreto-torres-2b6b8a1b6/",
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
  title: "Mi experiencia",
  description:
    "Fullstack developer con más de 4 años de experiencia en el desarrollo backend y frontend, especializado en la creación de aplicaciones web robustas y escalables. Apasionado por la innovación y la mejora continua.",
  items: [
    {
      company: "Kreante Tech. Solutions",
      position: "Teach Lead .NET",
      duration: "Mar. 2024 - Ene. 2025",
    },
    {
      company: "Banco de Crédito del Perú",
      position: ".NET Software Engineer",
      duration: "Mar. 2023 - Feb. 2024",
    },
    {
      company: "Indra Minsait",
      position: "Full Stack Developer Ssr.",
      duration: "Oct. 2022 - Feb. 2023",
    },
    {
      company: "BD Capital S.A.C",
      position: "Full Stack Developer Jr.",
      duration: "Sep. 2021 - Oct. 2022",
    },
    {
      company: "Resindesa S.A.C",
      position: "Full Stack Developer Jr.",
      duration: "Mar. 2021 - Ago. 2021",
    },
  ],
};

// education data
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Educación",
  description:
    "Mi educación en la Ingeniería de Software me ha brindado una base sólida en el desarrollo de soluciones empresariales. Durante mis estudios, trabajé en proyectos que reforzaron mi capacidad analítica e innovadora.",
  items: [
    {
      institution: "Univ. Privada del Norte",
      degree: "Ingeniería de Sistemas Computacionales",
      duration: "2023-2026",
    },
    {
      institution: "Cibertec",
      degree: "Profesional Técnico en Computación e Informática",
      duration: "2022",
    },
    {
      institution: "Cibertec",
      degree: "Bachiller Técnico en Computación e Informática",
      duration: "2019-2021",
    },
    {
      institution: "Universidad Continental",
      degree: "Curso Intensivo en Desarrollo de Aplicaciones",
      duration: "2020",
    },
  ],
};

// skills data
export const skills = {
  title: "Mis Habilidades",
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
