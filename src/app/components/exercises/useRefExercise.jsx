import { React, useState, useRef } from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    //
    const ref = useRef({
        styles: { height: 40, width: 60, color: "white" },
        value: { value: "Блок" }
    });

    const [refCurrent, setRefurret] = useState(ref.current);
    const [toggle, setToggle] = useState(false);

    const handleClick = ({ target }) => {
        //
        setToggle(!toggle);

        if (toggle === true) {
            setRefurret(ref.current);
        } else {
            setRefurret({
                styles: { height: 150, width: 80, color: "white" },
                value: { value: "text" }
            });
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
                style={refCurrent.styles}
            >
                <small>{refCurrent.value.value}</small>
            </div>
            <button className="btn btn-success" onClick={handleClick}>
                Изменить стили
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
