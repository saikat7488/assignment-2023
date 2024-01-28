import React, { useState, useContext, useCallback, useMemo } from "react";
import style from "./StudentTimeline.module.css";
import CoursePurchasedStatusList from "./CoursePurchasedStatusList";
import CoursesDisplayByStatus from "./CoursesDisplayByStatus";
import { ProfileContext } from "../../../../../contextApi/ProfileContext";

const filterCoursesByStatus = (coursePurchased, status) => {
  return (
    coursePurchased &&
    coursePurchased.filter((course) => course.status === status)
  );
};

const StudentTimeline = () => {
  const { isLoading, profileData } = useContext(ProfileContext) || {};
  const { purchasedCourseDetails } = profileData || {};

  const courseByStatus = [
    { status: "active", title: "Active Courses" },
    { status: "completed", title: "Completed Courses" },
    { status: "upcommingEnrolledCourse", title: "Upcoming Enrolled Courses" },
    { status: "pendingApproval", title: "Pending Approval" },
  ];

  const [selectedStatus, setSelectedStatus] = useState(
    courseByStatus[1]?.status
  );

  const filteredCourses = useMemo(
    () => filterCoursesByStatus(purchasedCourseDetails, selectedStatus),
    [purchasedCourseDetails, selectedStatus]
  );

  const handleStatusChange = useCallback(
    async (status) => {
      try {
        if (selectedStatus !== status) {
          setSelectedStatus(status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    },
    [selectedStatus]
  );

  return (
    <div className={style.timelineContainer}>
      <div className={style.studentTimelineManagement}>
        <div className={style.studentCourseStatusList}>
          <CoursePurchasedStatusList
            courseByStatus={courseByStatus}
            selectedStatus={selectedStatus}
            handleStatusChange={handleStatusChange}
          />
        </div>
        <div className={style.studentCourseListDisplay}>
          <CoursesDisplayByStatus
            courseByStatus={courseByStatus}
            todos={filteredCourses}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default StudentTimeline;
