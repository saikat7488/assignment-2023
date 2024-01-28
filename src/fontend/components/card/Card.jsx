import React from "react";
import cardStyle from "./Card.module.css";
import Head from "../ComponentHeading/Head";

export default function Card() {
  return (
    <>
      <div className={cardStyle.customContainer}>
        <Head
          title="Coureses by Cetagory"
          textOne="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sed!"
          textTwo="Lorem ipsum dolor sit amet consectetur."
        />
        <div className={cardStyle.cardContainer}>
          <div className={cardStyle.card}>
            <img src={require(`../../../assets/images/card_1.jpg`)} alt="" />
            <div className={cardStyle.cardContent}>
            <span> <i className={`fa fa-diamond`}></i></span>
              <div>Heading Content</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                recusandae eaque pariatur aut non aliquam ducimus consectetur et
                iste dolore"
              </p>
            </div>
          </div>
          <div className={cardStyle.card}>
            <img src={require(`../../../assets/images/card_2.jpg`)} alt="" />
            <div className={cardStyle.cardContent}>
              <span> <i className="fab fa-microsoft"></i></span>
              <div>Heading Content</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                recusandae eaque pariatur aut non aliquam ducimus consectetur et
                iste dolore"
              </p>
            </div>
          </div>
          <div className={cardStyle.card}>
            <img src={require(`../../../assets/images/card_3.jpg`)} alt="" />
            <div className={cardStyle.cardContent}>
              <span><i className="fab fa-apple"></i></span>
              <div>Heading Content</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                recusandae eaque pariatur aut non aliquam ducimus consectetur et
                iste dolore"
              </p>
            </div>
          </div>
          <div className={`${cardStyle.card} ${cardStyle.cardDisplay}`}>
            <img src={require(`../../../assets/images/card_4.jpg`)} alt="" />
            <div className={cardStyle.cardContent}>
              <span> <i className="fab fa-app-store"></i></span>
              <div>Heading Content</div>
              <p>
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
                recusandae eaque pariatur aut non aliquam ducimus consectetur et
                iste dolore"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
