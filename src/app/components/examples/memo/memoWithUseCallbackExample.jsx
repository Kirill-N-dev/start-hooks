import React, { useEffect, useState } from "react";

const Parent = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button
                className="btn btn-primary"
                onClick={() => setCount((c) => c + 1)}
            >
                +
            </button>
            <div>
                <Children />
            </div>
        </div>
    );
};

const Children = React.memo(() => {
    useEffect(() => {
        console.log("render");
    });

    return <div>Children</div>;
});

export default Parent;
