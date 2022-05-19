import React from "react";
import classes from './footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { ImLinkedin2 } from 'react-icons/im';
import { FiInstagram} from 'react-icons/fi';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className={classes.footerContainer}>
                <h1 className={classes.footerHeading}>Tour Guide</h1>
                <div className={classes.footerRow1}>
                    
                    <div className={classes.footerLogo}>
                        <img src="./assets/triptok.png" alt="" /> 
                        
                    </div>
                    <div className={classes.footerSearch}>
                        <form className={classes.footerForm} action="">
                            <input className={classes.footerSearchInput} placeholder="Places" type="search" />
                            <input className={classes.footerSearchSubmit} type="submit" value="Search" />
                        </form>
                    </div>
                    
                </div>
                <div className={classes.footerRow2}>
                    <div className={classes.box1}>
                        <div className={classes.footerLinks}>

                            <div className={classes.footerMenu}>
                                <h3><b>MENU</b></h3>
                                <ul className={classes.footerUnstyled}>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                </ul>
                            </div>

                            <div className={classes.footerMenu}>
                                <h3><b>Developers </b></h3>
                                <ul className={classes.footerUnstyled}>
                                    <li className={classes.footerListitem}>Home</li>
                                    <li className={classes.footerListitem}>Home</li>
                                    <li className={classes.footerListitem}>Home</li>
                                    <li className={classes.footerListitem}>Home</li>
                                </ul>
                            </div>

                            <div className={classes.footerMenu}>
                                <h3><b>MENU</b></h3>
                                <ul className={classes.footerUnstyled}>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                    <li className={classes.footerListitem}><a href="https://" className={classes.menuAnchor}  >Home</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        
                    <div className={classes.footerSocial}>
                            <h3><b>About Us</b></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente possimus minus quos sequi quaerat placeat rem fugit vero voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sapiente possimus minus quos sequi quaerat placeat rem fugit vero voluptates.  </p>
                            <div className={classes.footerSocialIcon}>
                                    <a className={classes.footerSocialIconAnchor} href="https://" target="blank"><FaFacebookF/></a>
                                    <a className={classes.footerSocialIconAnchor} href="https://" target="blank"><FiInstagram/></a>
                                    <a className={classes.footerSocialIconAnchor} href="https://" target="blank"><BsTwitter/></a>
                                    <a className={classes.footerSocialIconAnchor} href="https://" target="blank"><ImLinkedin2/></a>
                            </div>
                    </div>
                        
                    
                </div>
                    <div className={classes.footerCopy}>
                        <a href="https://">&copy; 2022 | All rights reserved</a>
                    </div>
            </div>      
        </footer> 
    );
};

export default Footer;
