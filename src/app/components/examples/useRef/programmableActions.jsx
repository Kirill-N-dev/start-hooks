import React, { useRef } from "react";

export const ExampleBGCInput = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.style.background = "seagreen";
        console.log("смена цвета");
    };

    return (
        <div>
            <h2>При клике с помощью useRef изменится фон</h2>
            <input ref={inputRef} type="text" />
            <button onClick={handleClick}>Сменить фон</button>
        </div>
    );
};

export default ExampleBGCInput;
