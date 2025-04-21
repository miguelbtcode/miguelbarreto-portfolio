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
  SiMui,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiBlazor,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

import { DiMsqlServer, DiRedis } from "react-icons/di";
import { GrMysql } from "react-icons/gr";

export const about = {
  title: "Sobre Mí 🧑🏻‍💻",
  description: `
      Soy un desarrollador Full Stack .NET con amplia experiencia en la creación de aplicaciones web escalables y eficientes. Domino C#, ASP.NET, React y Next.js, enfocándome en arquitectura, rendimiento y buenas prácticas. Siempre busco innovar y mejorar en cada proyecto.
    `,
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Miguel Barreto",
    },
    {
      fieldName: "Teléfono",
      fieldValue: "(+51) 928 799 438",
    },
    {
      fieldName: "Experiencia",
      fieldValue: "4+ años",
    },
    {
      fieldName: "LinkedIn",
      fieldValue:
        "https://www.linkedin.com/in/miguel-barreto-torres-2b6b8a1b6/",
    },
    {
      fieldName: "Nacionalidad",
      fieldValue: "Peruano",
    },
    {
      fieldName: "Correo",
      fieldValue: "mabt2206@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Español, Inglés",
    },
  ],
};

// experience data
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mi Experiencia 💼",
  description:
    "Fullstack developer con más de 4 años de experiencia en el desarrollo backend y frontend, especializado en la creación de aplicaciones web robustas y escalables.",
  items: [
    {
      company: "Kreante Tech. Solutions",
      position: "Full-stack Developer Sr.",
      duration: "Mar. 2024 - Ene. 2025",
      certificate: "/path/to/certificate.jpg", // Optional
      certificateDescription: "Descripción adicional del certificado" // Optional
    },
    {
      company: "Banco de Crédito del Perú",
      position: "NET Software Engineer",
      duration: "Mar. 2023 - Feb. 2024",
      certificate: "/assets/resume/bcp-cert-experience.pdf", // Optional
      certificateDescription: "Descripción adicional del certificado" // Optional
    },
    {
      company: "Indra Minsait",
      position: "Full-stack Developer Ssr.",
      duration: "Oct. 2022 - Feb. 2023",
    },
    {
      company: "BD Capital S.A.C",
      position: "Full-stack Developer Jr.",
      duration: "Sep. 2021 - Oct. 2022",
    },
    {
      company: "Resindesa S.A.C",
      position: "Full-stack Developer Jr.",
      duration: "Mar. 2021 - Ago. 2021",
    },
  ],
};

// education data
export const education = {
  icon: "/assets/resume/cap.svg",
  title: "Mi Educación 🎓",
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
  title: "Mis Habilidades 📌",
  description:
    "Tecnologías que he utilizado en proyectos profesionales y personales a lo largo de mi experiencia.",
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
      icon: <SiBlazor />,
      name: "Blazor",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiMui />,
      name: "Material UI",
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
      name: "Amazon Web Services",
    },
    {
      icon: <VscAzure />,
      name: "Azure",
    },
    {
      icon: <GrMysql />,
      name: "MySQL",
    },
    {
      icon: <DiMsqlServer />,
      name: "SQL Server",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "PostgreSQL",
    },
    {
      icon: <DiRedis />,
      name: "Redis Caché",
    },
  ],
};
