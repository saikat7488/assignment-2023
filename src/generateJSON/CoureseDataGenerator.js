import React from "react";
import { faker } from "@faker-js/faker";

const CoureseDataGenerator = () => {
  const jsData = [];
  const computer_science_courses = [
    "",
    "Web Development",
    "Mobile App Development",
    "Front-end Development",
    "Back-end Development",
    "Full-stack Development",
    "Game Development",
    "Cloud Application Development",
    "DevOps and Continuous Integration",
    "Database Development",
    "E-commerce Development",
    "Artificial Intelligence Development",
    "Machine Learning Development",
    "Data Science and Analytics",
    "Big Data Development",
    "Internet of Things Development",
    "Augmented Reality Development",
    "Blockchain Development",
    "Cybersecurity Development",
    "Embedded Systems Development",
    "Desktop Application Development",
    "Mobile Game Development",
    "Cross-platform Development",
    "Wearable App Development",
    "Natural Language Processing ",
    "Computer Vision Development",
    "Chatbot Development",
    "Voice Assistant Development",
    "API Development",
    "Software as a Service Development",
    "Platform as a Service Development",
    "Infrastructure as a Service",
    "Cloud Migration Services",
    "Enterprise Application Development",
    "Social Media App Development",
    "Content Management System Development",
    "Customer Relationship Management",
    "Enterprise Resource Planning",
    "Supply Chain Management Development",
    "Data Warehouse Development",
    "Geographical Information Systems",
    "Network Security Engineer",
    "Mobile Payment App Development",
    "Ethical Hacking",
    "Artificial Intelligence",
    "Data Visualization Development",
    "Scientific Computing and Simulation",
    "Financial Software Development",
    "Health Informatics Development",
    "Educational Software Development",
    "Software Architectering",
    "Artificial Intelligence Engineering",
    "Video Streaming and Content Delivery",
    "Content Recommendation Systems",
    "Digital Marketing and Advertising",
    "python Programming Language",
    "JavaScript Programming Language",
    "C/C++ Programming Language",
    "Cloud Solutions Architect",
    "Robotics",
    "SQL (Structured Query Language)",
    "Internet of Things (IoT)",
    "NoSQL Databases",
    "Agile Development",
    "Computer Network",
    "Cloud Engineering",
    "Data Structures",
    "Systems Analyst",
    "Data Visualization",
    "Software Testing",
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Object-Oriented Programming in Java",
    "Web Development Fundamentals",
    "Introduction to Python Programming",
    "Database Management Systems",
    "Operating Systems Concepts",
    "Computer Networks",
    "Software Engineering Principles",
    "Machine Learning",
    "Deep Learning",
    "Computer Graphics",
    "Human-Computer Interaction",
    "Cybersecurity Fundamentals",
    "Computer Vision",
    "Natural Language Processing",
    "Cloud Computing",
    "Big Data Analytics",
    "Software Testing and Quality Assurance",
    "Compiler Design",
    "Embedded Systems",
    "Distributed Systems",
    "Quantum Computing",
    "Data Mining",
    "Bioinformatics",
    "Computer Architecture",
    "Cryptography",
    "Parallel and Distributed Computing",
    "Information Retrieval",
    "Network Security",
    "Wireless Networks",
    "Advanced Algorithms",
    "Cloud Security",
    "Blockchain Technology",
    "Natural Language Understanding",
    "Software Design Patterns",
    "Information Theory",
    "Digital Signal Processing",
    "3D Computer Graphics",
    "Advanced Databases",
    "Computer Animation",
    "Quantum Information Science",
    "Software Project Management",
    "IoT Security",
    "Bioinformatics Algorithms",
    "High-Performance Computing",
    "Neural Networks",
    "Reinforcement Learning",
    "Speech Recognition",
    "Computational Biology",
    "Compiler Optimization",
    "Computer Vision Applications",
    "Internet Security",
    "Cloud Computing Architecture",
    "Blockchain Applications",
    "Natural Language Generation",
    "Recommender Systems",
    "Quantum Algorithms",
    "Cyber-Physical Systems",
    "Digital Forensics",
    "Cloud Native Application Development",
    "Secure Coding Practices",
    "Machine Learning Interpretability",
    "Quantum Cryptography",
    "Evolutionary Algorithms",
    "IoT Protocols",
    "Network Design and Optimization",
    "Bioinformatics Tools",
    "Real-time Operating Systems",
    "Distributed Databases",
    "Genetic Programming",
    "Natural Language Processing",
    "Cyber Threat Intelligence",
    "Game Engine Development",
    "Cloud Security Architecture",
    "Blockchain for Supply Chain Management",
    "Cognitive Computing",
    "Edge Computing",
    "Cybersecurity Incident Response",
    "Computer Vision for Robotics",
    "Quantum Machine Learning",
    "Genetic Algorithms",
    "IoT Analytics",
    "Network Simulation",
    "Computational Neuroscience",
    "IoT Device Management",
    "Cloud-Native DevOps",
    "Quantum Computing Applications",
    "Software Architecture",
    "User Experience  Design",
    "User Interface Design",
    "Human-Computer Interaction",
    "Databases",
    "Business Intelligence",
    "Enterprise Software",
    "High-Performance Computing",
    "Data Warehousing",
    "Computational Geometry",
    "Software as a Service",
    "Platform as a Service",
    "Infrastructure as a Service",
    "Natural Computing",
    "Malware Analysis",
    "Virtualization",
    "Social Network Analysis",
    "Geographical Information Systems",
    "Human-Robot Interaction",
    "Cloud-native Technologies",
    "Cloud Migration Strategies",
    "Game Design Principles",
    "DevSecOps",
    "Cloud-native Kubernetes",
    "Microservices Architecture",
    "Graph Databases",
    "Cloud-Native Application Development",
    "Chatbots and Conversational AI",
    "Computer Ethics",
    "Data Ethics",
    "Quantum Networking",
    "Computer-Assisted Education",
    "Fintech and Blockchain",
    "Serverless Computing",
  ];
  // ************************
  // Generate CourseList Data
  // ************************
  function createCourseListData() {
    return {
      id: faker.datatype.uuid(),
      certificationAvailable: true,
      enrollmentDeadline: "01-09-2023",
      description: faker.lorem.paragraph(),
      ratings: {
        rating: 5,
        raterCount: 50,
        raterList: [],
      },
      courseDuration: "6 Months",
      courseStatus: "active",
      availableSession: faker.helpers.arrayElements(["Spring", "Fall"]),
      numberOfSets: faker.helpers.arrayElement(["400", "450", "500"]),
      price: faker.helpers.arrayElement(["$75", "$100", "$125", "$150"]),
      instructor: {
        id: faker.datatype.uuid(),
      },
      lessonDetails: {
        totalLectures: 72,
        classDuration: "4 hrs",
        totalClassDuration: "288 hrs",
        lessonArray: [
          {
            academicSchedule: "Leacture-01",
            title: faker.lorem.lines({ min: 1, max: 1 }),
            topicsCovered: [
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
            ],
          },
          {
            academicSchedule: "Leacture-02",
            title: faker.lorem.lines({ min: 1, max: 1 }),
            topicsCovered: [
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
              faker.lorem.lines({ min: 1, max: 1 }),
            ],
          },
        ],
      },
      relatedCourses: [
        {
          id: faker.datatype.uuid(),
        },
        {
          id: faker.datatype.uuid(),
        },
      ],
    };
  }

  // Use CoursesList
  for (let i = 1; i <= 50; i++) {
    const data = createCourseListData();
    data.title = computer_science_courses[i];
    // Finally
    jsData.push(data);
  }

  // Convert JSON data to a string
  const jsonString = JSON.stringify(jsData, null, 2);
  const downloadJsonFile = () => {
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "course_data.json";
    a.click();
  };

  return (
    <div>
      <h2>Faker CourseList_Data_Generator </h2>
      <div>
        <h3>Generated JSON:</h3>
        <pre>{jsonString}</pre>
        <button onClick={downloadJsonFile}>Download JSON</button>
      </div>
    </div>
  );
};

export default CoureseDataGenerator;
