import React, { useEffect, useRef, useState } from "react";
import { Collapse as BsCollapse } from "bootstrap";
import PropTypes from "prop-types";
import { Component } from "../exercises/childrenExercise";

const CollapseWrapper = ({ children, title, name }) => {
    console.log(children);
    const [display, setDisaplay] = useState(false);
    const collapseRef = useRef();
    const toggleDisplay = () => {
        setDisaplay((prevState) => !prevState);
    };
    useEffect(() => {
        const newCollapse = new BsCollapse(collapseRef.current, {
            toggle: false
        });
        display ? newCollapse.show() : newCollapse.hide();
    }, [display]);

    return (
        <div className="card  my-2">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    {title}
                    <i
                        className={
                            "bi bi-caret-" +
                            (!display ? "down-fill" : "up-fill")
                        }
                        onClick={toggleDisplay}
                    ></i>
                </div>
                <div className="collapse" ref={collapseRef} id={name + title}>
                    {/* {children} */}
                    {React.Children.map(children, (child, ind) => {
                        if (child.type === Component) {
                            return (
                                <>
                                    {React.cloneElement(child, {
                                        ...child.props,
                                        numb: ind
                                    })}
                                </>
                            );
                        } else {
                            return child;
                        }
                    })}
                </div>
            </div>
        </div>
    );
};
CollapseWrapper.defaultProps = {
    title: "Информация"
};
CollapseWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.object
    ]), // добавил объект
    title: PropTypes.string,
    name: PropTypes.string,
    numb: PropTypes.number
};

export default CollapseWrapper;
