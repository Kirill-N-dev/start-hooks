import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
    // 2
    const isLogin = localStorage.getItem("auth");

    return (
        <>
            {isLogin ? <Component {...props} /> : <SmallTitle>auth</SmallTitle>}
        </>
    );
};

export default withLogin;
