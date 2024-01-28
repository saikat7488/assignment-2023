import React from "react";
import style from "./SkeletonViewDeveloperTeam.module.css";
import Skeleton from "react-loading-skeleton";

export default function SkeletonViewDeveloperTeam() {
  return (
    <>
      <div className={style.cardDesign}>
        <div className={style.cardHeader}>
          <div className={style.cardHeaderImage}>
            <Skeleton circle={true} width="80px" height="80px" />
          </div>
          <div className={style.cardHeaderInformation}>
            <Skeleton
              width={"200px"}
              className={style.cardHeaderFirstText}
            ></Skeleton>
            <Skeleton
              width={`250px`}
              className={style.cardHeaderSecondText}
            ></Skeleton>
          </div>
          <div className={style.cardHeaderContent}>
            <Skeleton
              height={`40px`}
              className={style.cardHeaderContentLeft}
            ></Skeleton>
            <Skeleton
              height={`40px`}
              className={style.cardHeaderContentCenter}
            ></Skeleton>
            <Skeleton
              height={`40px`}
              className={style.cardHeaderContentRight}
            ></Skeleton>
          </div>
        </div>
        <div className={style.cardBody}>
          <div className={style.cardBodyInformation}>
            <div className={style.cardBodyInformationLeft}>
              <Skeleton className={style.top}></Skeleton>
              <Skeleton className={style.bottom}></Skeleton>
            </div>
            <div className={style.cardBodyInformationCenter}>
              <Skeleton className={style.top}></Skeleton>
              <Skeleton className={style.bottom}></Skeleton>
            </div>
            <div className={style.cardBodyInformationRight}>
              <Skeleton className={style.top}></Skeleton>
              <Skeleton className={style.bottom}></Skeleton>
            </div>
          </div>
          <div className={style.cardBodyText}>
            <p className={style.cardBodyTextFirstLine}>
              <Skeleton count={1}></Skeleton>
            </p>
            <p className={style.cardBodyTextLastLine}>
              <Skeleton count={1}></Skeleton>
            </p>
          </div>
          <div className={style.cardSocialMedia}>
            <ul>
              <Skeleton circle={true} height={`40px`} width={`40px`}></Skeleton>
              <Skeleton circle={true} height={`40px`} width={`40px`}></Skeleton>
              <Skeleton circle={true} height={`40px`} width={`40px`}></Skeleton>
              <Skeleton circle={true} height={`40px`} width={`40px`}></Skeleton>
              <Skeleton circle={true} height={`40px`} width={`40px`}></Skeleton>
            </ul>
          </div>
          <div className={style.cardAction}>
            <Skeleton height={`36px`} className={style.message}></Skeleton>
            <Skeleton height={`36px`} className={style.following}></Skeleton>
            <Skeleton height={`36px`} className={style.viewProfile}></Skeleton>
          </div>
        </div>
        <div className={style.cardFooter}>
          <div className={style.cardFooterHeading}>
            <Skeleton height={`24px`}></Skeleton>
          </div>
          <ul className={style.cardfooterItems}>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
            <li>
              <Skeleton width={`60px`} height={`25px`} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
