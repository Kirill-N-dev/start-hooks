import React from "react";
import PropTypes from "prop-types";
import Card from "../common/Card";

// HOC:
const withFunctions = (SimpleComponent) => () => {
    // Функции для передачи в SimpleComponent ниже
    const onLogin = () => {
        localStorage.setItem("auth", true);
    };
    //
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    //

    return (
        <Card>
            <SimpleComponent
                isAuth={!!localStorage.getItem("auth")}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </Card>
    );
};

withFunctions.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default withFunctions;
