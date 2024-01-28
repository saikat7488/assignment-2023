import React, { Component } from "react";
import { faker } from "@faker-js/faker";

class GenerateJSON extends Component {
  generateData = () => {
    const jsonData = [];

    // Generate 50 educator entries
    for (let educator_id = 1; educator_id <= 50; educator_id++) {
      const educator = {
        _id: faker.datatype.uuid(),
        // userName,
        image : "image_01.jpg",
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        fullName: function () {
          return this.firstName + this.lastName;
        },
        // email,
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
          "Professo",
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
        },
      };
      jsonData.push(educator);
    }

    // Convert JSON data to a string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Create a Blob object with the JSON string
    const blob = new Blob([jsonString], { type: "application/json" });

    // Create a download link for the Blob
    const url = URL.createObjectURL(blob);

    // Create an anchor element for downloading the JSON file
    const a = document.createElement("a");
    a.href = url;
    a.download = "educators.json";

    // Trigger a click event to download the JSON file
    a.click();

    // Revoke the Object URL to free up resources
    URL.revokeObjectURL(url);
  };

  render() {
    return (
      <div>
        <button onClick={this.generateData}>Generate JSON</button>
      </div>
    );
  }
}

export default GenerateJSON;
