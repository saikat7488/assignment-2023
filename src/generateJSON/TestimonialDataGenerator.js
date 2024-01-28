import React from "react";
import { faker } from "@faker-js/faker";

const TestimonialDataGenerator = () => {
  const jsData = [];

  function createRandomData() {
    return {
      id: faker.datatype.uuid(),
      author: {
        id: faker.datatype.uuid(),
      },
      content: faker.lorem.paragraph(2),
    };
  }
  for (let i = 1; i <= 10; i++) {
    const data = createRandomData();
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
    a.download = "testimonial_data.json";
    a.click();
  };

  return (
    <div>
      <h2>Faker TestimonialDataGenerator </h2>
      <div>
        <h3>Generated JSON:</h3>
        <pre>{jsonString}</pre>
        <button onClick={downloadJsonFile}>Download JSON</button>
      </div>
    </div>
  );
};

export default TestimonialDataGenerator;
