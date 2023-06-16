import React from "react";
import PropTypes from "prop-types";
import WithFunctions from "./withFunctions";

// Макс! В задании сказано, что нижний - "принимает в себя", но не сказано, что всё это надо передавать,
// я же не передал в строке 11, так как это не нужно для функционала. Если я всё правильно понимаю, что не факт
const SimpleComponent = ({ onLogin, onLogOut, isAuth, onClick, text }) => {
    // Установка HOC
    const HOC = WithFunctions(SimpleComponent);
    //
    return <HOC text={text} onClick={onClick} />;
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default SimpleComponent;
