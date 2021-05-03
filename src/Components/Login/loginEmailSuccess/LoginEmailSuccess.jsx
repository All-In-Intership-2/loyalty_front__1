import React from "react";
import "./LoginEmailSuccess.scss";
import arrowLeft from "./../../../assets/images/ArrowLeft.png";
import emailSent from "./../../../assets/images/emailSent.png";

const LoginEmailSuccess = () => {
  return (
    <>
      <div className="loginEmailSuccess-container">
        <div className="loginEmailSuccess-containerCenter">
          <div className="loginEmailSuccess-content">
            <div className="linkToBack">
              <a href="/">
                <img src={arrowLeft} alt="arrow-left" />
                <span>Վերադառնալ գլխավոր էջ</span>
              </a>
            </div>
            <div className="imgContent">
              <img src={emailSent} alt="email-sent" />
            </div>
            <div className="textP">
              <p>Նամակը հաջողությամբ ուղարկված է: Մենք հնարավորինս արագ կկապվենք Ձեզ հետ:</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginEmailSuccess;
