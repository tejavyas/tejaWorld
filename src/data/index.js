import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Software Development Engineer",
    company_name: "Amazon",
    date: "2025",
    details: [
      "Building scalable, high-performance backend systems that power <span style='color: white;'>critical Amazon services.</span>",
      "I design, develop, and optimize distributed systems, <span style='color: white;'>leveraging cloud infrastructure, microservices, and event-driven architectures.</span>",
      "my primary focus is backend engineering—working with<span style='color: white;'> Java, Spring Boot, and AWS</span>.",
    ],
  },
  {
    title: "Deep Learning Engineer Intern",
    company_name: "Deloitte",
    date: "2024",
    details: [
      "Built ETL Pipeline (S3, Sagemaker) for <span style='color: white;'>125 GB of Lung CT Scan Data.</span>.",
      "<span style='color: white;'>Trained Tensorflow Object-Segmentation Model </span>for Lung Anomalies.",
      "Implemented histogram equalization, masking layers, and other image processing to <span style='color: white;'>raise accuracy rate to 88%</span>",
    ],
  },
  {
    title: "Data Engineer Intern",
    company_name: "PricewaterhouseCoopers LLC.",
    date: "2023",
    details: [
      "Implemented ML classification techniques on Amazon.com Inc. Inventory Data,",
      "enhancing financial data classification and product for improved risk assessment and regulatory compliance,",
      "<span style='color: white;'>facilitating Amazon.com Inc. ‘s expansion into the South African Marketplace.</span>"
    ],
  },
  {
    title: "Backend Engineer",
    company_name: "TutorTies",
    date: "2022",
    details: [
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Mathematics and Computer Science",
    company_name: "B.A. UC Berkeley",
    date: "M.S. GeorgiaTech",
    details: [
      "Machine Learning<span style='color: white;'> High Performance Computing </span> Distributed Computing",
      "Bayesian Statistics<span style='color: white;'> Compilers </span> and Software Development",
      "Java<span style='color: white;'> Python</span> C++ <span style='color: white;'>C</span> PostgreSQL <span style='color: white;'> CUDA & OpenMP</span>",
    ],
  },
];

const portfolio = [
  {
    name: "Parallelism and Theoretical Foundations",
    description:
      "Full Parallelizations of otherwise sequential algorithms to bring computational limits into compute bound ranges, impemented in CUDA and OpenMP",
    image: oscs,
  },
  {
    name: "Developer Experience",
    description:
      "Experience working on enterprise level Java Systems, IAC automations, and server side optimizations",
    image: algorithms,
  },
  {
    name: "Just for Fun",
    description:
      "little things like coding fully functional games, voxel engines, threeJS renderings in my free time",
    image: devnotes,
  },
];

export { experiences, portfolio };

