// import "../style.css"
import {NavLink} from "react-router-dom"
export default function Header() {
    return (
                <section>
            <header>
                <nav class="flex">
                    <p class="center" id="image">FREE Shipping for all orders above $40! 📦</p>
                    <button onclick="darkMood()"><i id="sheet" class="fa-solid fa-moon"></i></button>
                    <button onclick="lightMood()"><i id="sheet" class="fa-solid fa-sun"></i></button>

                </nav>
                <div id="header" class="header page-width flex gap-40px">
                    <div class="header-content-left">
                        <ul class="flex gap-30px">
                            <li><NavLink to="/">Home
                                    <span>
                                        <svg class="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.75L7 6.75L13 0.75" stroke="#22282A" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </NavLink>
                            </li>
                            <li><NavLink to="#">Shop For Bunnis
                                    <span>
                                        <svg class="arrow" width="14" height="8" viewBox="0 0 14 8" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 0.75L7 6.75L13 0.75" stroke="#22282A" stroke-width="1.5"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </NavLink>
                            </li>
                            <li><NavLink to="/About">About</NavLink></li>
                            <li><NavLink to="#">Blogs</NavLink></li>
                        </ul>
                    </div>
                    <div class="header-content flex">
                        <img src="./images-bunny/dual bunny logo.png" id="myImage" alt="Bunny" height="80%" width="100%"/>
                    </div>
                    <div class="header-content-right">
                        <ul class="flex gap-30px">
                            <li><NavLink to="#">Help</NavLink></li>
                            <li><NavLink to="#">Forrum</NavLink></li>
                            <li><NavLink to="#">cerrier</NavLink></li>
                            <li>
                                <NavLink to="#"><img src="./images-bunny/search.png" alt="search" height="100%"
                                        width="100%"/></NavLink>
                            </li>
                            <li>
                                <NavLink to="#"><img src="./images-bunny/user 1.png" alt="account" height="100%"
                                        width="100%"/></NavLink>
                            </li>
                            <li>
                                <NavLink to="#"><img src="./images-bunny/cart.png" alt="cart" height="100%" width="100%"/></NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="hem-burger">
                        <img src="./images-bunny/menu.png" alt="menu" height="100%" width="100%"/>
                    </div>
                </div>
            </header>
        </section>

    )
}