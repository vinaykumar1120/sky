import React from 'react';
import styled from 'styled-components';
import { BGSideAuth, ZwalletApp } from '../../../assets';
import { LogoBrand } from '../../atoms';
import { customMedia } from '../../Layouting/BreakPoints';

const SidebarAuth = ({ className }) => {
  return (
    <Styles className={className}>
      {/* <div className="image-background"></div> */}
      <div className="wrapper">
        <LogoBrand light />
        <div className="image-wrapper">
          <img src={ZwalletApp} alt="zwalletapp" />
        </div>
        <div className="paragraph">
          <h2 className="title-paragraph">App that Covering Banking Needs.</h2>
          <div className="text">
            SKYwallet is an application that focussing in banking needs for all
            users
            <br />
            in the world. Always updated and always following world trends.
            <br />
            5000+ users registered in SKYwallet everyday with worldwide
            <br />
            users coverage.
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SidebarAuth;

const Styles = styled.div`
  background-color: #6379f4;
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url(${BGSideAuth});
  .wrapper {
    z-index: 9;
    padding: 0 150px;
    ${customMedia.lessThan('laptop')`
      padding-left: 50px; 
    `}
    ${customMedia.lessThan('tablet')`
      padding: 50px;
    `}
    padding-top: 50px;
    /* width: 750px; */
    .logo {
      padding-top: 10px;
      font-style: normal;
      font-weight: bold;
      font-size: 29px;
      line-height: 40px;
      color: #ffffff;
    }
    .image-wrapper {
      width: 600px;
      ${customMedia.lessThan('tablet')`
      width: 100%;
    `}
      img {
        width: 100%;
        height: 100%;
        ${customMedia.lessThan('laptop')`
     width: 90%;
    `}
        ${customMedia.lessThan('1000px')`
     width: 80%;
    `}
        ${customMedia.lessThan('900px')`
      width: 70%;
    `}
        ${customMedia.lessThan('tablet')`
      width: 70%;
    `}
      }
    }
    .paragraph {
      .title-paragraph {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #ffffff;
        top: 20px;
      }
      .text {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        padding-top: 30px;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
