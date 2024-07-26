import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setHeaderFixed(true);
            } else {
                setHeaderFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={'header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}'}>
            <div className={'header-top d-md-none ${socialToggle ? "open" : ""}'}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/signup" className='lab-btn me-3' ><span>Create Account</span></Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to="/">
                                <img src={logo} alt=""/>
                                </Link>

                            </div>


                        </div>
                        {/*menu area*/}
                        <div className='menu-area'>
                            <div className='menu'>
                                <ul className={'lab-ul ${menuToggle ? "active" : "" }'}>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                                
                            </div>
                            <Link to="/sign-up" className='lab-btn me-3 d-none d-md-bock'>Create Account</Link>
                            <Link to="/login" className='d-none d-md-block'>Login</Link>
                            <div onClick={() => setMenuToggle(!menuToggle)}className={'header-bar d-lg-none ${menuToggle ? "active" : "" }'}>
                                <span></span>
                                <span></span>
                                <span></span>
                                </div>
                        </div>

                    </div>

                </div>

            </div>
        </header>
    );
}

export default NavItems;
