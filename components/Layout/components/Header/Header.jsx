import React from "react";

export default function Header(){
    return(
        <header className="position-relative">

        <div className="container-fluid">

            <div className="row">

                <div className="col-md-6">

                    <a className="h-logo" href="#">

                        <img src="images/logo.png" alt="logo" />

                    </a>

                </div>

                <div className="col-md-6">

                    <div className="h-info-box">

                        <div className="h-socalbox">

                            <a className="fa fa-whatsapp" href="#"></a>

                            <a className="fa fa-instagram" href="#"></a>

                            <a className="fa fa-twitter" href="#"></a>

                            <a className="fa fa-facebook" href="#"></a>

                            <a className="fa fa-youtube-play" href="#"></a>

                        </div>

                        <a className="h-num" href="tel:02248931314"><img src="images/icons/fa-phone.png" alt="fa-phone" />02248931314</a>



                    </div>

                </div>

            </div>

        </div>

    </header>
    )
}