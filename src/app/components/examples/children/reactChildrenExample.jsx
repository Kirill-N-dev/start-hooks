import React from "react";
import { StatusBar, StatusItem } from "./childs";

// Функционал клонирования и классов для статусбара, как и сам статусбар - пропускаю, чтобы не терять время.
// Я на практике поработал с props.children и напока хорош.
const SomeComponent = () => {
    return (
        <StatusBar value={1}>
            <StatusItem value={1}></StatusItem>
            <StatusItem value={2}></StatusItem>
            <StatusItem value={3}></StatusItem>
            <StatusItem value={4}>33333</StatusItem>
            <StatusItem value={5}>12345</StatusItem>
        </StatusBar>
    );
};

export default SomeComponent;
