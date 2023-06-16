import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    // Работает не адекватно, нет 1-ого рендера
    const renderCount = useRef(0);
    const [state, toggleState] = useState(true);
    // Изменение состояния для вызова рендера
    const toggle = () => {
        toggleState(!state);
    };

    useEffect(() => {
        // При каждом рендере будет вызвана
        // функция и счетчик будет увеличен
        renderCount.current += 1;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчёт количества рендеров</SmallTitle>
            <div>
                <h2>Количество рендеров</h2>
                <p>
                    Было рендеров:{" "}
                    {renderCount.current === 0
                        ? (renderCount.current = 1)
                        : renderCount.current}
                </p>
                <p>
                    <button onClick={toggle}>Update state</button>
                </p>
            </div>
        </CardWrapper>
    );
};

export default RenderCountExample;
