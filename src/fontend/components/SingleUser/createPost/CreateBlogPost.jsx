import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./CreateBlogPost.module.css";
import { Form, Button } from "react-bootstrap";
import CustomFileInput from "./CustomFileInput";
import CustomTextarea from "./CustomTextarea";
import SelectComponent from "./SelectComponent";

const CreateBlogPost = () => {
  const [displayCreateContent, setDisplayCreateContent] = useState(false);

  const troggleDisplayConent = () => {
    setDisplayCreateContent(!displayCreateContent);
  };

  const [titleText, setTitleText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionText, setDescriptionText] = useState("");

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const inputDataManagement = (stateName, setStateValue) => {
    switch (stateName) {
      case "titleText":
        setTitleText(setStateValue);
        break;
      case "selectedOption":
        setSelectedOption(setStateValue);
        break;
      case "selectedFile":
        setSelectedFile(setStateValue);
        break;
      case "descriptionText":
        setDescriptionText(setStateValue);
        break;
      default:
        break;
    }
  };

  const onSubmitBlogPostForm = (event) => {
    event.preventDefault();
    console.log(
      "id",
      uuidv4(),
      "titleText :",
      titleText,
      "selectedOption :",
      selectedOption,
      "selectedFile :",
      selectedFile,
      "descriptionText :",
      descriptionText
    );
    // Clear the input fields by resetting state
    setTitleText("");
    setSelectedOption("");
    setSelectedFile(null);
    setDescriptionText("");
  };

  return (
    <>
      <div className={style.createBlogPost}>
        <div
          className={`${style.titlePosition} ${
            displayCreateContent === false ? style.fullView : ""
          }`}
        >
          <div
            className={`${style.circle} ${style.circle1}`}
            onClick={troggleDisplayConent}
          >
            {displayCreateContent === false
              ? "Display Post Form"
              : "Conceal Post Form"}
          </div>
          <div className={`${style.circle} ${style.circle2}`}></div>
          <div className={`${style.circle} ${style.circle3}`}></div>
          <div className={`${style.circle} ${style.circle4}`}></div>
        </div>

        <div
          className={`${style.postPosition} ${
            displayCreateContent === true ? style.activeContent : ""
          }`}
        >
          <div className={style.postContent}>
            <Form onSubmit={onSubmitBlogPostForm}>
              <Form.Group className={style.cardBox} controlId="insert-title">
                <div className={style.cardBoxTitle}>Title Of Post:</div>
                <Form.Control
                  type="text"
                  placeholder="Enter your post title"
                  className={style.titleFile}
                  value={titleText}
                  onChange={(e) =>
                    inputDataManagement("titleText", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group
                className={style.cardBox}
                controlId="insert-descriptionText"
              >
                <div className={style.cardBoxTitle}>Select2:</div>
                <SelectComponent
                  options={options}
                  selectedOption={selectedOption}
                  handleSelectChange={(value) =>
                    inputDataManagement("selectedOption", value)
                  }
                />
              </Form.Group>

              <Form.Group className={style.cardBox} controlId="insert-image">
                <div className={style.cardBoxTitle}>Insert Files:</div>
                <CustomFileInput
                  selectedFile={selectedFile}
                  handleFileChange={(file) =>
                    inputDataManagement("selectedFile", file)
                  }
                />
              </Form.Group>

              <Form.Group
                className={style.cardBox}
                controlId="insert-descriptionText"
              >
                <div className={style.cardBoxTitle}>
                  Insert Post Description:
                </div>
                <CustomTextarea
                  value={descriptionText}
                  handleDescriptionTextChange={(value) =>
                    inputDataManagement("descriptionText", value)
                  }
                />
              </Form.Group>

              <Button type="submit" className={style.customBtn}>
                <i className="fa fa-send"></i> Create Post
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBlogPost;
