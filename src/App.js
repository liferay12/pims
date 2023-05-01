//import logo from './logo.svg';
import './App.css';
//import $ from "jquery";
import ThemeRender from "./theme/component/ThemeRender";
import sideNavJSON from "./json-data/theme-json/LeftNavigation";
//import { useEffect } from "react";
//import { W3Crm } from "./theme/js/custom";
import { EmailService } from "./theme/Service/EmailService";
//import Home from "./component/Home";
import topbarJSON from "./json-data/theme-json/TopbarConfig"

import toast, { Toaster } from 'react-hot-toast';

export const settings = {
  /* [..] Other settings */
  functionName: 'clickedOnItem'
  /* , [..] More settings */
};



function App() {
  EmailService.email = localStorage.getItem("email");
  EmailService.name = "Ashwani rao";
  const notify = () => toast.success('Here is your toast.');


  var fnstring = "func()";
  var fn = window[fnstring];
  if (typeof fnstring === "function") {
    fn("Ashwani");
  }

  function func(a) {
    alert(a)
  }

  return (

    <>

      <Toaster position="left" reverseOrder={false} />
      <ThemeRender sideBarJSON={sideNavJSON} topbarJSON={topbarJSON}></ThemeRender>;

    </>

  );
}

export default App;
