import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

// Имитация API
const myFakeApi = ({ id, param }) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id,
                param,
                items: [1, 2, 3, 4, 5]
            });
        }, 1000);
    });
};

// Параметры, которые будем менять
const mockParam1 = { id: 1, param: 2 };
const mockParam2 = { id: 2, param: 3 };

// Родительский компонент, который будет передавать props в дочерний
export const ExampleUseMemoUseEffectDeps = () => {
    const [childProps, setChildProps] = useState(mockParam1);
    const handleSwitchChildProps = () => {
        if (childProps === mockParam1) {
            setChildProps(mockParam2);
        } else {
            setChildProps(mockParam1);
        }
    };

    return (
        <div>
            <button onClick={handleSwitchChildProps}>Обновить</button>
            <hr />
            <Child {...childProps} />
        </div>
    );
};

// Дочений компонент
const Child = ({ id, param }) => {
    const [values, setValues] = useState(null);

    // Создаём параметры запроса (ПРИМЕНЕНИЕ USEMEMO)
    const requestParams = useMemo(() => {
        return { id, param };
    }, [id, param]);
    /* const requestParams = {
        id,
        param
    }; */

    // Вызывам, когда обновятся параметры
    useEffect(() => {
        console.log("Request");
        myFakeApi(requestParams).then((r) => setValues(r));
    }, [requestParams]);

    return (
        <div>
            {values ? (
                <pre>{JSON.stringify(values, null, 2)}</pre>
            ) : (
                <div>Загрузка...</div>
            )}
        </div>
    );
};

Child.propTypes = {
    id: PropTypes.number,
    param: PropTypes.number
};

export default ExampleUseMemoUseEffectDeps;
