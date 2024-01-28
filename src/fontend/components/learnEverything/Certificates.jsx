import React from "react";

const Certificates = ({ isHovered }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="80"
      height="80"
      x="0"
      y="0"
      viewBox="0 0 252.643 252.643"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
      className=""
    >
      <g>
        <path
          d="M235.143 17.081H17.5c-9.649 0-17.5 7.851-17.5 17.5v147.658c0 9.649 7.851 17.5 17.5 17.5h126.911l-3.832 23.37c-.721 4.399.734 8.384 3.893 10.658 3.158 2.274 7.396 2.396 11.341.317l27.381-14.412c.764-.392 2.869-.392 3.633 0l27.381 14.412c1.873.986 3.813 1.477 5.672 1.477 2.056 0 4.012-.601 5.67-1.795 3.158-2.274 4.613-6.26 3.893-10.659l-3.831-23.369h9.532c9.649 0 17.5-7.851 17.5-17.5V34.581c-.001-9.65-7.852-17.5-17.501-17.5zm-50.132 152.662c-16.817 0-30.5-13.683-30.5-30.5s13.683-30.5 30.5-30.5 30.5 13.683 30.5 30.5-13.683 30.5-30.5 30.5zm8.803 36.656c-5.101-2.686-12.506-2.686-17.606 0l-19.358 10.189 6.154-37.539c6.527 3.623 14.029 5.693 22.008 5.693s15.48-2.071 22.008-5.693l2.398 14.635c.006.024.008.05.013.074l3.743 22.831-19.36-10.19zm43.829-24.16c0 1.355-1.145 2.5-2.5 2.5h-11.991l-2.739-16.709c-.011-.066-.029-.129-.042-.195 6.335-7.818 10.141-17.768 10.141-28.592 0-25.089-20.411-45.5-45.5-45.5s-45.5 20.411-45.5 45.5c0 10.824 3.806 20.772 10.141 28.592-.013.065-.031.129-.042.194l-2.741 16.723c-.084-.003-.165-.013-.249-.013H17.5c-1.355 0-2.5-1.145-2.5-2.5V34.581c0-1.355 1.145-2.5 2.5-2.5h217.643c1.355 0 2.5 1.145 2.5 2.5v147.658z"
          fill={isHovered ? "#fff" : "#000"}
          data-original={isHovered ? "#fff" : "#000"}
          className=""
        ></path>
        <path
          d="M208.619 60.243h-170a7.499 7.499 0 0 0-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5h170c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM110.619 100.911h-72a7.499 7.499 0 0 0-7.5 7.5c0 4.143 3.357 7.5 7.5 7.5h72c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"
          fill={isHovered ? "#fff" : "#000"}
          data-original={isHovered ? "#fff" : "#000"}
          className=""
        ></path>
      </g>
    </svg>
  );
};

export default Certificates;
