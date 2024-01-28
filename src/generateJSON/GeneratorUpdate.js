import React from "react";
import { faker } from "@faker-js/faker";

const GeneratorUpdate = () => {
  const jsData = [];

  // **********************
  // Generate Staff data
  // **********************
  function createRandomData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email =
      firstName +
      "." +
      lastName +
      faker.number.int({ min: 234, max: 9999 }) +
      faker.helpers.arrayElement(["@gmail.com", "@yahoo.com", "@hotmail.com"]);
    const fullName = firstName + " " + lastName;
    const trimedUserName = fullName.trim() + Math.ceil(Math.random() * 99999);
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    const userName = removeSpaceUserName.toLowerCase();
    const profession = faker.helpers.arrayElement([
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
    ]);
    const education = {
      department: "Computer Science Engineering",
      institution: faker.helpers.arrayElement([
        "Massachusetts Institute of Technology (MIT), United States",
        "University of Cambridge, United Kingdom",
        "University of Oxford, United Kingdom",
        "Harvard University, United States",
        "Stanford University, United States",
        "Imperial College London, United Kingdom",
        "ETH Zurich (Swiss Federal Institute of Technology), Switzerland",
        "National University of Singapore (NUS), Singapore",
        "UCL (University College London), United Kingdo",
        "University of California, Berkeley (UCB), United States",
        "University of Chicago, United State",
        "University of Pennsylvania, United States",
        "Cornell University, United State",
        "University of Melbourne,  Australi",
        "California Institute of Technology (Caltech), United States",
        "Yale University, United State",
        "Peking University, Mainland China",
        "Princeton University, United State",
        "University of New South Wales (UNSW Sydney), Australi",
        "University of Sydney, Australia",
        "University of Toronto, Canada",
        "University of Edinburg,hUnited Kingdom",
        "Columbia University, United States",
        "Universite PSL, France",
        "Tsinghua University,Mainland China",
        "Nanyang Technological University, Singapore (NTU), Singapore",
        "University of Hong Kong (UKU), Hong Kong SAR",
        "Johns Hopkins University, United States",
        "University of Tokyo, Japan ",
        "University of California, Los Angeles (UCLA), United States",
        "McGill University, Canada ",
        "University of Manchester, United Kingdom",
        "University of Michigan-Ann Arbor, United States",
        "Australian National University , Australia",
        "University of British Columbia, Canada",
        "Ecole Polytechnique Fédérale de Lausanne (EPFL) , Switzerland",
        "Technical University of Munich, Germany",
        "Institut Polytechnique de Paris, France",
        "New York University (NYU), United States",
        "King's College London, United Kingdom",
        "Seoul National University, South Korea",
        "Monash University, Australia",
        "University of Queensland, Australia",
        "Zhejiang University, Mainland China",
        "London School of Economics and Political Science (LSE), United Kingdom",
        "Kyoto University, Japan",
        "Delft University of Technology, Netherlands",
        "Northwestern University, United States",
        "Chinese University of Hong Kong (CUHK), Hong Kong SAR",
        "Fudan University, Mainland China",
        "Shanghai Jiao Tong University, Mainland China",
        "Carnegie Mellon University, United States",
        "University of Amsterdam, Netherlands",
        "Ludwig-Maximilians-Universität München, Germany",
        "University of Bristol, United Kingdom",
        "KAIST - Korea Advanced Institute of Science & Technology,South Korea",
        "Duke University, United States",
        "University of Texas at Austin, United States",
        "Sorbonne University, France",
        "Hong Kong University of Science and Technology (HKUST), Hong Kong SAR",
        "KU Leuven, Belgium",
        "University of California, San Diego (UCSD), United States",
        "University of Washington, United States",
        "University of Illinois at Urbana-Champaign, United States",
        "Hong Kong Polytechnic University, Hong Kong SAR",
        "Universiti Malaya (UM), Malaysia",
        "University of Warwick, United Kingdom",
        "University of Auckland, New Zealand",
        "National Taiwan University (NTU), Taiwan",
        "City University of Hong Kong, Hong Kong SAR",
        "Universite Paris-Saclay, France",
        "University of Western Australia, Australia",
        "Brown University, United States",
        "KTH Royal Institute of Technology, Sweden",
        "University of Leeds, United Kingdom",
        "University of Glasgow, United Kingdom",
        "Yonsei University, South Korea",
        "Durham University, United Kingdom",
        "Korea University, South Korea",
        "Osaka University, Japan",
        "Trinity College Dublin, The University of Dublin, Ireland",
        "University of Southampton, United Kingdom",
        "Pennsylvania State University, United States",
        "University of Birmingham, United Kingdom",
        "Lund University, Sweden",
        "Universidade de São Paulo, Brazil",
        "Lomonosov Moscow State University, Russia",
        "Universität Heidelberg, Germany",
        "The University of Adelaide, Australia",
        "University of Technology Sydney, Australia",
        "Tokyo Institute of Technology, Japan",
        "University of Zurich,  Switzerland",
        "Boston University, United States",
        "Universidad Nacional Autónoma de México (UNAM),  Mexico",
        "Universidad de Buenos Aires (UBA),  Argentina",
        "University of St Andrews,  United Kingdom",
        "Georgia Institute of Technology,  United States",
        "Freie Universitaet Berlin, Germany",
        "Purdue University, United States",
        "Pohang University of Science and Technology (POSTECH), South Korea",
        "University of Nottingham, United Kingdom",
      ]),
    };
    const activities = [
      "Swimming",
      "Tennis",
      "Basketball",
      "Debate Competitions",
      "Red Cross",
      "Film Club",
      "Dance",
      "Hackathons",
      "Girl Scouts of the USA",
      "Science Honor Society",
      "English Honor Society",
      "Networking Clubs",
      "Computer Science Club",
      "Robotics Competitions",
      "Running Club",
      "Spanish Club",
      "French Club",
      "Asian Culture Club",
      "Entrepreneurship",
      "Yoga",
      "Coding/Programming",
      "Cooking Club",
      "Gardening",
      "Chess",
      "Creative Writing",
      "Photography Club",
      "Clean-up Campaigns",
      "Food Bank",
      "Animal Shelter",
      "Habitat for Humanity",
      "Science Olympiad",
      "Math Olympiad",
      "Environmental Club",
      "Robotics Club",
      "Music Club",
      "Computer Science Club",
      "Volunteer Tutoring",
      "Debate Club",
      "Math Club",
      "Art Club",
    ];

    return {
      id: faker.datatype.uuid(),
      type: "staff",
      staffId: faker.datatype.uuid(),
      join_date: `${faker.number.int({
        nim: 0,
        max: 28,
      })}-${faker.helpers.arrayElement([
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
      ])}-2023`,
      userName,
      firstName,
      lastName,
      fullName,
      email,
      age: faker.number.int({ min: 25, max: 35 }),
      gender: "Female",
      profession,
      education,
      extracurricularActivities: faker.helpers.arrayElements(activities),
      jobPosition: faker.helpers.arrayElement([
        "Instructor",
        "Lecturer",
        "Junior Lecturer",
        "Senior Lecturer",
        "Assistant Professor",
        "Associate Professor",
        "Professor",
      ]),
      bio: faker.lorem.paragraph(3),
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
      blogData: [],
    };
  }

  // **********************
  // Use Staff data
  // **********************
  for (let i = 1; i <= 50; i++) {
    const data = createRandomData();
    data.image = `image_${i}.jpg`;

    // Create Comment  ----> data.socialData.commented
    // for (let i = 1; i <= 3; i++) {
    //   const fakeComment = {
    //     id: faker.datatype.uuid(),
    //     Comment: faker.lorem.sentence(),
    //   };
    //   data.socialData.commentList.push(fakeComment);
    // }

    // Create View  ----> data.socialData.viewCounted()
    for (let i = 1; i <= 3; i++) {
      const fakeViewId = faker.datatype.uuid();
      data.blogData.push(fakeViewId);
    }

    // Finally
    jsData.push(data);
  }

  // **********************
  // Generate Student data
  // **********************
  const createStudentData = () => {
    const activities = [
      "Swimming",
      "Tennis",
      "Basketball",
      "Debate Competitions",
      "Red Cross",
      "Film Club",
      "Dance",
      "Hackathons",
      "Girl Scouts of the USA",
      "Science Honor Society",
      "English Honor Society",
      "Networking Clubs",
      "Computer Science Club",
      "Robotics Competitions",
      "Running Club",
      "Spanish Club",
      "French Club",
      "Asian Culture Club",
      "Entrepreneurship",
      "Yoga",
      "Coding/Programming",
      "Cooking Club",
      "Gardening",
      "Chess",
      "Creative Writing",
      "Photography Club",
      "Clean-up Campaigns",
      "Food Bank",
      "Animal Shelter",
      "Habitat for Humanity",
      "Science Olympiad",
      "Math Olympiad",
      "Environmental Club",
      "Robotics Club",
      "Music Club",
      "Computer Science Club",
      "Volunteer Tutoring",
      "Debate Club",
      "Math Club",
      "Art Club",
    ];
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email =
      firstName +
      "." +
      lastName +
      faker.number.int({ min: 234, max: 9999 }) +
      faker.helpers.arrayElement(["@gmail.com", "@yahoo.com", "@hotmail.com"]);
    const fullName = firstName + " " + lastName;
    const trimedUserName = fullName.trim() + Math.ceil(Math.random() * 99999);
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    const userName = removeSpaceUserName.toLowerCase();

    return {
      id: faker.datatype.uuid(),
      type: "student",
      join_date: `${faker.number.int({
        nim: 0,
        max: 28,
      })}-${faker.helpers.arrayElement([
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
      ])}-2023`,
      userName,
      firstName,
      lastName,
      fullName,
      email,
      age: faker.number.int({ min: 20, max: 25 }),
      bio: faker.lorem.paragraph(3),
      gender: "Female",
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
      studentId: faker.datatype.uuid(),
      education: {
        institution: faker.helpers.arrayElement([
          "Massachusetts Institute of Technology (MIT), United States",
          "University of Cambridge, United Kingdom",
          "University of Oxford, United Kingdom",
          "Harvard University, United States",
          "Stanford University, United States",
          "Imperial College London, United Kingdom",
          "ETH Zurich (Swiss Federal Institute of Technology), Switzerland",
          "National University of Singapore (NUS), Singapore",
          "UCL (University College London), United Kingdo",
          "University of California, Berkeley (UCB), United States",
          "University of Chicago, United State",
          "University of Pennsylvania, United States",
          "Cornell University, United State",
          "University of Melbourne,  Australi",
          "California Institute of Technology (Caltech), United States",
          "Yale University, United State",
          "Peking University, Mainland China",
          "Princeton University, United State",
          "University of New South Wales (UNSW Sydney), Australi",
          "University of Sydney, Australia",
          "University of Toronto, Canada",
          "University of Edinburg,hUnited Kingdom",
          "Columbia University, United States",
          "Universite PSL, France",
          "Tsinghua University,Mainland China",
          "Nanyang Technological University, Singapore (NTU), Singapore",
          "University of Hong Kong (UKU), Hong Kong SAR",
          "Johns Hopkins University, United States",
          "University of Tokyo, Japan ",
          "University of California, Los Angeles (UCLA), United States",
          "McGill University, Canada ",
          "University of Manchester, United Kingdom",
          "University of Michigan-Ann Arbor, United States",
          "Australian National University , Australia",
          "University of British Columbia, Canada",
          "Ecole Polytechnique Fédérale de Lausanne (EPFL) , Switzerland",
          "Technical University of Munich, Germany",
          "Institut Polytechnique de Paris, France",
          "New York University (NYU), United States",
          "King's College London, United Kingdom",
          "Seoul National University, South Korea",
          "Monash University, Australia",
          "University of Queensland, Australia",
          "Zhejiang University, Mainland China",
          "London School of Economics and Political Science (LSE), United Kingdom",
          "Kyoto University, Japan",
          "Delft University of Technology, Netherlands",
          "Northwestern University, United States",
          "Chinese University of Hong Kong (CUHK), Hong Kong SAR",
          "Fudan University, Mainland China",
          "Shanghai Jiao Tong University, Mainland China",
          "Carnegie Mellon University, United States",
          "University of Amsterdam, Netherlands",
          "Ludwig-Maximilians-Universität München, Germany",
          "University of Bristol, United Kingdom",
          "KAIST - Korea Advanced Institute of Science & Technology,South Korea",
          "Duke University, United States",
          "University of Texas at Austin, United States",
          "Sorbonne University, France",
          "Hong Kong University of Science and Technology (HKUST), Hong Kong SAR",
          "KU Leuven, Belgium",
          "University of California, San Diego (UCSD), United States",
          "University of Washington, United States",
          "University of Illinois at Urbana-Champaign, United States",
          "Hong Kong Polytechnic University, Hong Kong SAR",
          "Universiti Malaya (UM), Malaysia",
          "University of Warwick, United Kingdom",
          "University of Auckland, New Zealand",
          "National Taiwan University (NTU), Taiwan",
          "City University of Hong Kong, Hong Kong SAR",
          "Universite Paris-Saclay, France",
          "University of Western Australia, Australia",
          "Brown University, United States",
          "KTH Royal Institute of Technology, Sweden",
          "University of Leeds, United Kingdom",
          "University of Glasgow, United Kingdom",
          "Yonsei University, South Korea",
          "Durham University, United Kingdom",
          "Korea University, South Korea",
          "Osaka University, Japan",
          "Trinity College Dublin, The University of Dublin, Ireland",
          "University of Southampton, United Kingdom",
          "Pennsylvania State University, United States",
          "University of Birmingham, United Kingdom",
          "Lund University, Sweden",
          "Universidade de São Paulo, Brazil",
          "Lomonosov Moscow State University, Russia",
          "Universität Heidelberg, Germany",
          "The University of Adelaide, Australia",
          "University of Technology Sydney, Australia",
          "Tokyo Institute of Technology, Japan",
          "University of Zurich,  Switzerland",
          "Boston University, United States",
          "Universidad Nacional Autónoma de México (UNAM),  Mexico",
          "Universidad de Buenos Aires (UBA),  Argentina",
          "University of St Andrews,  United Kingdom",
          "Georgia Institute of Technology,  United States",
          "Freie Universitaet Berlin, Germany",
          "Purdue University, United States",
          "Pohang University of Science and Technology (POSTECH), South Korea",
          "University of Nottingham, United Kingdom",
        ]),
        degree: "Bachelor of Science",
        department: "Computer Science",
      },
      purchaseCourses: [],
      extracurricularActivities: faker.helpers.arrayElements(activities),
    };
  };

  // **********************
  // Use Student data
  // **********************
  for (let i = 1; i <= 50; i++) {
    const data = createStudentData();
    data.image = `image_${i + 50}.jpg`;

    // Create purchaseCourses  ----> data.socialData.viewCounted()
    for (let i = 1; i <= 3; i++) {
      const fakeViewId = faker.datatype.uuid();
      data.purchaseCourses.push(fakeViewId);
    }

    // Finally
    jsData.push(data);
  }

  // **********************
  // Generate visitor data
  // **********************
  const creatorVisitor = () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email =
      firstName +
      "." +
      lastName +
      faker.number.int({ min: 234, max: 9999 }) +
      faker.helpers.arrayElement(["@gmail.com", "@yahoo.com", "@hotmail.com"]);
    const fullName = firstName + " " + lastName;
    const trimedUserName = fullName.trim() + Math.ceil(Math.random() * 99999);
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    const userName = removeSpaceUserName.toLowerCase();

    return {
      id: faker.datatype.uuid(),
      type: "visitor",
      join_date: `${faker.number.int({
        nim: 0,
        max: 28,
      })}-${faker.helpers.arrayElement([
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
      ])}-2023`,
      userName,
      firstName,
      lastName,
      fullName,
      email,
      age: faker.number.int({ min: 12, max: 50 }),
      bio: faker.lorem.paragraph(3),
      gender: "Female",
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
  };

  // **********************
  // Use visitor data
  // **********************
  for (let i = 1; i <= 50; i++) {
    const data = creatorVisitor();
    data.image = `image_${i + 100}.jpg`;

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
      <h2>Faker JSON Generator</h2>
      <div>
        <h3>Generated JSON:</h3>
        <pre>{jsonString}</pre>
        <button onClick={downloadJsonFile}>Download JSON</button>
      </div>
    </div>
  );
};

export default GeneratorUpdate;
