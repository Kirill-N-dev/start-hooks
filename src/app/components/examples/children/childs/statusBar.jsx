import React from "react";
/* import "./styles.css"; */
import PropTypes from "prop-types";
import StatusItem from "./statusItem";

const StatusBar = ({ children, value }) => {
    console.log(children);
    return (
        <div>
            <div className="wrapper">
                <ul className="step-progress">
                    {React.Children.map(children, (child) => {
                        if (child.type === StatusItem) {
                            return child;
                        }
                        return null;
                    })}
                </ul>
            </div>
        </div>
    );
};

StatusBar.propTypes = {
    children: PropTypes.array,
    value: PropTypes.number
};

export default StatusBar;
