import React from "react";
/* import "./styles.css"; */
import PropTypes from "prop-types";

const StatusItem = ({ children, isDone, value }) => {
    /* console.log(children); */ // 2 раза выводятся стринги, равные тексту в подпунктах StatusItem
    return (
        <div className="step-progress-item is-done">
            <strong>{children}</strong>
        </div>
    );
};

StatusItem.propTypes = {
    children: PropTypes.string,
    isDone: PropTypes.bool,
    value: PropTypes.number
};

export default StatusItem;
