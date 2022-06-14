import React from 'react';
import "./progressbar.scss"
import {PROGRESS_BAR_WEAK, PROGRESS_BAR_IMPROVEMENT,PROGRESS_BAR_AVERAGE, PROGRESS_BAR_CUTTOFF} from "../../../static/strings";

const ProgressBar = ({
    className,
    onClick,
    progressPercentage,
    ...rest
}) => {

    const getBackgroundColor = (percentage) => {
        switch (true) {
            case percentage <= 33:
                return PROGRESS_BAR_WEAK;
            case percentage <= 66:
                return PROGRESS_BAR_IMPROVEMENT;
            case percentage <= 83:
                return PROGRESS_BAR_AVERAGE;
            case percentage <= 100:
                return PROGRESS_BAR_CUTTOFF;
            default:
                return PROGRESS_BAR_CUTTOFF;
        }
    }

    return (
        <div
            onClick={onClick}
            className={`examarly-progressbar`}
            {...rest}
        >
            <div
                className={`examarly-progressbar__inner`}
                style={{
                    width: progressPercentage < 0 ? 0 : progressPercentage > 100 ? "100%" : `${progressPercentage}%`,
                    backgroundColor: `${getBackgroundColor(progressPercentage)}`
                }}
            />
        </div>
    );

}

export default ProgressBar;
