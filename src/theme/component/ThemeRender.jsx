import { ChatBox } from "./ChatBox";
import { SideBar } from "./SideBar";
import { SideBarToggle } from "./SidebarToggle";
import "../js/custom";
import { Topbar } from "./TopBar";
import "font-awesome/css/font-awesome.min.css";
import BreadCrumb from "./BreadCrumb";
import { Content } from "./Content";
//import TopbarConfig from "../../json-data/theme-json/TopbarConfig";
//import $ from "jquery"
import { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
//import { UrlProtect } from "../Service/RequestProcessor";
//import { Login } from "./Login";
//import { SignUp } from "./SignUp";
const ThemeRender = (props) => {//

  // console.log("---------------- : " + useLocation())

  const [themeMode, setThemeMode] = useState("light");
  //const [login, setLogin] = useState(false);

  //const [f, setF] = useState("Dashboard");
  //const [s, setS] = useState("dashboard");
  var handleConverterTheme = function (mode) {

    if (mode === "light") {
      setThemeMode("light");
    }
    if (mode === "dark") {
      setThemeMode("dark");
    }

  }
  // console.log("======" + props.sideBarJSON);
  return (
    <>

      <body
        data-typography="poppins"
        data-theme-version={themeMode}
        data-layout="vertical"
        data-nav-headerbg="color_4"
        data-headerbg="color_4"
        data-sidebar-style="full"
        data-sidebarbg="color_1"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-container="wide"
        direction="ltr"
        data-primary="color_1"
        data-secondary="color_1"
      >


        <Router>


          <div id="main-wrapper" className="show">

            <SideBarToggle></SideBarToggle>
            <ChatBox></ChatBox>
            <Topbar data={props.topbarJSON}></Topbar>
            <SideBar themeData={props.sideBarJSON} themeModeFun={handleConverterTheme}></SideBar>



            <div className="content-body jumbotron" style={{ minHeight: "939px" }}>
              <BreadCrumb ></BreadCrumb>
              <div class="container-fluid" style={{boxSizing:"border-box"}}>
                <div class="row">
                  <Content data={props.sideBarJSON}></Content>
                </div>
              </div>
            </div>
          </div>

        </Router >
      </body >


    </>
  );
};

export default ThemeRender;
