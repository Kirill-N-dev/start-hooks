import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    // Реализация обновления кнопки после перезагрузки страницы
    const handleClick = () => (isAuth ? onLogOut() : onLogin());
    //
    return (
        <>
            <label htmlFor="ppp">Кнопка, реализованная HOC:</label>
            <div>
                <button
                    className="btn btn-primary"
                    style={{ width: 200, height: 80 }}
                    onClick={handleClick}
                    id="ppp"
                >
                    {isAuth ? "Выйти из системы" : "Войти"}
                </button>
            </div>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
