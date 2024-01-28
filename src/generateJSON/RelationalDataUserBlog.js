import React from "react";
import { faker } from "@faker-js/faker";

const RelationalDataUserBlog = () => {
  const userData = [];
  const postData = [];

  const createUser = () => {

    return {
      id: faker.datatype.uuid(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      blogs : [],
    };
  };

  const createBlog = () => {
    return {
      id: faker.datatype.uuid(),
      title: faker.lorem.lines(),
      description: faker.lorem.paragraph(3),
    };
  };

  for (let i = 1; i <= 5; i++) {
    const createUserData = createUser();
    createUserData.image = `image_${i}.jpg`;
    // createUserData.blogs = [];

    for (let j = 1; j <= 5; j++) {
      const createBlogData = createBlog();
      createBlogData.author = createUserData.id;
      postData.push(createBlogData);
      createUserData.blogs.push(createBlogData.id);
    }

    userData.push(createUserData);
  }

  // Convert JSON data to a string
  const jsonString1 = JSON.stringify(userData, null, 2);
  const downloadJsonFile1 = () => {
    const blob = new Blob([jsonString1], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "user_data.json";
    a.click();
  };

  const jsonString2 = JSON.stringify(postData, null, 2);
  const downloadJsonFile2 = () => {
    const blob = new Blob([jsonString1], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blog_data.json";
    a.click();
  };

  return (
    <div>
      <h2>Faker User_Data_Generator</h2>
      <div>
        <h3>user_data.json</h3>
        <pre>{jsonString1}</pre>
        <button onClick={downloadJsonFile1}>Download JSON</button>
      </div>

      <div>
        <h3>blog_data.json</h3>
        <pre>{jsonString2}</pre>
        <button onClick={downloadJsonFile2}>Download JSON</button>
      </div>
    </div>
  );
};

export default RelationalDataUserBlog;
