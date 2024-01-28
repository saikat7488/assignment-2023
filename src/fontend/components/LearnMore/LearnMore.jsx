import React from "react";
import learnStyle from "./learnMore.module.css";
import { useRef, useState, useEffect } from "react";
import Isotope from "isotope-layout";
import Head from '../ComponentHeading/Head';

export default function LearnMore() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("c1");
  useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      //   layoutMode : "fitRows"
      layoutMode: "masonry",
      masonry: {
        // columnWidth: 200,
        fitWidth: false,
      },
    });
    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key) => {
    setFilterKey(key);
  };

  return (
    <div className={learnStyle.customContainer}>
      <Head
        title="Coureses by Cetagory"
        textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
        textTwo="Lorem ipsum dolor sit amet consectetur."
      />
      <ul className={learnStyle.listItems}>
        <li
          className={filterKey === "c1" ? `${learnStyle.active}` : ``}
          onClick={() => handleFilterKeyChange("c1")}
        >
          Programming and Software Development
        </li>
        <li
          className={filterKey === "c2" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c2")}
        >
          Computer Systems and Architecture
        </li>
        <li
          className={filterKey === "c3" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c3")}
        >
          Data Science and Machine Learning
        </li>
        <li
          className={filterKey === "c4" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c4")}
        >
          Artificial Intelligence
        </li>
        <li
          className={filterKey === "c5" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c5")}
        >
          Cybersecurity
        </li>
        <li
          className={filterKey === "c6" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c6")}
        >
          Databases and Data Management
        </li>
        <li
          className={filterKey === "c7" ? `${learnStyle.active}` : ""}
          onClick={() => handleFilterKeyChange("c7")}
        >
          Web Development and Design
        </li>
      </ul>

      <ul className={`${learnStyle.mainItems}  filter-container`}>
        {/***************************c1*******************************/}
        <div className={`filter-item c1`}>
          <span>Introduction to Programming</span>
          <span>Software Engineering</span>
        </div>
        <div className={`filter-item c1`}>
          <span>Data Structures and Algorithms</span>
          <span>Mobile App Development</span>
        </div>
        <div className={`filter-item c1`}>
          <span>Object-Oriented Programming</span>
          <span>Web Development</span>
        </div>
        <div className={`filter-item c1`}>
          <span>Database Management Systems</span>
          <span>DevOps and Software Deployment</span>
        </div>
        <div className={`filter-item c1`}>
          <span>Data Visualization</span>
          <span>Game Development</span>
        </div>
        <div className={`filter-item c1`}>
          <span>Bioinformatics</span>
          <span>Game Development</span>
        </div>
        {/***************************c2*******************************/}
        <div className={`filter-item c2`}>
          <span>Computer Organization and Architecture</span>
          <span>Operating Systems</span>
        </div>
        <div className={`filter-item c2`}>
          <span>Computer Networks</span>
          <span>Distributed Systems</span>
        </div>
        <div className={`filter-item c2`}>
          <span>Cloud Computing</span>
          <span>Distributed Systems</span>
        </div>
        {/***************************c3*******************************/}
        <div className={`filter-item c3`}>
          <span>Data Science</span>
          <span>Machine Learning</span>
        </div>
        <div className={`filter-item c3`}>
          <span>Deep Learning</span>
          <span>Big Data Analytics</span>
        </div>
        <div className={`filter-item c3`}>
          <span>Natural Language Processing</span>
          <span>Reinforcement Learning</span>
        </div>
        <div className={`filter-item c3`}>
          <span>AI Ethics and Fairness</span>
        </div>
        {/***************************c4*******************************/}
        <div className={`filter-item c4`}>
          <span>Introduction to AI</span>
          <span>Knowledge Representation and Reasoning</span>
        </div>
        <div className={`filter-item c4`}>
          <span>Planning and Decision Making</span>
          <span>Robotics</span>
        </div>
        <div className={`filter-item c4`}>
          <span>Reinforcement Learning</span>
          <span>AI in Gaming</span>
        </div>
        {/***************************c5*******************************/}
        <div className={`filter-item c5`}>
          <span>Introduction to Cybersecurity</span>
          <span>Network Security</span>
        </div>
        <div className={`filter-item c5`}>
          <span>Cryptography</span>
          <span>Ethical Hacking and Penetration Testing</span>
        </div>
        <div className={`filter-item c5`}>
          <span>Security Policies and Risk Management</span>
          <span>Cybersecurity Compliance and Regulations</span>
        </div>
        {/***************************c6*******************************/}
        <div className={`filter-item c6`}>
          <span>Relational Databases</span>
          <span>NoSQL Databases</span>
        </div>
        <div className={`filter-item c6`}>
          <span>Database Administration</span>
          <span>Query Languages (SQL)</span>
        </div>
        <div className={`filter-item c6`}>
          <span>Security Policies and Risk Management</span>
          <span>Distributed Databases</span>
        </div>
        {/***************************c7*******************************/}
        <div className={`filter-item c7`}>
          <span>Front-End Web Development</span>
          <span>Back-End Web Development</span>
        </div>
        <div className={`filter-item c7`}>
          <span>Full-Stack Web Development</span>
          <span>Web Security</span>
        </div>
        <div className={`filter-item c7`}>
          <span>Web Accessibility</span>
          <span>Responsive Web Design</span>
        </div>
      </ul>
    </div>
  );
}
