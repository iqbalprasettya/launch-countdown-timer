import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import classes from "./style.module.scss";

const THREE_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();
const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

const ExpiredNotice = () => {
    return (
      <div className={classes["expired"]}>
        <h1>Expired!!!</h1>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

const index = () => {
  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  if (days + hours + minutes + seconds <= 0) {
    console.log("habis");
    return <ExpiredNotice />;
  } 

  return (
    <>
      <div className={classes["wrapper"]}>
        <div className={classes["header"]}>
          <h1>WE'RE LAUNCHING SOON</h1>
        </div>
        <div className={classes["body-time"]}>
          <div className={classes["item-time"]}>
            <div className={classes["time"]}>{days}</div>
            <h3>Days</h3>
          </div>
          <div className={classes["item-time"]}>
            <div className={classes["time"]}>{hours}</div>
            <h3>Hours</h3>
          </div>
          <div className={classes["item-time"]}>
            <div className={classes["time"]}>{minutes}</div>
            <h3>Minutes</h3>
          </div>
          <div className={classes["item-time"]}>
            <div className={classes["time"]}>{seconds}</div>
            <h3>Seconds</h3>
          </div>
        </div>
      </div>
      <div className={classes["social"]}>
        <FontAwesomeIcon icon={faSquareFacebook} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </>
  );
};

export default index;
