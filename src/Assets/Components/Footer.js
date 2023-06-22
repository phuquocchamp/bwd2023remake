import React from 'react';
// import '../Img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/Footer.css';
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import {
    faSquareFacebook,
    faSquareGithub,
    faSquareInstagram,
    faSquareYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flow__container">
                <div className="logo__footer">{/* <img src="../Img/logo.svg" alt="Logo" /> */}</div>
                <div className="contact__info">
                    <div className="contact__item location__item">
                        <div className="contact__location">
                            <div className="contact__icon">
                                <FontAwesomeIcon icon={faLocationDot} />
                            </div>
                            <div className="location__content">
                                470 Đường Trần Đại Nghĩa, Khu đô thị, Ngũ Hành Sơn, Đà Nẵng
                            </div>
                        </div>
                    </div>
                    <div className="contact__item hostline__item">
                        <div className="contact__hostline">
                            <div className="contact__icon">
                                <FontAwesomeIcon icon={faPhoneFlip} />
                            </div>
                            <div className="hostline__content">
                                <p className="phone__number">114</p>
                                <p className="phone__number">1900 969 960</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact__item email__item">
                        <div className="contact__email">
                            <div className="contact__icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="email__content">
                                <p>firewing@pccc.vn</p>
                                <p>firewing@pccc.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed__container">
                <div className="info__container">
                    <div className="item__panel">
                        <p className="item__heading">About Us</p>
                        <p className="text__block">
                            FireWing giúp người dùng nắm bắt và cập nhật các thông tin về cháy rừng, bao gồm tình hình
                            hiện tại, dự báo, đánh giá nguy cơ cháy rừng.
                        </p>
                        <div className="social__panel">
                            <div className="social__item">
                                <FontAwesomeIcon icon={faSquareGithub} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faSquareYoutube} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faSquareGithub} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faSquareInstagram} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttom__footer">
                <div className="nocopyright__container">
                    <p className="copyright__text">"Copyright FireWing team - Best Web Design 2023"</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
