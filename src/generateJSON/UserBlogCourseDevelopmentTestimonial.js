import React from "react";
import { faker } from "@faker-js/faker";
import universityList from "./dataSave/universityList";
import emailType from "./dataSave/emailType";
import activitiesList from "./dataSave//activitiesList";
import staffJobPositionList from "./dataSave/staffJobPositionList";
import expertiseCourseList from "./dataSave/expertiseCourseList";
import blogCategoryList from "./dataSave/blogCategoryList";
import courseList from "./dataSave/courseList";
import developmentList from "./dataSave/developmentList";
import studentJobPosition from "./dataSave/studentJobPosition";

const UserBlogCourseDevelopmentTestimonial = () => {
  // SaveData
  const userData = [];
  const blogData = []; //blogDataUpdated
  const courseData = [];
  const developmentData = [];
  const testimonialData = [];
  const transactionData = [];

  // **********************************
  // GenerateUserData()  -----> Staff
  //************************************

  // -----------------------------> Teacher <------------------------------
  const GenerateUserData = () => {
    // firstName
    const firstName = faker.person.firstName();
    // lastName
    const lastName = faker.person.lastName();
    //fullName
    const fullName = `${firstName} ${lastName}`;
    // Supported
    const emailAddress = `${firstName}.${lastName}${faker.number.int({
      min: 234,
      max: 9999,
    })}@${faker.helpers.arrayElement(emailType)}`;
    // email
    const email = emailAddress.toLowerCase();
    // Supported
    const trimedUserName = `${fullName.trim()}${Math.ceil(
      Math.random() * 99999
    )}`;
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    // UserName
    const userName = removeSpaceUserName.toLowerCase();
    // Education
    const education = {
      department: "Computer Science Engineering",
      institution: faker.helpers.arrayElement(universityList),
    };
    // ExtracurricularActivities
    const extracurricularActivities =
      faker.helpers.arrayElements(activitiesList);
    // staffJobPosition
    const localJobPosition = faker.helpers.arrayElement(staffJobPositionList);
    // Age
    const age = faker.number.int({ min: 25, max: 35 });
    // Gender
    const gender = "Female";
    // Company
    const company = faker.company.name();
    // Bio
    const bio = faker.lorem.paragraph(3);
    // JoinDate
    const joinDate = `${faker.number.int({
      nim: 0,
      max: 28,
    })}-${faker.number.int({ nim: 0, max: 8 })}-2023`;
    // socialLinks
    const socialLinks = {
      facebook: "https://www.facebook.com/",
      linkedin: "https://bd.linkedin.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      dribbble: "https://dribbble.com/",
      instagram: "https://www.instagram.com/",
    };
    const address = {
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
    };
    return {
      id: faker.datatype.uuid(),
      dbType: "user_data",
      role: "teacher",
      localJobPosition,
      joinDate,
      userName,
      firstName,
      lastName,
      fullName,
      email,
      password: "123456",
      age,
      gender,
      bio,
      company,
      socialLinks,
      address,
      education,
      extracurricularActivities,
      blogs: [],
      courseTaken: [],
      developmentSkills: [],
      testimonitalData: [],
    };
  };

  // -----------------------------> Student <----------------------------
  const GenerateUserStudentData = () => {
    // firstName
    const firstName = faker.person.firstName();
    // lastName
    const lastName = faker.person.lastName();
    //fullName
    const fullName = `${firstName} ${lastName}`;
    // Supported
    const emailAddress = `${firstName}.${lastName}${faker.number.int({
      min: 234,
      max: 9999,
    })}@${faker.helpers.arrayElement(emailType)}`;
    // email
    const email = emailAddress.toLowerCase();
    // Supported
    const trimedUserName = `${fullName.trim()}${Math.ceil(
      Math.random() * 99999
    )}`;
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    // UserName
    const userName = removeSpaceUserName.toLowerCase();
    // Education
    const education = {
      department: "Computer Science Engineering",
      institution: faker.helpers.arrayElement(universityList),
    };
    // ExtracurricularActivities
    const extracurricularActivities =
      faker.helpers.arrayElements(activitiesList);
    // staffJobPosition

    // Age
    const age = faker.number.int({ min: 18, max: 24 });
    // Gender
    const gender = "Female";
    // Company
    const company = faker.company.name();
    // Bio
    const bio = faker.lorem.paragraph(3);
    // JoinDate
    const joinDate = `${faker.number.int({
      nim: 0,
      max: 28,
    })}-${faker.number.int({ nim: 0, max: 8 })}-2023`;
    // socialLinks
    const socialLinks = {
      facebook: "https://www.facebook.com/",
      linkedin: "https://bd.linkedin.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      dribbble: "https://dribbble.com/",
      instagram: "https://www.instagram.com/",
    };
    const address = {
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
    };
    return {
      dbType: "user_data",
      role: "student",
      joinDate,
      userName,
      firstName,
      lastName,
      fullName,
      globalJobPosition: faker.helpers.arrayElement(studentJobPosition),
      email,
      password: "123456",
      age,
      gender,
      bio,
      company,
      socialLinks,
      address,
      education,
      extracurricularActivities,
      testimonitalData: [],
      coursesPurchased: [],
    };
  };

  // -----------------------------> Client <----------------------------
  const GenerateClientUserData = () => {
    // firstName
    const firstName = faker.person.firstName();
    // lastName
    const lastName = faker.person.lastName();
    //fullName
    const fullName = `${firstName} ${lastName}`;
    // Supported
    const emailAddress = `${firstName}.${lastName}${faker.number.int({
      min: 234,
      max: 9999,
    })}@${faker.helpers.arrayElement(emailType)}`;
    // email
    const email = emailAddress.toLowerCase();
    // Supported
    const trimedUserName = `${fullName.trim()}${Math.ceil(
      Math.random() * 99999
    )}`;
    const removeSpaceUserName = trimedUserName.split(" ").join("");
    // UserName
    const userName = removeSpaceUserName.toLowerCase();
    // Education
    const education = {
      department: "Computer Science Engineering",
      institution: faker.helpers.arrayElement(universityList),
    };
    // ExtracurricularActivities
    const extracurricularActivities =
      faker.helpers.arrayElements(activitiesList);
    // staffJobPosition

    // Age
    const age = faker.number.int({ min: 18, max: 24 });
    // Gender
    const gender = "Female";
    // Company
    const company = faker.company.name();
    // Bio
    const bio = faker.lorem.paragraph(3);
    // JoinDate
    const joinDate = `${faker.number.int({
      nim: 0,
      max: 28,
    })}-${faker.number.int({ nim: 0, max: 8 })}-2023`;
    // socialLinks
    const socialLinks = {
      facebook: "https://www.facebook.com/",
      linkedin: "https://bd.linkedin.com/",
      twitter: "https://twitter.com/",
      github: "https://github.com/",
      dribbble: "https://dribbble.com/",
      instagram: "https://www.instagram.com/",
    };
    const address = {
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
    };
    return {
      dbType: "user_data",
      role: "student",
      joinDate,
      userName,
      firstName,
      lastName,
      fullName,
      globalJobPosition: faker.helpers.arrayElement(studentJobPosition),
      email,
      password: "123456",
      age,
      gender,
      bio,
      company,
      socialLinks,
      address,
      education,
      extracurricularActivities,
      testimonitalData: [],
    };
  };

  // **********************************
  // GenerateBlogData()
  //************************************
  const GenerateBlogData = () => {
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
      dbType: "blog_data",
      createdDate: `${faker.number.int({
        nim: 1,
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
      category: faker.helpers.arrayElement(blogCategoryList),
      description: faker.lorem.paragraph(50),
      socialData: {
        viewCounted: function () {
          return viewCount;
        },
        readCounted: function () {
          return readCount;
        },
        commentCounted: function () {
          return commentCount;
        },

        viewed: viewCount,
        readed: readCount,
        commented: commentCount,

        readList: [],
        viewList: [],
        commentList: [],
      },
    };
  };

  // **********************************
  // GenerateCourseData()
  //************************************

  const GenerateCourseData = () => {
    return {
      dbType: "course_data",
      certificationAvailable: true,
      enrollmentDeadline: "01-09-2023",
      description: faker.lorem.paragraph(),
      disCount: "$0",
      ratings: {
        rating: 5,
        raterCount: 50,
        raterList: [
          faker.datatype.uuid(),
          faker.datatype.uuid(),
          faker.datatype.uuid(),
        ],
      },
      courseDuration: "6 Months",
      courseStatus: "active",
      availableSession: faker.helpers.arrayElements(["Spring", "Fall"]),
      numberOfSets: faker.helpers.arrayElement(["400", "450", "500"]),
      price: faker.helpers.arrayElement(["$75", "$100", "$125", "$150"]),
      requirement: {},
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
    };
  };

  // **********************************
  // GenerateDevelopmentData()
  //************************************
  const GenerateDevelopmentData = () => {
    return {
      dbType: "development_data",
      description: faker.lorem.paragraph(),
      technologies: [
        "Technology-1",
        "Technology-2",
        "Technology-3",
        "Technology-4",
        "Technology-5",
      ],
      keywords: [
        "keyword-1",
        "keyword-2",
        "keyword-2",
        "keyword-3",
        "keyword-4",
        "keyword-5",
      ],
      tools: ["Tools-1", "Tools-2", "Tools-3", "Tools-4", "Tools-5"],
    };
  };

  // **********************************
  // GenerateUserDataLoop()
  // ************************************

  for (let i = 1; i <= 50; i++) {
    const userDataFromFunction = GenerateUserData();
    // expertise
    userDataFromFunction.expertise = expertiseCourseList[i];
    userDataFromFunction.image = `image_${i}`;
    // ******************************************************** //

    // **********************************
    // GenerateBlogDataLoop()
    // ************************************
    for (let j = 1; j <= Math.floor(Math.random() * 6 + 1); j++) {
      const blogDataFromFunction = GenerateBlogData();
      blogDataFromFunction.author = userDataFromFunction.id;
      blogData.push(blogDataFromFunction);
      userDataFromFunction.blogs.push(blogDataFromFunction.id);
    }

    // ************************************
    // BlogImageGenerator
    // ************************************
    // const totalBlog = blogData.length - 1;
    // for (let x = 0; x <= totalBlog; x++) {
    //   blogData[x].image = `image_${x + 1}`;
    // }

    // **********************************
    // GenerateCourseDataLoop()
    // ************************************
    for (let j = 1; j <= 1; j++) {
      const courseDataFromFunction = GenerateCourseData();
      courseDataFromFunction.id = faker.datatype.uuid();
      courseDataFromFunction.courseInstructor = userDataFromFunction.id;
      courseDataFromFunction.title = courseList[i];

      // Data Load
      courseData.push(courseDataFromFunction);
      userDataFromFunction.courseTaken.push(courseDataFromFunction.id);
    }

    userData.push(userDataFromFunction);
  }

  // **********************************
  // GenerateDevelopmentDataLoop()
  // ************************************

  for (let i = 1; i <= 50; i++) {
    const developmentDataFromFunction = GenerateDevelopmentData();
    developmentDataFromFunction.id = faker.datatype.uuid();
    developmentDataFromFunction.image = `image_${i}`;
    developmentDataFromFunction.title = developmentList[i];
    developmentDataFromFunction.developer = userData[i - 1].id;
    userData[i - 1].specializedWithDevelopment = developmentDataFromFunction.id;
    const staffUserArray = userData.filter((user) => {
      return user.role === "teacher";
    });

    const developers = [
      userData[i - 1].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
      userData[Math.floor(Math.random() * (staffUserArray.length - 1))].id,
    ];
    const findUniqueIdArray = [...new Set(developers)];
    developmentDataFromFunction.developersId = findUniqueIdArray;

    developmentData.push(developmentDataFromFunction);
  }

  // ******************************************
  // Add Related CourseData id in CourseData
  const generateRelatedCourse = () => {
    const relatedCorseId = [
      courseData[Math.floor(Math.random() * (courseData.length - 1))].id,
      courseData[Math.floor(Math.random() * (courseData.length - 1))].id,
      courseData[Math.floor(Math.random() * (courseData.length - 1))].id,
      courseData[Math.floor(Math.random() * (courseData.length - 1))].id,
    ];
    const uniqueRealatedCourseId = [...new Set(relatedCorseId)];
    return uniqueRealatedCourseId;
  };

  for (let i = 1; i <= courseData.length; i++) {
    const generateRelatedCourseUpdate = generateRelatedCourse();
    courseData[i - 1].serial = i;
    courseData[i - 1].image = `image_${i}`;
    courseData[i - 1].relatedCourses = generateRelatedCourseUpdate;
  }

  // ************************************************************
  // in StudentDatabase ----> course purchase data Management
  // ************************************************************
  const GenerateStuenetCoursePurchasedData = (id) => {
    // findTheStudentArray
    const student_data_table = userData.filter(
      (user) => user.role === "student" && user.id === id
    );

    // Other
    const transactionId = faker.datatype.uuid();
    const studentId = id;

    const selectedCourseIds = new Set();
    let courseId;

    do {
      // Generate a random course ID
      const randomCourseIndex = Math.floor(Math.random() * courseData.length);
      courseId = courseData[randomCourseIndex].id;
    } while (selectedCourseIds.has(courseId)); // Check for duplicates

    selectedCourseIds.add(courseId); // Add the selected course ID to the set

    const selectedCourseArray = courseData.filter(
      (singleCourse) => singleCourse.id === courseId
    );
    const selectedCourseObj = selectedCourseArray[0];

    const ammountPaid = selectedCourseObj.price;
    const paymentConfirmation = true;
    const year = faker.helpers.arrayElement(["2023", "2024"]);
    const session =
      selectedCourseObj.availableSession[
        Math.floor(Math.random() * selectedCourseObj.availableSession.length)
      ];

    // Find The purchase Data
    let purchase_date;
    if (session === "Spring") {
      purchase_date = `04-04-2023`;
    } else {
      purchase_date = `04-10-2023`;
    }

    const semester = `${session}-${year}`;
    let status;

    if (session === "Spring" && year === "2023") {
      status = "completed";
    } else if (session === "Fall" && year === "2023") {
      status = "active";
    } else {
      status = faker.helpers.arrayElement([
        "upcommingEnrolledCourse",
        "pendingApproval",
      ]);
    }

    // Marking System
    const getCGPA = (mark) => {
      if (mark < 0 || mark > 100) {
        return "Invalid Mark";
      } else if (mark >= 0 && mark <= 39) {
        return 0;
      } else if (mark >= 40 && mark <= 44) {
        return 2.0;
      } else if (mark >= 45 && mark <= 49) {
        return 2.25;
      } else if (mark >= 50 && mark <= 54) {
        return 2.5;
      } else if (mark >= 55 && mark <= 59) {
        return 2.75;
      } else if (mark >= 60 && mark <= 64) {
        return 3.0;
      } else if (mark >= 65 && mark <= 69) {
        return 3.25;
      } else if (mark >= 70 && mark <= 75) {
        return 3.5;
      } else if (mark >= 76 && mark <= 79) {
        return 3.75;
      } else {
        return 4.0;
      }
    };

    let result;
    // result manipulation
    if (status === "completed" && session === "Spring") {
      const midterm = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
      const sessional = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
      const final = Math.floor(Math.random() * (50 - 30 + 1)) + 30;

      result = {
        midterm: midterm,
        sessional: sessional,
        final: final,
        totalMark: midterm + sessional + final,
        cgpa: getCGPA(midterm + sessional + final),
      };
    } else {
      result = {};
    }

    // Push the purchased courseData to student obj
    const obj = {
      courseId,
      transactionId,
      purchase_date,
      year,
      session,
      semester,
      status,
      result,
      ammountPaid,
      paymentConfirmation,
    };
    student_data_table[0].coursesPurchased.push(obj);

    // Generate TransatcionData
    GenerateTransactionData(
      transactionId,
      courseId,
      paymentConfirmation,
      studentId,
      year,
      session,
      semester
    );
  };

  // **************************
  // GenerateTransactionData
  // **************************
  const GenerateTransactionData = (
    transactionId,
    courseId,
    paymentConfirmation,
    studentId,
    year,
    session,
    semester
  ) => {
    const transactionObj = {
      transactionId: transactionId,
      dbType: "transaction_data",
      studentId: studentId,
      paymentConfirmation: paymentConfirmation,
      courseId: courseId,
      year,
      session,
      semester,
    };
    transactionData.push(transactionObj);
  };

  // **********************************
  // GenerateStudentDataLoop()
  // ************************************

  for (let i = 1; i <= 50; i++) {
    const id = faker.datatype.uuid();
    const studentDataFromFunction = GenerateUserStudentData();
    studentDataFromFunction.image = `image_${i + 50}`;
    studentDataFromFunction.id = id;
    userData.push(studentDataFromFunction);
    // Looping for multiple data generate
    for (let j = 1; j <= 10; j++) {
      GenerateStuenetCoursePurchasedData(id);
    }
  }

  // **********************************
  // GenerateClientUserDataLoop()
  // ************************************

  for (let i = 1; i <= 50; i++) {
    const id = faker.datatype.uuid();
    const GenerateClientUserDataLoop = GenerateClientUserData();
    GenerateClientUserDataLoop.image = `image_${i + 100}`;
    GenerateClientUserDataLoop.id = id;
    userData.push(GenerateClientUserDataLoop);
  }

  // ***********************************************
  // GenerateTestimonialData() [1]  -----> Student
  // ***********************************************

  const testimonialDataGenerator = () => {
    const dataType = "testimonial_data";
    const comment = faker.lorem.paragraph(3);
    const date = `${faker.number.int({
      nim: 0,
      max: 28,
    })}-${faker.number.int({ nim: 0, max: 8 })}-2023`;
    return {
      dataType,
      comment,
      date,
    };
  };

  // ****************************************
  // TestimonialDataLoop [2]
  // *****************************************
  const studentsArray = userData.filter((user) => {
    return user.role === "student";
  });

  // const ramdomStudent = studentsArray
  for (let i = 1; i <= 24; i++) {
    const ramdomStudent =
      studentsArray[Math.floor(Math.random() * (studentsArray.length - 1))].id;
    const getTestimonialData = testimonialDataGenerator();
    getTestimonialData.id = faker.datatype.uuid();
    getTestimonialData.authId = ramdomStudent;
    const selectedStudent = userData.filter((user) => {
      return user.id === ramdomStudent;
    });

    // Data Load
    selectedStudent[0].testimonitalData.push(getTestimonialData.id);
    testimonialData.push(getTestimonialData);
  }

  //************************************************
  // NEW UPDATE 2024
  //************************************************

//************************************************
// getRandomDevelopmentSkill
//************************************************



const getRandomDevelopmentSkill = () => {
  const randomIndex = Math.floor(Math.random() * developmentData.length);
  const randomDevelopmentSkill = developmentData[randomIndex];
  return {
    id: randomDevelopmentSkill.id,
    title: randomDevelopmentSkill.title,
  };
};

const teacherArrayOfObj = userData.filter((teacher, index) => {
  return teacher.role === "teacher";
});

teacherArrayOfObj.map((teacher, index) => {

  const defaultSkill = {
    id: teacher.specializedWithDevelopment,
    title: teacher.expertise,
  };

  // Create a Set to store unique skill IDs for each teacher
  const uniqueSkills = new Set();

  // Set default skill
  const defaultSkillObj = {
    id: defaultSkill.id,
    title: defaultSkill.title,
    skillMode: "Specialist",
    experience: "5 Years",
    completedProjects: faker.number.int({ min: 10, max: 50 }),
  };

  teacher.developmentSkills.push(defaultSkillObj);

  for (let i = 1; i < 4; i++) {
    let skill;

    // Ensure unique skill for each teacher
    do {
      skill = getRandomDevelopmentSkill();
    } while (uniqueSkills.has(skill.id));

    uniqueSkills.add(skill.id);

    const skillObj = {
      id: skill.id,
      title: skill.title,
      skillMode: "Expert",
      experience: faker.helpers.arrayElement([
        "1 Years",
        "2 Years",
        "3 Years",
        "4 Years",
        "5 Years",
      ]),
      completedProjects: faker.number.int({ min: 5, max: 25 }),
    };

    teacher.developmentSkills.push(skillObj);
  }
  return teacher;
});


  // *********************************************** */
  //     Blog with read, view, comment
  //************************************************ */

  //getRandomUser
  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * userData.length);
    const getRandomUserId = userData[randomIndex].id;
    return getRandomUserId;
  };

  blogData.map((blog, index) => {
    const usedUserIds = new Set(); // Create a Set to store used user IDs

    // viewList +  readList
    for (let x = 1; x <= 4; x++) {
      let randomUserId;
      do {
        randomUserId = getRandomUser();
      } while (usedUserIds.has(randomUserId));

      usedUserIds.add(randomUserId);
      blog.socialData.readList.push(randomUserId);
      blog.socialData.viewList.push(randomUserId);
    }

    //  viewList
    for (let y = 1; y <= 3; y++) {
      let randomUserId;

      do {
        randomUserId = getRandomUser();
      } while (usedUserIds.has(randomUserId));

      usedUserIds.add(randomUserId);
      blog.socialData.viewList.push(randomUserId);
    }

    // commentList
    for (let z = 1; z <= 5; z++) {
      let randomUserId;
      do {
        randomUserId = getRandomUser();
      } while (usedUserIds.has(randomUserId));

      usedUserIds.add(randomUserId);
      blog.socialData.commentList.push({
        id: randomUserId,
        comment: faker.lorem.sentence(),
      });
    }
    return blog;
  });

  // **************************************
  // Re-arrange blog and add Image
  // **************************************
  function shuffleArray(array) {
    // Create a copy of the array
    const newArray = [...array];

    // Shuffle the copy
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    // Return the shuffled copy
    return newArray;
  }

  // **************************************************************
  // Call the shuffleArray function to shuffle the array
  // ****************************************************************
  const blogDataUpdated = shuffleArray(blogData);

  blogDataUpdated.map((singleBlog, index) => {
    return (singleBlog.image = `image_${index + 1}`);
  });

  // ****************************************
  // REACT PART
  // *****************************************

  // Convert JSON data to a string
  // UserDownloadJsonFile
  const userJsonString = JSON.stringify(userData, null, 2);
  const userDownloadJsonFile = () => {
    const blob = new Blob([userJsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "user_data.json";
    a.click();
  };

  // Convert JSON data to a string
  // blogDownloadJsonFile
  const blogJsonString = JSON.stringify(blogDataUpdated, null, 2);
  const blogDownloadJsonFile = () => {
    const blob = new Blob([blogJsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "blog_data.json";
    a.click();
  };

  // Convert JSON data to a string
  // courseDownloadJsonFile
  const courseJsonString = JSON.stringify(courseData, null, 2);
  const courseDownloadJsonFile = () => {
    const blob = new Blob([courseJsonString], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "course_data.json";
    a.click();
  };

  // Convert JSON data to a string
  // developmentDownloadJsonFile
  const developmentJsonString = JSON.stringify(developmentData, null, 2);
  const developmentDownloadJsonFile = () => {
    const blob = new Blob([developmentJsonString], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "development_data.json";
    a.click();
  };

  // Convert JSON data to a string
  // transactionDownloadJsonFile
  const transactionJsonString = JSON.stringify(transactionData, null, 2);
  const transactionDownloadJsonFile = () => {
    const blob = new Blob([transactionJsonString], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transaction_data.json";
    a.click();
  };

  // Convert JSON data to a string
  // testimonialDownloadJsonFile
  const testimonialJsonString = JSON.stringify(testimonialData, null, 2);
  const testimonialDownloadJsonFile = () => {
    const blob = new Blob([testimonialJsonString], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "testimonial_data.json";
    a.click();
  };

  return (
    <div>
      <div>
        <h3>Generated userJsonString JSON:</h3>
        <pre>{userJsonString}</pre>
        <button onClick={userDownloadJsonFile}>Download JSON</button>
      </div>

      <div>
        <h3>Generated blogJsonString JSON:</h3>
        <pre>{blogJsonString}</pre>
        <button onClick={blogDownloadJsonFile}>Download JSON</button>
      </div>

      <div>
        <h3>Generated developmentJsonString JSON:</h3>
        <pre>{developmentJsonString}</pre>
        <button onClick={developmentDownloadJsonFile}>Download JSON</button>
      </div>

      <div>
        <h3>Generated courseJsonString JSON:</h3>
        <pre>{courseJsonString}</pre>
        <button onClick={courseDownloadJsonFile}>Download JSON</button>
      </div>

      <div>
        <h3>Generated transactionDownloadJsonFile JSON:</h3>
        <pre>{transactionJsonString}</pre>
        <button onClick={transactionDownloadJsonFile}>Download JSON</button>
      </div>

      <div>
        <h3>Generated testimonialJsonString JSON:</h3>
        <pre>{testimonialJsonString}</pre>
        <button onClick={testimonialDownloadJsonFile}>Download JSON</button>
      </div>
    </div>
  );
};

export default UserBlogCourseDevelopmentTestimonial;
