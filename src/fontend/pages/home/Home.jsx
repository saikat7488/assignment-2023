import React, { useState, useEffect } from "react";
import style from "./home.module.css";

// DATA INFROMATION
import processData from "../../../data/processData/processData";

// IMPORT TEMPLETE
import LearnEveryThing from "../../components/learnEverything/Learn";
import Counter from "../../components/counter/Counter";
import CoursesInfo from "../../components/LearnMore/LearnMore";
import OurCourses from "../../components/services/OurCourses";
import Process from "../../components/Process/Process";
import Development from "../../components/development/Development";
import Blog from "../../components/blog/Blog";
import Team from "../../components/teamComponent/Team";
import DeveloperTeam from "../../components/developerTeam/DeveloperTeam";
import WhyChosenUs from "../../components/whyChoosenUs/WhyChoosenUs";
import MordenFeature from "../../components/modernFeature/Modern";
import EventTemplete from "../../components/eventTemplete/EventTemplete";
import Testimonial from "../../components/testimonial/Testimonial";
import CourseInfoWithSlider from "../../components/courseDetails/CourseDetails";
import StudentTemplete from "../../components/studentsInfo/StudentTemplete";

export default function Home() {
  //DEVELOPING PROCESS TODO FROM LOCAL DATABSE
  const [processTodo, setProcessTodo] = useState(null);

  useEffect(() => {
    setProcessTodo(processData);
  }, []);


  useEffect(() => {
    document.title = 'WorldCoder | Home';
  }, []);

  return (
    <>
      <div className={style.pageContainer}>
        <LearnEveryThing />
        <Counter />
        <CourseInfoWithSlider paginationSystem={false} contentPerPage="6" />
        <OurCourses paginationSystem={false} contentPerPage="10" />
        <CoursesInfo />
        <Team paginationSystem={false} contentPerPage="3" />
        <Process data={processTodo} />
        <Development paginationSystem={false} contentPerPage="6" />
        <DeveloperTeam paginationSystem={false} contentPerPage="3" />
        <Blog paginationSystem={false} contentPerPage="6" />
        <WhyChosenUs />
        <MordenFeature />
        <Testimonial paginationSystem={false} contentPerPage="6" />
        <StudentTemplete paginationSystem={false} contentPerPage="6" />
        <EventTemplete /> 
      </div>
    </>
  );
}
