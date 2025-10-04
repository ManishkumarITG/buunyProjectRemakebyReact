export default function Home() {
    return (
        <>
            <section>
                <div className="banner-wrapper flex-col ">
                    <div className="banner">
                        <img src="./Bunny-shop/src/components/images-bunny/banner-background.jpg" alt="background pic" height="100%" width="100%"
                            className="pic-for-lrg-scr" />
                        <img src="./Bunny-shop/src/components/images-bunny/error1.png" alt="background pic" height="100%" width="100%"
                            className="pic-for-sml-scr" />
                    </div>  
                    {/* <div className="banner-content">
                        <div className="page-width">
                            <div className="banner-inner ">
                                <div className="banner-text flex-col gap-15px">
                                    <div className="paragraph">
                                        <p>Take Your Guinea Pigs' Home to New Heights</p>
                                    </div>
                                    <div className="banner-heading">
                                        <h2 className="h1">GuineaDad ❤️ BunnyDad</h2>
                                    </div>
                                    <div className="banner-buttons">
                                        <a to="#" className="primary-button">Explore now</a>
                                        <a to="#" className="secandary-button">Order Your</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div> 
                    </div>*/}
                </div>
            </section>


            <section>
                <div className="section-of-autoship">
                    <div className="autoship-wrapper center gap-20px flex-col page-width">
                        <h2 className="std-39px center">Autoship & Save!</h2>
                        <p className="center">Keep your guinea pigs happy with essential hay and treats delivered monthly.</p>
                        <a to="#" className="primary-button center">Shop Here</a>
                    </div>
                </div>

            </section>


            <section>
                <div className="product-wrapper flex-col gap-40px">
                    <div className="title">
                        <h2 className="std-39px center"> Our Products</h2>
                    </div>
                    <div className="product-card-wrapper flex gap-30px ">
                        <div className="product-card product-card--gone flex-col gap-20px">
                            <div className="product-image">
                                <img src="./Bunny-shop/src/components/images-bunny/product1.png" alt="Product-one" height="100%" width="100%" />
                            </div>
                            <div className="product-card--bottom flex gap-20px">
                                <div className="product-details gap-10px flex-col">
                                    <p className="bold center">Your Product Title Here</p>
                                    <p className=" "> <del className="bold">$40.00</del> <span className="gray">$18.00</span></p>
                                </div>
                                <div className="card-button">
                                    <a to="#" className="secandary-button center"> Add</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-card product-card--gone flex-col gap-20px">
                            <div className="product-image">
                                <img src="./Bunny-shop/src/components/images-bunny/product2.png" alt="Product-one" height="100%" width="100%" />
                            </div>
                            <div className="product-card--bottom flex gap-20px">
                                <div className="product-details gap-10px flex-col">
                                    <p className="bold center">Your Product Title Here</p>
                                    <p className=" "> <del className="bold">$40.00</del> <span className="gray">$18.00</span></p>
                                </div>
                                <div className="card-button">
                                    <a to="#" className="secandary-button center"> Add</a>
                                </div>
                            </div>
                        </div>
                        <div className="product-card flex-col gap-20px">
                            <div className="product-image">
                                <img src="./Bunny-shop/src/components/images-bunny/product3.png" alt="Product-one" height="100%" width="100%" />
                            </div>
                            <div className="product-card--bottom flex gap-20px">
                                <div className="product-details gap-10px flex-col">
                                    <p className="bold center">Your Product Title Here</p>
                                    <p className=" "> <del className="bold">$40.00</del> <span className="gray">$18.00</span></p>
                                </div>
                                <div className="card-button">
                                    <a to="#" className="secandary-button center"> Add</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="community-wrapper gap-40px  flex-col">
                    <div className="community-wrapper--upper gap-40px flex-col">
                        <h2 className="std-39px center">We Proudly Give Back To Our Community!</h2>
                        <p className="community-line center">GuineaDad volunteers and donates to non-profit organizations
                            dedicated to helping the small animals in need. We believe that by working together, we can
                            build a strong community to last a lifetime! Here are some of our partners:
                        </p>
                    </div>
                    <div className="community-wrapper--bottom flex gap-40px">
                        <div className="community-image flex gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/com-image-1.png" alt="community site one" />
                        </div>
                        <div className="community-image flex gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/com-image-2.png" alt="community site two" />
                        </div>
                        <div className="community-image flex gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/com-image-3.png" alt="community site three" />
                        </div>
                        <div className="community-image flex gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/com-image-4.png" alt="community site four" />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="sleeping-bunny-image-with-text-wrapper flex reversed">
                    <div className="sleeping-bunny-text-container ">
                        <div className="sleeping-bunny-text-wrapper ">
                            <h2 className="std-39px center">To some we’re overdoing it, but we’re just trying to do things the
                                right way.</h2>
                            <p className="center">GuineaDad products range from #1 guinea pig fleece liners to the top-selling
                                hay and treats. We are the one stop shop for all Piggie products. GuineaDad is where you can
                                get the highest quality line of the best guinea pig products.</p>
                            <div className="sleeping-bunny-button gap-20px">
                                <a to="#" className="third-button center">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="sleeping-bunny-image-container">
                        <img src="./Bunny-shop/src/components/images-bunny/sleeping-bunny.png" alt="sleeping bunny" height="100%" width="100%" />
                    </div>
                </div>
            </section>

            <section>
                <div className="sleeping-bunny-image-with-text-wrapper flex ">
                    <div className="sleeping-bunny-image-container">
                        <img src="./Bunny-shop/src/components/images-bunny/playing-bunny.png" alt="sleeping bunny" height="100%" width="100%" />
                    </div>
                    <div className="sleeping-bunny-text-container ">
                        <div className="sleeping-bunny-text-wrapper-down ">
                            <h2 className="std-39px center">Our Stories</h2>
                            <p className="center"> GuineaDad products range from #1 guinea pig fleece liners to the top-selling
                                hay and treats. We are the one stop shop for all piggie products. GuineaDad is where you can
                                get the highest quality line of the best guinea pig products.
                            </p>
                            <div className="sleeping-bunny-button gap-20px">
                                <a to="#" className="third-button center">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-with-categories flex-col gap-40px">
                    <div className="categories-title">
                        <h2 className="std-39px center">Top Categories</h2>
                    </div>
                    <div className="categories-card-wrapper gap-40px">
                        <div className="categories-card flex-col gap-15px">
                            <div className="categories-image">
                                <img src="./Bunny-shop/src/components/images-bunny/error1.png" alt="habitade" height="100%" width="100%" />
                            </div>
                            <div className="categories-title">
                                <p className="center bold cat">Cages and Habbitade</p>
                            </div>
                        </div>
                        <div className="categories-card flex-col gap-15px">
                            <div className="categories-image">
                                <img src="./Bunny-shop/src/components/images-bunny/error2.png" alt="food" height="100%" width="100%" />
                            </div>
                            <div className="categories-title">
                                <p className="center bold cat">Hay and Treats</p>
                            </div>
                        </div>
                        <div className="categories-card flex-col gap-15px">
                            <div className="categories-image">
                                <img src="./Bunny-shop/src/components/images-bunny/error3.png" alt="Hidey and Toys" height="100%" width="100%" />
                            </div>
                            <div className="categories-title">
                                <p className="center bold cat">Hidey and Toys</p>
                            </div>
                        </div>
                        <div className="categories-card flex-col gap-15px">
                            <div className="categories-image">
                                <img src="./Bunny-shop/src/components/images-bunny/error4.png" alt="Guinea Pigs" height="100%" width="100%" />
                            </div>
                            <div className="categories-title">
                                <p className="center bold cat">Guinea Pigs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="section-with-guineadad-image-and-text flex">
                    <div className="section-with-guineadad-image-and-text-wrapper flex">
                        <div className="section-with-guineadad-text--container">
                            <div className="section-with-guineadad-text-wrapper flex-col gap-15px">
                                <h1 className="white std-39px">GuineaDad Forum</h1>
                                <p className="white bold">Be part of the new and trendy guinea pig community where all guinea
                                    pig lovers and experts hang out!</p>
                                <a to="#" className="third-button">Inter Now</a>
                            </div>
                        </div>
                        <div className="section-with-guineada./Bunny-shop/src/components-images">
                            <img src="./Bunny-shop/src/components/images-bunny/GuineaDad.png" alt="GuineaDad" height="100%" className="guneadad-image"
                                width="100%" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="multioption">
                    <div className="multioption-container flex-col gap-40px">
                        <div className="multioption-title">
                            <h2 className="std-39px"> Purchase with Confidence</h2>
                        </div>
                        <div className="multioption-wrapper gap-30px">
                            <div className="multioption-card flex-col">
                                <div className="multioption-card-image">
                                    <span>
                                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M33 19.3L15 8.92004" stroke="#22282A" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path
                                                d="M42 32.5V16.5C41.9993 15.7986 41.8141 15.1097 41.4631 14.5024C41.112 13.8951 40.6075 13.3908 40 13.04L26 5.04005C25.3919 4.68898 24.7021 4.50415 24 4.50415C23.2979 4.50415 22.6081 4.68898 22 5.04005L8 13.04C7.39253 13.3908 6.88796 13.8951 6.53692 14.5024C6.18589 15.1097 6.00072 15.7986 6 16.5V32.5C6.00072 33.2015 6.18589 33.8904 6.53692 34.4977C6.88796 35.105 7.39253 35.6093 8 35.96L22 43.96C22.6081 44.3111 23.2979 44.4959 24 44.4959C24.7021 44.4959 25.3919 44.3111 26 43.96L40 35.96C40.6075 35.6093 41.112 35.105 41.4631 34.4977C41.8141 33.8904 41.9993 33.2015 42 32.5Z"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M6.53998 14.42L24 24.52L41.46 14.42" stroke="#22282A" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24 44.66V24.5" stroke="#22282A" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="center cat bold"> Free Shipping</p>
                                <p className="center"> We deliver in 48 hours max! </p>
                            </div>
                            <div className="multioption-card flex-col">
                                <div className="multioption-card-image">
                                    <span>
                                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M32.6667 14.5C32.6667 12.3783 31.8238 10.3434 30.3235 8.84315C28.8232 7.34285 26.7884 6.5 24.6667 6.5C22.5449 6.5 20.5101 7.34285 19.0098 8.84315C17.5095 10.3434 16.6667 12.3783 16.6667 14.5M4.66666 20.5H44.6667L36.6667 42.5H12.6667L4.66666 20.5Z"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="center cat bold"> Satisfied and Refunded</p>
                                <p className="center"> Free returns within 14 days</p>
                            </div>
                            <div className="multioption-card flex-col">
                                <div className="multioption-card-image">
                                    <span>
                                        <svg width="49" height="49" viewBox="0 0 49 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M40.3333 42.5V38.5C40.3333 36.3783 39.4905 34.3434 37.9902 32.8431C36.4899 31.3429 34.455 30.5 32.3333 30.5H16.3333C14.2116 30.5 12.1767 31.3429 10.6765 32.8431C9.17617 34.3434 8.33331 36.3783 8.33331 38.5V42.5"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="square"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M24.3333 22.5C28.7516 22.5 32.3333 18.9183 32.3333 14.5C32.3333 10.0817 28.7516 6.5 24.3333 6.5C19.915 6.5 16.3333 10.0817 16.3333 14.5C16.3333 18.9183 19.915 22.5 24.3333 22.5Z"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="center cat bold"> We are available 24/7</p>
                                <p className="center"> Chat, mail, phone.! </p>
                            </div>
                            <div className="multioption-card flex-col">
                                <div className="multioption-card-image">
                                    <span>
                                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M38 22.5H10C7.79086 22.5 6 24.2909 6 26.5V40.5C6 42.7091 7.79086 44.5 10 44.5H38C40.2091 44.5 42 42.7091 42 40.5V26.5C42 24.2909 40.2091 22.5 38 22.5Z"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M14 22.5V14.5C14 11.8478 15.0536 9.3043 16.9289 7.42893C18.8043 5.55357 21.3478 4.5 24 4.5C26.6522 4.5 29.1957 5.55357 31.0711 7.42893C32.9464 9.3043 34 11.8478 34 14.5V22.5"
                                                stroke="#22282A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <p className="center cat bold"> We accept</p>
                                <p className="center"> Visa, Mastercard, Amex, PayPal </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="review-wrapper flex-col gap-40px">
                    <div className="review-title flex-col gap-20px">
                        <h2 className="std-39px center"> The Feedback Is In!</h2>
                        <img src="./Bunny-shop/src/components/images-bunny/star reveiw.png" alt="whole ratting" height="22px" width="257px" />
                    </div>
                    <div className="review-card-holder flex gap-30px">
                        <div className="review-card flex-col gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/review1.png" alt="user 1" height="80px" className="reveiw-image"
                                width="80px" />
                            <img src="./Bunny-shop/src/components/images-bunny/Star.png" alt="ratting" height="22px" width="131px" />
                            <p className="center"> This is the best liner I've used. I only use Guinea dad now. Worth the price.
                                Will purchase
                                more </p>
                            <p className="cat bold name"> Amber M.</p>
                            <p>17/06/2025</p>
                        </div>
                        <div className="review-card flex-col gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/review2.png" alt="user 1" height="80px" className="reveiw-image"
                                width="80px" />
                            <img src="./Bunny-shop/src/components/images-bunny/Star.png" alt="ratting" height="22px" width="131px" />
                            <p className="center"> This is the best liner I've used. I only use Guinea dad now. Worth the price.
                                Will purchase
                                more </p>
                            <p className="cat bold name"> Kyalkin c</p>
                            <p>17/06/2025</p>
                        </div>
                        <div className="review-card flex-col gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/review3.png" alt="user 1" className="reveiw-image" height="80px"
                                width="80px" />
                            <img src="./Bunny-shop/src/components/images-bunny/Star.png" alt="ratting" height="22px" width="131px" />
                            <p className="center"> This is the best liner I've used. I only use Guinea dad now. Worth the price.
                                Will purchase
                                more </p>
                            <p className="cat bold name"> Samanth G</p>
                            <p>17/06/2025</p>
                        </div>
                        <div className="review-card flex-col gap-30px">
                            <img src="./Bunny-shop/src/components/images-bunny/review3.png" alt="user 1" height="80px" className="reveiw-image"
                                width="80px" />
                            <img src="./Bunny-shop/src/components/images-bunny/Star.png" alt="ratting" height="22px" width="131px" />
                            <p className="center"> This is the best liner I've used. I only use Guinea dad now. Worth the price.
                                Will purchase
                                more </p>
                            <p className="cat bold name"> Stive m</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="instagram-feed flex gap-30px">
                    <div className="account-detials">
                        <h2 className="std-39px">Follow Us</h2>
                        <p className="cat bold">@guineadad</p>
                    </div>
                    <div className="instagram-posts">
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post1.png " alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post2.png" alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post3.png" alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post4.png" alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post5.png" alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                        <div className="insta-pics">
                            <a to="#"><img src="./Bunny-shop/src/components/images-bunny/insta-post6.png" alt="instagram-posts" height="100%"
                                width="100%" /></a>
                        </div>
                    </div>
                </div>
            </section>
            </>
        )
    }