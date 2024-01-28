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
      <div className={style.faqContainer}>
        <div className={`${style.panelAccordion}`}>
          <Panel
            title="Payment Policy"
            panelId="one"
            isOpen={isOpen.one}
            togglePanel={togglePanel}
          >
            <p>
              Clearly outline accepted payment methods. Specify whether payments
              are one-time or recurring. Highlight any applicable taxes or fees.
            </p>
          </Panel>
          <Panel
            title="Refund Policy"
            panelId="two"
            isOpen={isOpen.two}
            togglePanel={togglePanel}
          >
            <p>
              Clearly state the conditions under which refunds will be issued.
              Specify any time limits or restrictions on refund requests.
              Outline the process for requesting a refund.
            </p>
          </Panel>
          <Panel
            title="Course Access Policy"
            panelId="three"
            isOpen={isOpen.three}
            togglePanel={togglePanel}
          >
            <p>
              Specify the duration of course access. Clarify whether there are
              any limitations on accessing course materials after completion.
            </p>
          </Panel>

          <Panel
            title="Course Content Policy"
            panelId="four"
            isOpen={isOpen.four}
            togglePanel={togglePanel}
          >
            <p>
              Explain the type and format of course content, such as videos,
              text, quizzes, etc. Clarify if there are any restrictions on
              sharing or distributing course content.
            </p>
          </Panel>

          <Panel
            title="Security and Privacy Policy"
            panelId="five"
            isOpen={isOpen.five}
            togglePanel={togglePanel}
          >
            <p>
              Prioritize the security of user data and information. Outline the
              company's approach to data protection, encryption, and privacy
              measures
            </p>
          </Panel>

          <Panel
            title="Innovation and Technology Policy"
            panelId="six"
            isOpen={isOpen.six}
            togglePanel={togglePanel}
          >
            <p>
              Communicate a commitment to staying at the forefront of
              educational technology. Outline plans for integrating new
              technologies and tools into the learning experience.
            </p>
          </Panel>

          <Panel
            title="Compliance and Legal Policy"
            panelId="seven"
            isOpen={isOpen.seven}
            togglePanel={togglePanel}
          >
            <p>
              Communicate a commitment to complying with all relevant laws and
              regulations. Highlight any industry-specific compliance
              requirements and the company's adherence to them.
            </p>
          </Panel>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
