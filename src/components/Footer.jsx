import { NavLink } from "react-router-dom"
export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-upper flex page-width">
                    <div className="footer-upper-child white">
                        <h3 className="std-25px">Contact Us</h3>
                        <ul className="white">
                            <li><NavLink to="#" className="white">Your Address Here</NavLink></li>
                            <li><NavLink to="#" className="white">0123456789</NavLink></li>
                            <li><NavLink to="mailto:exampl@xyz.com" className="white">exampl@xyz.com</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-upper-child">
                        <h3 className="white std-25px">Our Store</h3>
                        <ul>
                            <li><NavLink to="#" className="white">Home</NavLink></li>
                            <li><NavLink to="#" className="white">Products</NavLink></li>
                            <li><NavLink to="#" className="white">Our Stories</NavLink></li>
                            <li><NavLink to="#" className="white">Blogs</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-upper-child">
                        <h3 className="white std-25px">Information</h3>
                        <ul>
                            <li><NavLink to="#" className="white">Help</NavLink></li>
                            <li><NavLink to="#" className="white">forem</NavLink></li>
                            <li><NavLink to="#" className="white">carier</NavLink></li>
                            <li><NavLink to="#" className="white">Private Policy</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-upper-child ">
                        <h3 className="white std-25px">Stay In </h3>
                        <p className="white">Never miss our updates about new arrivals and special offers</p>
                        <div className="input gap-15px">
                            <input className="Subscribe" type="email" placeholder="Your E-mail"/>
                                <button className="primary-button">Subscribe</button>
                        </div>
                    </div>
                </div>
                <hr/>
                    <div className="footer-bottum flex page-width">
                        <p className="white cat bold">© 2023 Guineadad. All rights reserved</p>
                        <div className="banking-images">
                            <NavLink to="#"><img src="images-bunny/payments.png" alt="banking" height="30px" width=""/></NavLink>
                        </div>
                    </div>
            </footer>
        </>
    )
}