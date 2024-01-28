import React, { useState } from "react";
import style from "./FAQSection.module.css";

import Panel from "./Panel";

const FAQSection = () => {
  const [isOpen, setIsOpen] = useState({});

  const togglePanel = (panelId) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [panelId]: !prevState[panelId],
    }));
  };

  return (
    <div className={style.faqLayout}>
      <div className={style.accordion_tittle}>
        Frequently asked questions
      </div>
      <div className={style.faqContainer}>
        <div className={`${style.panelAccordion}`}>
          <Panel
            title="How do I create an account on your platform?"
            panelId="one"
            isOpen={isOpen.one}
            togglePanel={togglePanel}
          >
            <p>
              To create an account, click on the "Sign Up" button on the
              homepage. Fill in the required information, including your email
              and a secure password. Once registered, you can start exploring
              our courses and features.
            </p>
          </Panel>
          <Panel
            title="How can I enroll in a course?"
            panelId="two"
            isOpen={isOpen.two}
            togglePanel={togglePanel}
          >
            <p>
              Navigate to the course you're interested in and click on the
              "Enroll" button. Follow the prompts to complete the enrollment
              process. If the course has a fee, you'll be directed to the
              payment page. Once payment is confirmed, you'll gain access to the
              course materials
            </p>
          </Panel>
          <Panel
            title="How can I interact with instructors and seek support?"
            panelId="three"
            isOpen={isOpen.three}
            togglePanel={togglePanel}
          >
            <p>
              Engaging with instructors is easy! Visit the course page, and
              you'll find options to send messages, participate in discussions,
              or attend virtual office hours. For general support, check our
              "Help Center" or contact our support team through the "Contact Us"
              page.
            </p>
          </Panel>

          <Panel
            title="What should I do if I encounter technical issues with course videos?"
            panelId="four"
            isOpen={isOpen.four}
            togglePanel={togglePanel}
          >
            <p>
              If you experience video playback issues, first ensure your
              internet connection is stable. Clear your browser cache and try a
              different browser. If problems persist, check our "Technical
              Support" section in the "Help Center" for detailed troubleshooting
              steps or contact our support team.
            </p>
          </Panel>

          <Panel
            title="Can I access courses on different devices?"
            panelId="five"
            isOpen={isOpen.five}
            togglePanel={togglePanel}
          >
            <p>
              Absolutely! Our platform is designed to be accessible on various
              devices. Whether you prefer a computer, tablet, or smartphone, you
              can access your courses seamlessly. Make sure your device meets
              our system requirements for the best learning experience.
            </p>
          </Panel>

          <Panel
            title="How do I get started with your web development services?"
            panelId="six"
            isOpen={isOpen.six}
            togglePanel={togglePanel}
          >
            <p>
              To begin with our web development services, simply visit our
              website and navigate to the "Get Started" section. Fill out the
              inquiry form with your project details, and our team will reach
              out to you promptly to discuss your requirements and initiate the
              development process.
            </p>
          </Panel>

          <Panel
            title="What technologies do you specialize in for app and web development?"
            panelId="seven"
            isOpen={isOpen.seven}
            togglePanel={togglePanel}
          >
            <p>
              We specialize in a wide range of technologies, including but not
              limited to HTML5, CSS3, JavaScript, React.js, Angular, Node.js,
              Python, and Django. Our experienced development team stays updated
              with the latest industry trends to deliver cutting-edge solutions
              for your web and app projects.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
