import React, { useState } from "react";
import "./emailFail.scss";
import emailError from "./../../../assets/images/emailError.png";
import arrowLeft from "./../../../assets/images/ArrowLeft.png";

const EmailFail = () => {
  return (
    <>
      <div className="loginEmailFail-container">
        <div className="loginEmailFail-containerCenter">
          <div className="loginEmailFail-content">
            <div className="linkToBack">
              <a href="#">
                <img src={arrowLeft} alt="arrow-left" />
                <span>Վերադառնալ գլխավոր էջ</span>
              </a>
            </div>
            <div className="imgContent">
              <img src={emailError} alt="email-error" />
            </div>
            <div className="textP">
              <p>
                Ուղարկելու ընթացքում տեղի է ունեցել անկանխատեսելի սխալ: Խնդրում ենք փորձել նորից:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailFail;
