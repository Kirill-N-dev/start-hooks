import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

export const Component = ({ numb }) => {
    //
    return <div>Компонент списка #{numb}</div>;
};

Component.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
        PropTypes.array
    ]),
    numb: PropTypes.number
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как
                <code>React.Children.map</code> так и
                <code>React.Children.toArray</code>
            </p>

            <Component value="компонент" />
            <Component value="компонент" />
            <Component value="компонент" />
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
