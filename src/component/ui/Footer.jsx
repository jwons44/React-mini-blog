import React, { useState } from "react";
import styled from "styled-components";
import { faSquareFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterWrap = styled.div`
    width: 1380px;
    margin: 2em auto 2em;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-top: 1px solid #ced4da;
    height: 6.25em;
    padding: 2em 0 1.5em 0;

    .footer-logo-wrap {
        width: 10em;
        margin-top: 1em;
    }
    
    .footer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin: 1em 3em 1em 3em; */
        padding: 1em 0.5em 0.8em 0.5em;
    }
    .info-wrap {
        font-size: 0.8em;
    }

    .info-wrap .content {
        color: #495057;
        margin-bottom: 0.3em;
    }
    .footer-info a {
        color: #495057;
    }
    
    .footer-info li:hover {
        color: black;
        font-weight: bold;
    }

    .company-num {
        display: flex;
    }

    .company-num p {
        color: #868e96;
    }

    .company-num .T-num {
        margin-right: 1.5em;
    }

    .sns-wrap {
        display: flex;
    }

    .company-num .copyright {
        color: #adb5bd;
        margin-left: 1em;
    }

    .sns-wrap {
        font-size: 2.3em;
    }

    .sns-wrap li{
        margin-right: 0.5em;
    }

    .sns-wrap li:first-child a{
        color: #1877F2;
    }

    .sns-wrap li:nth-child(2) a{
        color: #B61D6C;
    }

    .sns-wrap li:last-child a{
        color: #FF0000;
    }

`


function Footer(props) {
    return (
        <FooterWrap>
            <div className="footer-logo-wrap">
                <img src="img/if-logo-black.png" alt="if-logo" />
            </div>
            <div>
                <ul className="footer-info">
                    <li><a href="#">이용약관</a></li>
                    <li><a href="#">개인정보취급방침</a></li>
                    <li><a href="#">고객센터</a></li>
                </ul>

                <div className="info-wrap">
                    <div className="info">
                        <p className="content">서울 금천구 가산디지털1로 75-24 , 702호 아이에스비즈타워</p>
                        <div className="company-num">
                            <p className="T-num">T. 070-5223-2073</p>
                            <p className="F-num">F. 070-4032-2073</p>
                            <p className="copyright">©2021 by IF company.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="sns-wrap">
                <li><a href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
            </ul>
        </FooterWrap>
    );
}

export default Footer;