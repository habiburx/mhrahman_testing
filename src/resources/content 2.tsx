import { About, Blog, Blogs, Credentials, Gallery, Home, Latest, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Md Habibur",
  lastName: "Rahman",
  name: "Md Habibur Rahman",
  role: "PhD Student | AI Security Researcher",
  avatar: "/images/avatar.jpg",
  email: "mrahm015 AT odu DOT edu", 
  address: "Norfolk, VA",
  // location: "America/New_York", // IANA time zone identifier — uncomment to show local time
  languages: [], // e.g. ["English", "Bengali"] — leave empty to hide
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Occasional updates on my research and projects.</>,
};

const social: Social = [
  // Set essential: true to show a link on the About page profile card.
  // Add new icons in src/resources/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/habiburx",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/habiburx/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/sneakyrayman/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "", // Add your Threads URL here, or leave empty to hide
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.lastName}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Researching AI security, one paper at a time</>,
  featured: {
    // Set display: true and update href to highlight a specific project on the home page
    display: false,
    title: <>Featured work</>,
    href: "/work/example-project",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} passionate about AI security and
      building tools that make the web safer.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `${person.name} — ${person.role}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "", // Replace with your own scheduling link if you want a "Book a call" button
  },
  intro: {
    display: true,
    title: "About Me",
    description: <></>,
  },
  work: {
    display: true,
    title: "Research Experience",
    experiences: [
      {
        company: "",
        timeframe: "",
        role: "Graduate Research",
        achievements: ["Detecting Fake News in English Newspapers Using Recurrent Neural Networks (RNNs)."],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "Undergraduate Research",
        achievements: ["Analysis of Encrypted Machine Learning Model Using Fully Homomorphic Encryption and CKKS scheme."],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "Research Assistant",
        achievements: ["Deep learning approach to tomato leaf disease detection using EfficientNetB3."],
        images: [],
      },
      // Add more entries by copying the block above
    ],
  },
  studies: {
    display: true,
    title: "Educational Background",
    institutions: [
      {
        name: "PhD in Computer Science — Old Dominion University, USA",
        timeframe: "In Progress",
        courses: <>Relevant Coursework: LLM Architecture &amp; Application, Research Methods.</>,
      },
      {
        name: "M.Sc. in Computer Science — Jahangirnagar University",
        timeframe: "March 2025",
        courses: <>Relevant Coursework: Digital Image Processing, Modern Cryptography, Digital Forensics, Network Security, Information Security, Software Project Management, and Quality Assurance.</>,
      },
      {
        name: "B.Sc. in Computer Science &amp; Engineering — Daffodil International University",
        timeframe: "March 2023",
        courses: <>Relevant Coursework: Big Data and IoT, Research and Innovation, Data Mining and Machine Learning, Artificial Intelligence, Database Management System, System Analysis and Design.</>,
      },
      // Add more entries by copying the block above
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Security & Privacy Research",
        description: (
          <>
            Research enthusiast in security and privacy, exploring adversarial
            robustness, model security, and trustworthy AI systems.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Machine Learning & Deep Learning",
        description: (
          <>
            Experience applying ML and DL techniques to research problems in
            security, privacy, and AI safety.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Web Development",
        description: (
          <>
            Proficient in PHP, Laravel, HTML, CSS, and JavaScript for building
            full-stack web applications.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
  services: {
    display: true,
    title: "Services",
    items: [
      { role: "Lecturer", organization: "Institute of Science & Technology" },
      { role: "Website Developer", organization: "Supabex" },
      { role: "Instructor & Content Creator", organization: "IshQool" },
      { role: "Teaching Assistant", organization: "Daffodil International University" },
      // Add more entries by copying the block above
    ],
  },
};

const blog: Blog = {
  path: "/publications",
  label: "Publications",
  title: `Publications – ${person.name}`,
  description: `Research papers, articles, and writing by ${person.name}`,
};

const blogs: Blogs = {
  path: "/blogs",
  label: "Blogs",
  title: `Blogs – ${person.name}`,
  description: `Blog posts and articles by ${person.name}`,
};

const work: Work = {
  path: "/experiences",
  label: "Experiences",
  title: `Experiences – ${person.name}`,
  description: `Research projects and experiences by ${person.name}`,
};

const latest: Latest = {
  path: "/latest",
  label: "Latest",
  title: `Latest – ${person.name}`,
  description: `Latest news and updates from ${person.name}`,
};

const credentials: Credentials = {
  path: "/credentials",
  label: "Credentials",
  title: `Credentials – ${person.name}`,
  description: `Certifications and credentials of ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Replace these with your own images in public/images/gallery/
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Campus view",
      orientation: "horizontal",
      caption: "Old Dominion University Campus",
      location: "Norfolk, Virginia, USA",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Daffodil International University",
      orientation: "vertical",
      caption: "Undergraduate Days",
      location: "Daffodil International University, Dhaka",
    },
  ],
};

export { person, social, newsletter, home, about, blog, blogs, work, latest, credentials, gallery };
