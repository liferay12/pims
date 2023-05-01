import React from 'react'
import signUpFormData from "../../json-data/signUp.json"
import Form from '../../library/renderer/FormRenderer';
import toast from 'react-hot-toast';
export const SignUp = () => {
    const submitFunc = (event) => {
        console.log("Sign up......")
        console.log(event);
        toast.success('Successfully toasted!')
    }
    return (
        <div className="browse-job login-style3">

            <div className="bg-img-fix overflow-hidden" style={{ background: "#fff url(images/background/bg6.jpg)", height: "auto" }}>
                <div className="row gx-0">
                    <div className=" col-xl-6 col-lg-5 col-md-6 col-sm-12  bg-white ">
                        <div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ height: "auto", tabindex: "0" }}>
                            <div id="mCSB_1_container" className="mCSB_container" style={{ position: "relative", top: "0", left: "0", dir: "ltr" }}>
                                <div className="login-form style-2">
                                    <div className="card-body">
                                        <div className="logo-header">
                                            <a href="https://w3crm.dexignzone.com/xhtml/index.html" className="logo"><img src="../images/logo-full.png" alt="" className="width-230 light-logo" /></a>
                                            <a href="https://w3crm.dexignzone.com/xhtml/index.html" className="logo"><img src="../images/logofull-white.png" alt="" className="width-230 dark-logo" /></a>
                                        </div>

                                        <nav>
                                            <div className="p-4 nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">

                                                <div className="tab-content w-100" id="nav-tabContent">
                                                    <div className="tab-pane fade show active " id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab">
                                                        {/* <form className="dz-form py-2"> */}
                                                        {/* <h3 className="form-title">Sign Up</h3>
                                                            <div className="dz-separator-outer m-b5">
                                                                <div className="dz-separator bg-primary style-liner"></div>
                                                            </div>
                                                            <p>Enter your personal details below: </p> */}
                                                        <div className="form-group mt-3">
                                                            <Form formObject={signUpFormData} submit={(event) => submitFunc(event)} />
                                                        </div>
                                                        {/* <div className="form-group mt-3">
                                                                <input name="dzName" required="" className="form-control" placeholder="User Name" type="text" />
                                                            </div>
                                                            <div className="form-group mt-3">
                                                                <input name="dzName" required="" className="form-control" placeholder="Email Address" type="text" />
                                                            </div>

                                                            <div className="form-group mt-3">
                                                                <input name="dzName" required="" className="form-control" placeholder="Password" type="password" />
                                                            </div>
                                                            <div className="form-group mt-3 mb-3">
                                                                <input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="password" />
                                                            </div> */}

                                                        {/* <div className="form-group clearfix text-left">

                                                                <button className="btn btn-primary float-end">Submit</button>
                                                            </div> */}
                                                        {/* </form> */}
                                                    </div>


                                                </div>

                                            </div>
                                        </nav>
                                    </div>


                                </div>
                            </div>
                            <div id="mCSB_1_scrollbar_vertical" className="mCSB_scrollTools mCSB_1_scrollbar mCS-light mCSB_scrollTools_vertical" style={{ display: "block" }}>
                                <div className="mCSB_draggerContainer">
                                    {/*<div id="mCSB_1_dragger_vertical" className="mCSB_dragger" style={{position: "absolute", minHheight: "0px", display: "block", height: "652px", maxHheight: "643px", top: "0px"}}>
								 <div className="mCSB_dragger_bar" style={{lineHeight: "0px"}}></div> */}
                                    <div className="mCSB_draggerRail"></div>
                                </div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
