import React from "react";

const LinkButton = (props) => {
    return (
        <a href={props.link} className="btn themeButton">
            {props.title}
            <i className="fa-solid fa-arrow-right-long icon"></i>
        </a>
    )
}

export default LinkButton;