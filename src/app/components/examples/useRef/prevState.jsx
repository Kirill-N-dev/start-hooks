import React, { useState, useEffect, useRef } from "react";

export const ExampleFefUsePrev = () => {
    // ВСЁ ДЕЛО В ОЧЕРЁДНОСТИ ВЫПОЛНЕНИЯ КОДА.
    // Состояние
    const [count, setCount] = useState(0);

    // Ref, начальное значение равно состоянию
    const prevRef = useRef(count);
    console.log(count, prevRef);

    // При изменении count меняем значение в Ref
    useEffect(() => {
        prevRef.current = count;
    }, [count]);

    // Получаем предыдущее значение
    const prevCount = prevRef.current;
    return (
        <div>
            <h1>
                Текущее значение: {count}, Предыдущее: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default ExampleFefUsePrev;
