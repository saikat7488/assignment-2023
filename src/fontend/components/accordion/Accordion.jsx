import React from 'react';
import accordionStyle from './accordion.module.css';

export default function Accordion() {

    return (
        <>
            <div className={accordionStyle.customContainer}>
                <ul className={accordionStyle.accordion}>
                    <div className={accordionStyle.accordion_tittle}>
                        Frequently asked questions
                    </div>
                    <li>
                        <input onChange={()=>{}}  type="radio" name="accordion" id="firstAccordion" checked />
                        <label htmlFor="firstAccordion">
                            What does the X represent in GitHub Copilot X?
                        </label>
                        <p className={accordionStyle.content}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint voluptates numquam, ea labore quidem dolore libero, explicabo corrupti, minus ratione error distinctio neque quia? Quas laudantium excepturi exercitationem porro!
                        </p>
                    </li>

                    <li>
                        <input onChange={()=>{}}  type="radio" name="accordion" id="secondAccordion" />
                        <label htmlFor="secondAccordion">
                            When will GitHub Corpiolt X be available and how much does it cost?
                        </label>
                        <p className={accordionStyle.content}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, consequuntur minus. Mollitia rem earum dolore neque vel est nam amet laborum laudantium a ab voluptas itaque, et dicta pariatur ratione quidem officia aliquam eius? Quibusdam, rem eveniet odit dicta similique odio autem excepturi nulla eius dolor amet laborum mollitia vitae reiciendis vel! Magni reiciendis nostrum saepe sed beatae id porro doloremque harum esse molestiae facilis asperiores nemo, ipsa modi laudantium.
                        </p>
                    </li>

                    <li>
                        <input onChange={()=>{}}  type="radio" name="accordion" id="thirdAccordion" />
                        <label htmlFor="thirdAccordion">
                            Does an active or trial subscription to GitHub Copilot for Individuals or GitHub Copilot for Business guarantee me access to the technical preview features introduced with GitHub Copilot X?
                        </label>
                        <p className={accordionStyle.content}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ipsum, deleniti in consectetur quod, possimus quam animi necessitatibus reprehenderit rerum ipsam eveniet perferendis cumque at voluptatem, nihil harum sint? Atque praesentium doloribus rerum, nisi, nulla eius quidem eveniet aut pariatur consequatur in, nostrum omnis nihil placeat consectetur! Maiores, labore fugit!
                        </p>
                    </li>

                    <li>
                        <input onChange={()=>{}}  type="radio" name="accordion" id="fourthAccordion" />
                        <label htmlFor="fourthAccordion">
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ratione?
                        </label>
                        <p className={accordionStyle.content}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla ipsum, deleniti in consectetur quod, possimus quam animi necessitatibus reprehenderit rerum ipsam eveniet perferendis cumque at voluptatem, nihil harum sint? Atque praesentium doloribus rerum, nisi, nulla eius quidem eveniet aut pariatur consequatur in, nostrum omnis nihil placeat consectetur! Maiores, labore fugit!
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}
