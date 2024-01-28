import React, { memo } from "react";
import style from "./Address.module.css";

const Address = ({ data }) => {
  const { address } = data;
  const { street, state, city, country } = address;

  return (
    <>
      <div className={style.addressContainer}>
        <div className={style.addressCard}>
          <div className={style.address}>
            <div className={style.title}>street</div>
            <div className={style.text}>
              <span>{data && street}</span>
            </div>
          </div>
          <div className={style.address}>
            <div className={style.title}>state</div>
            <div className={style.text}>
              <span>{data && state}</span>
            </div>
          </div>
          <div className={style.address}>
            <div className={style.title}>city</div>
            <div className={style.text}>
              <span>{data && city}</span>
            </div>
          </div>
          <div className={style.address}>
            <div className={style.title}>country</div>
            <div className={style.text}>
              <span>{data && country}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Address);
