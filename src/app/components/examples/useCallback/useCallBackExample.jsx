import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    //
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    // С коллбеком (return не обязателен)
    const validateWithCallback = useCallback((data) => {
        return console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    // Без колбека
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    //
    useEffect(() => {
        validateWithCallback(data);
        validateWithoutCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>renderWithoutCallback: {withoutCallback.current}</p>
            <p>renderWithoutCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={data.email || ""}
            ></input>
        </CardWrapper>
    );
};

export default UseCallBackExample;
