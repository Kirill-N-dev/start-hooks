import { React, useState, useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    //
    const ref = useRef();
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);

        if (toggle === true) {
            ref.current.style.cssText = `height: 40px; width: 60px; color: white`;
            ref.current.firstElementChild.innerHTML = "Блок";
        } else {
            ref.current.style.cssText = `height: 150px; width: 80px; color: white`;
            ref.current.firstElementChild.innerHTML = "text";
        }
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{ height: 40, width: 60, color: "white" }}
                ref={ref}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-success" onClick={handleClick}>
                Изменить стили
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
