import React from "react";
import PropTypes from "prop-types";
import "./CustomSkeletonLoader.css"; // Import your CSS file for styling

const CustomSkeletonLoader = ({
  position,
  count,
  width,
  height,
  circle,
  duration,
  mt
}) => {
  const skeletons = [];

  for (let i = 0; i < count; i++) {
    const skeletonStyle = {
      width: width,
      height: height,
      borderRadius: circle ? "50%" : "4px",
      animationDuration: `${duration}s`,
      marginTop: mt,
    };

    skeletons.push(
      <div key={i} className={`custom-skeleton`} style={skeletonStyle}></div>
    );
  }

  const skeletonContainerStyle = {
    justifyContent: position,
    alignItems: position,
  };

  return (
    <div className="custom-skeleton-container" style={skeletonContainerStyle}>
      {skeletons}
    </div>
  );
};

CustomSkeletonLoader.propTypes = {
  count: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  circle: PropTypes.bool,
  duration: PropTypes.number,
};

CustomSkeletonLoader.defaultProps = {
  position: "flex-start",
  circle: false,
  duration: 1.2,
  mt: 0,
};

export default CustomSkeletonLoader;
