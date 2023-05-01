import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import $ from "jquery";
import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BreadCrumb from './BreadCrumb';


export const SideBar = (props) => {

    const windowWidth = useRef(window.innerWidth);




    let [width, setWidth] = useState(windowWidth.current);
    // let [preDropdown, SetPreDropdown] = useState("");
    let preDropdown = "";
    var handleMenuPosition = function (value) {
        console.log("value", value)
        $("#" + value).toggle();
    };
    useEffect(() => {
        const resizeListener = () => {
            // change width from the state object
            setWidth(window.innerWidth.current)
            console.log("change width from the state object" + width);
            console.log("current width : " + window.innerWidth.current)
            let screenWidth = width;
            if (screenWidth > 1024) {
                // if ($('ul', this).length > 0) {
                var elm = $('ul:first', this).css('display', 'block');
                var off = elm.offset();
                var l = off.left;
                var w = elm.width();
                elm = $('ul:first', this).removeAttr('style');
                //var docH = $("body").height();
                var docW = $("body").width();

                if ($('html').hasClass('rtl')) {
                    var isEntirelyVisible = (l + w <= docW);
                } else {
                    isEntirelyVisible = (l > 0) ? true : false;
                }

                if (!isEntirelyVisible) {
                    $(this).find('ul:first').addClass('left');
                } else {
                    $(this).find('ul:first').removeClass('left');
                }
                // }
            }
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);
        console.log("change width " + width);
        // clean up function

        console.log("current width : " + window.innerWidth)
        let screenWidth = width;

        if (screenWidth <= 991) {
            $('#main-wrapper').toggleClass("menu-toggle");

            $(".hamburger").toggleClass("is-active");
        }
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        }
    }, [])




    return (
        <div className="deznav ">

            <div className="deznav-scroll mm-active">
                <ul className="metismenu mm-show" >
                    {
                        props.themeData.map((section, i) =>
                            <>
                                <li className="menu-title" key={section.title} >{section.title}</li>
                                {
                                    section.option.map((item, j) =>
                                        <>
                                            {
                                                item.subItem.length != 0 ?
                                                    (

                                                        <li className="" key={item.name}>
                                                            <NavLink className="has-arrow " id="item" onClick={() => handleMenuPosition(item.name)} to="#" aria-expanded="false" >
                                                                <div className="menu-icon">
                                                                    {item.icon}
                                                                </div>
                                                                <span className="nav-text">{item.name}</span>
                                                            </NavLink>
                                                            {console.log(j)}
                                                            <ul aria-expanded="false" id={item.name} className="dropright" Style="display: none;">
                                                                {
                                                                    item.subItem.map((subItem) =>
                                                                        <>
                                                                            {
                                                                                (subItem.path === "/light") ? <li className=""><NavLink to='#' className="toggle" onClick={() => { props.themeModeFun("light") }} >{subItem.name}</NavLink></li>
                                                                                    : subItem.path === "/dark" ? <li className="toggle"><NavLink to='#' className="" onClick={() => { props.themeModeFun("dark") }} >{subItem.name}</NavLink></li>
                                                                                        : <li className="toggle"><NavLink to={subItem.path} className="" >{subItem.name}</NavLink></li>
                                                                            }

                                                                        </>
                                                                    )
                                                                }
                                                                {/* <li><NavLink to={item.path}>Dashboard Dark</NavLink></li> */}
                                                            </ul>
                                                        </li>
                                                    ) :
                                                    (
                                                        <li key={item.name}><NavLink to={item.path} className="" aria-expanded="false">
                                                            <div className="menu-icon">
                                                                {item.icon}
                                                            </div>
                                                            <span className="nav-text">{item.name}</span>
                                                        </NavLink>
                                                        </li>
                                                    )

                                            }

                                        </>
                                    )
                                }



                            </>
                        )
                    }

                </ul>
            </div>
        </div>
    );
}