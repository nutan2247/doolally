import React from "react";

export default function SectionHead() {
    return (
        <section className="hero-panel">

        <div className="container-fluid">

            <div className="row justify-content-center align-items-center">

                <div className="col-sm-12 col-md-6 col-lg-6 my-md-3 mb-2 mb-lg-0">

                    <div className="tab-header text-center d-flex d-md-block">

                        <a href="#" className="event_active"><span><img src="images/icons/event-tabicon.png" alt="tabicon" /></span>Events</a>

                        <a href="#" className=""><span><img src="images/icons/tab-fnbicon.png" /></span>fnb</a>

                    </div>

                </div>

                <div className="col-md-12">

                    <form action="">

                        <div className="row justify-content-center">

                            <div className="col-sm-12 col-md-9">

                                <div className="serachbar poppins">

                                    <input className="form-control" type="text" placeholder="Search for event, beer &amp; delicious food " name="search" />

                                    <button type="submit"><img src="images/icons/search-icon.png" alt="search-icon" /></button>



                                </div>

                            </div>



                        </div>

                    </form>

                </div>




            </div>

        </div>

    </section>
    )
}