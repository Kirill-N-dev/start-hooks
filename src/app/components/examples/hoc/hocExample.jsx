import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./withLogin";
import withPropsStyles from "./withPropsStyles";

const HOCExample = () => {
    // 1,3
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsStyles = withPropsStyles(Component);
    const ComposedComponent = withPropsStyles(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropsStyles></ComponentWithPropsStyles>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <ComposedComponent></ComposedComponent>
            </CardWrapper>
        </>
    );
};

export default HOCExample;
