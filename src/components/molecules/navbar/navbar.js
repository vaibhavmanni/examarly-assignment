import React, {useEffect, useState} from 'react';
import "./navbar.scss"
import Tab from "../../atoms/tab/tab";
import ProgressBar from "../../atoms/progressbar/progressbar";
import Popup from "../../organisms/popup/popup";
import {navbarConfig} from "../../../static/config";

const Navbar = () => {
    const [popupVisible, setPopupVisible] = useState(1);
    
    useEffect(()=>{
        init();
        return () => {
            terminate();
        }
    }, [])

    const init = () => {
        const scrollContainer = document.querySelector(".examarly-navbar");
        scrollContainer.addEventListener("wheel", e => handleScroll(e, scrollContainer));

        [...document.querySelectorAll('.examarly-tab')].forEach((item) => {
            item.addEventListener('click', () => {
                let getElemWithClass = document.querySelector('.examarly-tab__active');
                if (getElemWithClass !== null) {
                    getElemWithClass.classList.remove('examarly-tab__active');
                }
                item.classList.add('examarly-tab__active')

            })
        });
        [...document.querySelectorAll('.examarly-navbar__item')].forEach((item) => {
            item.addEventListener('click', () => {
                let getElemWithClass = document.querySelector('.examarly-navbar__item__active');
                if (getElemWithClass !== null) {
                    getElemWithClass.classList.remove('examarly-navbar__item__active');
                }
                item.classList.add('examarly-navbar__item__active')

            })
        })
    }

    const terminate = () => {
        const scrollContainer = document.querySelector(".examarly-navbar");
        scrollContainer.removeEventListener("wheel", e => handleScroll(e, scrollContainer));

        [...document.querySelectorAll('.examarly-tab')].forEach((item) => {
            item.removeEventListener('click', () => {
                let getElemWithClass = document.querySelector('.examarly-tab__active');
                if (getElemWithClass !== null) {
                    getElemWithClass.classList.remove('examarly-tab__active');
                }
                item.classList.add('examarly-tab__active')

            })
        });

        [...document.querySelectorAll('.examarly-navbar__item')].forEach((item) => {
            item.addEventListener('click', () => {
                let getElemWithClass = document.querySelector('.examarly-navbar__item__active');
                if (getElemWithClass !== null) {
                    getElemWithClass.classList.remove('examarly-navbar__item__active');
                }
                item.classList.add('examarly-navbar__item__active')

            })
        })

    }

    const handleScroll = (e, container) => {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
    }

    const onTabClick = (e) => {
        const clickedTab = document.querySelector(`#${e.target.id}`);
        clickedTab.scrollIntoView({behavior: "smooth"});

        togglePopup();
    }
    
    const togglePopup = () => {
        setPopupVisible(!popupVisible);
    }

    const childrenTemplate = () => {
        const navItems = [];
        navbarConfig.forEach(({title, percentage}, i) => {
            navItems.push(
                <div className={i===0 ? "examarly-navbar__item examarly-navbar__item__active" : "examarly-navbar__item"}
                    key={title}
                >
                    <Tab children={title} className={i===0 ? "examarly-tab__active " : "" } id={`tab-${title}`} onClick={(e) => onTabClick(e)}/>
                    <ProgressBar progressPercentage={percentage}/>
                </div>
            )
        })
        return navItems
    }

    return (
        <>
            <div className="examarly-navbar">
                {childrenTemplate()}
            </div>
            <Popup popupVisible={popupVisible} togglePopupCallback={()=>togglePopup()}/>
        </>
    );
}

export default Navbar;