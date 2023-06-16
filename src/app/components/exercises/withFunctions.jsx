import React, { useState } from "react";
import PropTypes from "prop-types";

const withLogin = (SimpleComponent) => (/* { text, onClick } */) => {
    let isAuth = localStorage.getItem("auth");
    // Функции для ДЗ по ХОК
    /* const [authStatus, setAuthStatus] = useState(false); */
    const [text, setText] = useState("Войти");
    //
    const onLogin = () => {
        /* setAuthStatus(true); */
        isAuth = localStorage.setItem("auth", true);
        setText("Выйти из системы");
    };
    //
    const onLogOut = () => {
        /* setAuthStatus(false); */
        isAuth = localStorage.removeItem("auth");
        setText("Войти");
    };
    //

    const handleClick = () => {
        if (isAuth === null) onLogin();
        else onLogOut();
    };
    //

    return (
        <>
            <label htmlFor="ppp">
                Кнопка, реализованная простыми кликами и стейтами в родителе:
            </label>
            <div>
                <button
                    className="btn btn-primary"
                    style={{ width: 200, height: 80 }}
                    onClick={handleClick}
                    id="ppp"
                >
                    {text}
                </button>
            </div>
        </>
    );
};

withLogin.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default withLogin;
