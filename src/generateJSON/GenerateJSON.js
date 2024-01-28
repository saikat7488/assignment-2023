// src/JsonGenerator.js
import React, { useState } from "react";
import { faker } from "@faker-js/faker";

const JsonGenerator = () => {
  const [jsonData, setJsonData] = useState(null);

  const generateData = () => {
    const fakeData = {
      _id: faker.datatype.uuid(),
      // userName,
      image : "image_01.jpg",
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      fullName : faker.person.fullName(),
      email : faker.internet.email(),
      sex: faker.person.sexType(),
      birthday: faker.date.birthdate(),
      age: faker.number.int({ min: 25, max: 35 }),
      gender: "Female",
      profession: faker.helpers.arrayElement([
        "IT Project Manager",
        "E-commerce Developer",
        "AR/VR Developer",
        "Computer Graphics Programmer",
        "Mobile Game Developer",
        "Cloud Security Engineer",
        "Bioinformatics Engineer",
        "Network Security Engineer",
        "IT Consultant",
        "Full-stack Developer",
        "Cloud Solutions Architect",
        "Software Architect",
        "Big Data Engineer",
        "Robotics Engineer",
        "Artificial Intelligence Engineer",
        "Blockchain Developer",
        "Mobile App Developer",
        "Systems Analyst",
        "Machine Learning Engineer",
        "Software Engineer",
        "Web Developer",
        "Data Analysist",
        "Computer Network Engineer",
        "Graphic Deginer",
        "Database Administrato",
        "Network Administrator",
        "Cloud Engineer",
      ]),
      jobPosition: faker.helpers.arrayElement([
        "Instructor",
        "Lecturer",
        "Junior Lecturer",
        "Senior Lecturer",
        "Assistant Professor",
        "Associate Professor",
        "Professor",
      ]),
      about: faker.lorem.paragraph(3),
      socialLinks: {
        facebook: "https://www.facebook.com/",
        linkedin: "https://bd.linkedin.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        dribbble: "https://dribbble.com/",
        instagram: "https://www.instagram.com/",
      },
      address: {
        street: faker.location.street(),
        state: faker.location.state(),
        city: faker.location.city(),
        country: faker.location.country(),
        countryCode: faker.location.countryCode(),
        zipcode: faker.location.zipCode(),
        geo: {
          latitude: faker.location.latitude(),
          longitude: faker.location.longitude(),
        },
      }
    };
    setJsonData(JSON.stringify(fakeData, null, 2));
  };

  const downloadJsonFile = () => {
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fakeData.json";
    a.click();
  };

  return (
    <div>
      <h2>Faker JSON Generator</h2>
      <button onClick={generateData}>Generate Data</button>
      {jsonData && (
        <div>
          <h3>Generated JSON:</h3>
          <pre>{jsonData}</pre>
          <button onClick={downloadJsonFile}>Download JSON</button>
        </div>
      )}
    </div>
  );
};

export default JsonGenerator;
