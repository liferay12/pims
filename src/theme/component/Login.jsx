import axios from "axios";
// import login from "src\json-data\login.json"
import loginForm from "../../json-data/login.json"
import Form from "../../library/renderer/FormRenderer";
import toast from 'react-hot-toast';
import bg6 from '../images/bg6.jpg';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'
export const Login = (props) => {
	const navigate = useNavigate();
	console.log(loginForm)

	const submitFunc = (event) => {

		localStorage.setItem("isLogin", true);
		let isLogin = localStorage.getItem("isLogin");
		toast.success("You have been Succesfully logged in !")
		navigate("/login")

	}
	useEffect(() => {
		let isLogin = localStorage.getItem("isLogin");
		if (isLogin) {
			navigate("/")
		}

	});

	const emailHandler = (e) => {
		console.log("-113122312301p9p" + e.target.value);
		localStorage.setItem("email", e.target.value);
	}
	return (
		// 	<body class="vh-100" data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_4" data-headerbg="color_4" data-sidebar-style="full" data-sidebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1" data-secondary="color_1">
		// <div class="page-wraper">
		<div className="browse-job login-style3" style={{
			left: "0",
			position: "fixed",
			top: "0",
			zIndex: "999",
			width: "-webkit-fill-available",
			width: "inherit"
		}}>

			<div className="bg-img-fix overflow-hidden" style={{ background: "#fff", backgroundImage: `url(${bg6})`, height: "100vh" }}>
				<div className="row gx-0">
					<div className=" col-xl-6 col-lg-5 col-md-6 col-sm-12 offset-3 vh-100  ">
						<div id="mCSB_1" className="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside" style={{ maxHeight: "653px" }} tabindex="0">
							<div id="mCSB_1_container" className="mCSB_container" style={{ position: "relative", top: "0", left: "0", dir: "ltr" }}>
								<div className="login-form style-2">
									<div className="card-body">
										<div className="logo-header">
											{/* <a href="https://w3crm.dexignzone.com/xhtml/index.html" className="logo"><img src={require("../images/logo-full.png")} alt="" className="width-230 light-logo" /></a> */}
											{/* <a href="https://w3crm.dexignzone.com/xhtml/index.html" className="logo"><img src={require("../images/logofull-white.png")} alt="" className="width-230 dark-logo" /></a> */}
										</div>

										<nav>
											<div className="p-4 nav nav-tabs border-bottom-0" id="nav-tab" role="tablist">

												<div className="tab-content w-100" id="nav-tabContent">
													<div className="tab-pane fade show active" id="nav-personal" role="tabpanel" aria-labelledby="nav-personal-tab">
														{/* <form onSubmit={formSumit} className=" dz-form pb-3"> */}
														{/* <h3 className="form-title m-t0">Login</h3>
															<div className="dz-separator-outer m-b5">
																<div className="dz-separator bg-primary style-liner"></div>
															</div>
															<p>Enter your e-mail address and your password. </p> */}
														{/* <div className="form-group mb-3">
																<Form formObject={loginForm} submit={(event) => submitFunc(event)} />
															</div>
															 */}

														<form onSubmit={submitFunc} className="dz-form py-2">
															<h3 className="form-title">Login</h3>
															<div className="dz-separator-outer m-b5">
																<div className="dz-separator bg-primary style-liner"></div>
															</div>
															<p>Enter your Credential below: </p>
															<div className="form-group mt-3">
																<input name="dzName" required="" className="form-control" placeholder="Email" type="email" onBlur={emailHandler} />
															</div>


															<div className="form-group mt-3">
																<input name="dzName" required="" className="form-control" placeholder="Password" type="password" />
															</div>


															<div className="form-group clearfix text-left mt-4">

																<button type="submit" className="btn btn-primary float-end">Login</button>
															</div>
														</form>



														{/* <div className="text-center bottom">
																<button className="btn btn-primary button-md btn-block" id="nav-sign-tab" type="submit" role="tab" aria-controls="nav-sign" aria-selected="false" tabindex="-1">login</button>

															</div> */}
														{/* </form> */}
													</div>

													{/* <div className="tab-pane fade" id="nav-sign" role="tabpanel" aria-labelledby="nav-sign-tab">
														<form className="dz-form py-2">
															<h3 className="form-title">Sign Up</h3>
															<div className="dz-separator-outer m-b5">
																<div className="dz-separator bg-primary style-liner"></div>
															</div>
															<p>Enter your personal details below: </p>
															<div className="form-group mt-3">
																<input name="dzName" required="" className="form-control" placeholder="Full Name" type="text" />
															</div>
															<div className="form-group mt-3">
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
															</div>
															<div className="mb-3">
																<span className="form-check float-start me-2 ">
																	<input type="checkbox" className="form-check-input" id="check2" name="example1" />
																	<label className="form-check-label d-unset" for="check2">I agree to the</label>
																</span>
																<label><a href="https://w3crm.dexignzone.com/xhtml/page-login.html#">Terms of Service </a>&amp; <a href="https://w3crm.dexignzone.com/xhtml/page-login.html#">Privacy Policy</a></label>
															</div>
															<div className="form-group clearfix text-left">
																<button className="btn btn-primary outline gray" data-bs-toggle="tab" data-bs-target="#nav-personal" type="button" role="tab" aria-controls="nav-personal" aria-selected="false" tabindex="-1">Back</button>
																<button className="btn btn-primary float-end">Submit</button>
															</div>
														</form>

													</div> */}
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
		// </div></body>
	);
}