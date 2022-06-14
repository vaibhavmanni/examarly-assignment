import React from 'react';
import "./popup.scss";
import Button from "../../atoms/button/button";
import ProgressBar from "../../atoms/progressbar/progressbar";
import cross from "../../../assets/Icon ionic-ios-close.svg"
import {bannerConfig} from "../../../static/config";

function Popup(props) {

    const bannerTemplate = () => {

        return(
            <div className="examarly-popup__banner">
                {bannerConfig.map(({heading, percentage})=>{
                    return (
                        <div className="examarly-popup__banner__item"
                            key={heading}
                        >
                            <h1>{heading}</h1>
                            <ProgressBar progressPercentage={percentage}/>
                        </div>
                    )
                })}
            </div>
        )
    }

    const togglePopup = () => {
        props.togglePopupCallback()
    }

    return (
        <div className="examarly-popup-wrapper" style={{display: props.popupVisible ? "flex": "none"}}>
            <div className="examarly-popup">
                <img src={cross} alt="close-icon" onClick={()=>togglePopup()}/>
                <h1>Strength Bar</h1>
                <span>Introducing strength bar to help you know your week subjects.</span>
                {bannerTemplate()}
                <Button onClick={()=>togglePopup()}>Finish</Button>
            </div>
        </div>
    );
}

export default Popup;