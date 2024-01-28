import React from "react";
import { faker } from "@faker-js/faker";

const BlogDataGenerator = () => {
  const jsData = [];

  function createRandomData() {
    // *******************
    // CreateBlogsDetails
    // *******************

    const viewCount = faker.number.int({ min: 450, max: 15000 });
    const readCount = faker.number.int({
      min: 1,
      max: Math.ceil(viewCount / 2),
    });
    const commentCount = faker.number.int({
      min: 1,
      max: Math.ceil(readCount / 6),
    });

    return {
      id: faker.datatype.uuid(),
      created_date: `${faker.number.int({
        nim: 0,
        max: 28,
      })}-${faker.helpers.arrayElement([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ])}-2023`,
      title: faker.lorem.lines(1),
      category: faker.helpers.arrayElement([
        "IT",
        "Technology",
        "E-commerce",
        "Career in Tech",
        "Tech News and Events",
        "Programming Languages",
        "Computer Science History",
        "Cryptography",
        "Science",
        "AR/VR",
        "Data Privacy",
        "Computer Graphics",
        "Artificial Intelligence",
        "Virtualization",
        "Cybersecurity",
        "Operating Systems",
        "Bioinformatics",
        "Data Structures",
        "Mobile Game",
        "Software Testing",
        "Ethical Hacking",
        "Cloud Security",
        "Bioinformatics Engineering",
        "Business Intelligence (BI)",
        "Network Security Engineer",
        "Full-stack Development",
        "Cloud Solutions Architect",
        "Software Architectering",
        "Data Analysist",
        "Robotics",
        "Artificial Intelligence Engineering",
        "Blockchain Technology",
        "Mobile App",
        "Systems Analyst",
        "Machine Learning",
        "Software Engineering",
        "Web Development",
        "Computer Network",
        "Graphic Degin",
        "Database",
        "Network",
        "Cloud Engineering",
      ]),
      description: faker.lorem.paragraph(50),
      socialData: {
        viewCounted: function () {
          return viewCount;
        },
        readCounted: function () {
          return readCount;
        },
        commentCounted : function (){
          return commentCount;
        },

        viewed: viewCount,
        readed: readCount,
        commented: commentCount,

        readList: [],
        viewList: [],
        commentList: [],
      },
      authorDetails: {
        id: faker.datatype.uuid(),
      },
    };
  }

  // create Data
  for (let i = 1; i <= 50; i++) {
    const data = createRandomData();
    data.image = `image_${i}.jpg`;

    // Create Comment  ----> data.socialData.commented
    for (let i = 1; i <= 3; i++) {
      const fakeComment = {
        id: faker.datatype.uuid(),
        Comment: faker.lorem.sentence(),
      };
      data.socialData.commentList.push(fakeComment);
    }

    // Create View  ----> data.socialData.viewCounted()
    for (let i = 1; i <= 3; i++) {
      const fakeViewId = faker.datatype.uuid();
      data.socialData.viewList.push(fakeViewId);
    }

    // Create Read  ----> data.socialData.readCounted()
    for (let i = 1; i <= 3; i++) {
      const fakeReadId = faker.datatype.uuid();
      data.socialData.readList.push(fakeReadId);
    }

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
    a.download = "blog_data.json";
    a.click();
  };

  return (
    <div>
      <h2>Faker Blog_Data_Generator </h2>
      <div>
        <h3>Generated JSON:</h3>
        <pre>{jsonString}</pre>
        <button onClick={downloadJsonFile}>Download JSON</button>
      </div>
    </div>
  );
};

export default BlogDataGenerator;
