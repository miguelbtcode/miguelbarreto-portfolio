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
      company: "LILAB",
      position: "Full-stack Developer",
      duration: "Feb 2025 - May 2025",
      certificate: "/assets/resume/lilab-cert-experience.pdf",
      description:
        "Desarrollo de soluciones fullstack para el cliente Progreso (Chile), aplicando arquitecturas modernas y metodologías ágiles.",
      achievements: [
        "Desarrollo en curso de aplicaciones web de alta disponibilidad",
        "Implementación de prácticas DevOps y automatización de procesos",
      ],
      technologies: [
        "NET Core",
        "React",
        "AWS",
        "DevOps",
        "MongoDB",
        "Microservices",
      ],
      color: "#7988cf",
    },
    {
      company: "Kreante Tech. Solutions",
      position: "Full-stack Developer Sr.",
      duration: "Mar 2024 - Ene 2025",
      certificate: "/assets/resume/kreante-cert-experience.pdf",
      description:
        "Optimización de arquitectura backend para Laive S.A.C, mejorando rendimiento y escalabilidad mientras se reducían costos de infraestructura.",
      achievements: [
        "Reducción del 30% en tiempos de respuesta mediante optimización de arquitectura",
        "Implementación de soluciones con .NET y Vue.js reduciendo costos de infraestructura en 15%",
        "Diseño de estrategias CI/CD reduciendo tiempos de entrega en 40%",
      ],
      technologies: [
        "NET Core",
        "Vue.js",
        "Google Cloud",
        "CI/CD",
        "SQL Server",
        "Cloud Functions",
      ],
      color: "#014be0",
    },
    {
      company: "Banco de Crédito del Perú",
      position: "NET Software Engineer",
      duration: "Mar 2023 - Mar 2024",
      certificate: "/assets/resume/bcp-cert-experience.pdf",
      description:
        "Modernización de aplicaciones SWIFT y sistemas de estados de cuenta bancarios, con migración a arquitecturas Cloud y optimización de procesos ETL.",
      achievements: [
        "Implementación de microservicio GPI en OCP con .NET, reduciendo tiempos de procesamiento en 35%",
        "Liderazgo en la migración del sistema EECC a .NET y Cloud, reduciendo costos de mantenimiento en 40%",
      ],
      technologies: [
        "NET Core",
        "Angular",
        "SQL Server",
        "Python",
        "Azure",
        "Microservices",
        "OCP",
        "ETL",
      ],
      color: "#e08040",
    },
    {
      company: "Indra Minsait",
      position: "Full-stack Developer Ssr.",
      duration: "Oct 2022 - Feb 2023",
      certificate: "/assets/resume/indra-cert-experience.pdf",
      description:
        "Desarrollo y optimización de sistemas de gestión de pólizas para Mapfre Seguros y Reaseguros, con foco en rendimiento y escalabilidad.",
      achievements: [
        "Reducción de tiempo de procesamiento en AfilCobro en 35% mediante mejoras en base de datos",
        "Disminución de incidencias en TronWeb en 30% tras refactorización de módulos clave",
      ],
      technologies: [
        "NET",
        "Angular",
        "SQL Server",
        "Oracle PL/SQL",
        "Swagger",
        "REST APIs",
      ],
      color: "#456069",
    },
    {
      company: "BDCapital",
      position: "Technology Intern",
      duration: "Sep 2021 - Oct 2022",
      certificate: "/assets/resume/bdcapital-cert-experience.pdf",
      description:
        "Implementación de mejoras en sistemas SOTI y SIF para optimizar la gestión de operaciones financieras.",
      achievements: [
        "Optimización de rendimiento en SOTI y SIF, reduciendo tiempos de carga en 30%",
        "Reducción de incidencias en 25% con nuevas funcionalidades en Blazor y .NET",
      ],
      technologies: [
        "NET",
        "React",
        "SQL Server",
        "Blazor",
        "Financial Systems",
      ],
      color: "#7a96b0",
    },
    {
      company: "Resindesa S.A.C",
      position: "Full-stack Developer",
      duration: "Nov 2020 - Feb 2021",
      certificate: "/assets/resume/resindesa-cert-experience.pdf",
      description:
        "Desarrollo de sitios web personalizados para sectores de construcción y publicidad, con optimización de generación de reportes.",
      achievements: [
        "Reducción de tiempos de generación de reportes en JasperReports en un 25%",
        "Desarrollo de soluciones web a medida para clientes de sectores exigentes",
      ],
      technologies: [
        "NET",
        "React JS",
        "JasperReports",
        "SQL",
        "Web Development",
      ],
      color: "yellow",
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

// recommendations data
export const recommendations = {
  icon: "/assets/resume/star.svg",
  title: "Recomendaciones 🌟",
  description:
    "Lo que dicen mis colegas, supervisores y clientes sobre mi trabajo y desempeño profesional.",
  items: [
    {
      id: 1,
      name: "Carlos Mendoza",
      position: "Fullstack Developer",
      company: "LILAB",
      image: "/assets/recommendations/carlos-mendoza.jpeg",
      text: "Migue es un gran trabajador, con iniciativa y buenas ideas para el desarrollo. Tiene amplio conocimiento en muchos aspectos de arquitectura de software y sobre todo responsable y motivado a hacer las cosas y aprender. Con 2 proyectos en los que pude participar con él, doy fe de sus aptitudes y compromiso con el team.",
      linkedin: "https://www.linkedin.com/in/carlos-rafael-mendoza/",
      date: "Enero 2025",
      rating: 5,
      skills: ["Backend Development", "Architecture", "Problem Solving"],
    },
    {
      id: 2,
      name: "Angel Vega",
      position: "Backend Developer",
      company: "Kreante Technological Solutions",
      image: "/assets/recommendations/angel-vega.jpeg",
      text: "Miguel es un desarrollador de software competente y colaborador. Durante su tiempo en nuestro equipo, demostró habilidades sólidas en el desarrollo de software y una buena capacidad para resolver problemas. Su dedicación y profesionalismo son notables. Lo recomiendo para proyectos de desarrollo de software donde se valore la colaboración y la resolución de problemas.",
      linkedin: "https://www.linkedin.com/in/angel-vega-s/",
      date: "Diciembre 2024",
      rating: 5,
      skills: ["Microservices", ".NET Core", "Mentoring"],
    },
  ],
};
