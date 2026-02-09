import type { ExperienceItem, ClientItem, CertificationItem } from "../types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 1,
    icon: "/vass-logo.webp",
    yearRange: "2023 – Present",
    location: "Remote / Madrid, Spain",
    role: "Tech Architect Lead (Adobe Experience Manager)",
    company: "VASS",
    description: "Leading the architecture and design of Adobe Experience Manager solutions from scratch, translating business and client requirements into robust technical architectures. Responsible for defining best practices, managing Adobe Cloud Services, and guiding development teams through technical decisions and code reviews. Continuously evaluating new AEM capabilities such as Edge Delivery Services to ensure modern, scalable, and future-proof solutions.",
    techStack: ["AEM", "AEM as a Cloud Service", "Adobe Cloud Services", "Edge Delivery Services", "Java", "Architecture Design"]
  },
  {
    id: 2,
    icon: "/vass-logo.webp",
    yearRange: "2021 – 2023",
    location: "Remote / Madrid, Spain",
    role: "Analyst AEM Developer",
    company: "VASS",
    description: "Worked on building and evolving modern websites using AEM as a Cloud Service. Designed and implemented backend services and middleware solutions using Spring Boot to provide data to AEM, and integrated cloud-based services hosted on Azure. Strengthened cloud-native development skills while delivering scalable and maintainable architectures.",
    techStack: ["AEM as a Cloud Service", "Java", "Spring Boot", "Azure", "REST APIs"]
  },
  {
    id: 3,
    yearRange: "2021",
    icon: "/accenture-logo.svg",
    location: "Málaga, Spain",
    role: "Business & Integration Architecture Senior Analyst – AEM",
    company: "Accenture",
    description: "Focused on high-level AEM capabilities and pre-sales activities, collaborating on project proposals and technical estimations. Took ownership of release management processes, Jira configuration, and workflow design. Worked closely with Azure platform services and ensured smooth delivery cycles through controlled releases and cross-team coordination.",
    techStack: ["AEM", "Azure", "Jira", "Release Management", "Workflow Design"]
  },
  {
    id: 4,
    icon: "/accenture-logo.svg",
    yearRange: "2019 – 2021",
    location: "Málaga, Spain",
    role: "Business & Integration Architecture Analyst – AEM",
    company: "Accenture",
    description: "Progressed into a more senior and analytical role, contributing to solution design and project definition from early stages. Became Adobe Certified Expert on AEM and started assuming leadership responsibilities, including technical decision-making, sprint planning, release preparation, and code reviews. Delivered complex AEM solutions extending Core Components and OOTB functionalities, while expanding into frontend technologies and full-stack development.",
    techStack: ["AEM", "Java", "HTL", "OSGi", "JavaScript (ES6+)", "TypeScript", "React", "Spring MVC"]
  },
  {
    id: 5,
    yearRange: "2017 – 2019",
    location: "Málaga, Spain",
    role: "AEM Developer",
    company: "Accenture",
    icon: "/accenture-logo.svg",
    description: "Started my professional career in Adobe Experience Manager, working on multiple enterprise projects using AEM 6.x. Developed custom components with Touch UI and HTL, implemented Sling Models and OSGi services, and integrated third-party systems via REST and OAuth. Participated in AEM migrations and gained a strong foundation in AEM architecture, JCR, and infrastructure concepts.",
    techStack: ["AEM", "Java", "HTL", "OSGi", "Sling Models", "JavaScript", "REST", "OAuth"]
  }
];

export const CLIENTS: ClientItem[] = [
  { id: 1, name: "Automotive", icon: "directions_car" },
  { id: 2, name: "Retail", icon: "shopping_bag" },
  { id: 3, name: "Energy", icon: "bolt" },
  { id: 4, name: "Travel", icon: "flight" },
  { id: 5, name: "Governmental", icon: "security" }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: "Adobe Certified Master",
    subtitle: "Adobe Experience Manager Sites Architect",
    issuer: "Adobe",
    date: "Apr 2025",
    expiry: "Apr 2027",
    credentialId: "5e4fc69a-2645-11f0-9883-42010a40002a"
  },
  {
    id: 2,
    title: "Adobe Certified Expert",
    subtitle: "Adobe Experience Manager",
    issuer: "Adobe",
    date: "Dec 2018",
    expiry: "Sep 2025",
    credentialId: "MZNKSE4K2BE4QFSB"
  }
];