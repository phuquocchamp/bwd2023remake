import React from 'react';
// import '../Img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../CSS/Footer.css';
import { faEnvelope, faLocationDot, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = React.useState('');
    function handleSubmit(e) {
        e.preventDefault();
        console.log('Submitted');
        const data = { email };
        fetch('http://127.0.0.1:5000/mail', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(() => {
            console.log('Posted');
        })
    }
    return (
        <footer className="footer">
            <div className="flow__container">
                <div className="logo__footer">FireWing</div>
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
                                <p>firewingbwd@vku.vn</p>
                                <p>bwd2023@vku.vn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed__container">
                <div className="info__container">
                    {/* About Us Panel */}
                    <div className="item__panel aboutus__section">
                        <p className="item__heading">About Us</p>
                        <p className="text__block">
                            FireWing giúp người dùng nắm bắt và cập nhật các thông tin về cháy rừng, bao gồm tình hình
                            hiện tại, dự báo, đánh giá nguy cơ cháy rừng.
                        </p>
                        <div className="social__panel">
                            <div className="social__item">
                                <FontAwesomeIcon icon={faGithub} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake" aria-label="Link to github"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faYoutube} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faFacebook} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                            <div className="social__item">
                                <FontAwesomeIcon icon={faInstagram} />
                                <a href="https://github.com/phuquocchamp/bwd2023remake"></a>
                            </div>
                        </div>
                    </div>

                    {/* Explore Panel */}
                    <div className="item__panel second__panel left__spacing">
                        <p className="item__heading">Explore</p>
                        <ul className="item__menu">
                            <li>
                                <Link to="/">Trang Chủ</Link>
                            </li>

                            <li>
                                <Link to="/News">Thông tin</Link>
                            </li>
                            <li>
                                <Link to="/Report">Báo cáo</Link>
                            </li>
                            <li>
                                <Link to="about-us">Về chúng tôi</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="item__panel top__spacing third__panel">
                        <p className="item__heading">Hotline</p>
                        <ul className="item__menu">
                            <li>
                                <a href="">114</a>
                            </li>

                            <li>
                                <a href="">1900 969 960</a>
                            </li>
                            {/* <li>
                                <a href="">Brangding Design</a>
                            </li>
                            <li>
                                <a href="">Brangding Design</a>
                            </li> */}
                        </ul>
                    </div>

                    {/* Newslatter */}
                    <div className="item__panel left__spacing top__spacing">
                        <p className="item__heading">Newsletter</p>
                        <p className="text__block">Hãy nhập Email của bạn để nhận thống báo mới nhất từ chúng tôi !</p>
                        <div className="subcribe__widget">
                            <div className="widget__input">
                                <input type="email" name="email" placeholder="Email Address" className="input__panel" />
                                <div className="send__email">{/* <FontAwesomeIcon icon={faEnvelope} /> */}</div>
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
