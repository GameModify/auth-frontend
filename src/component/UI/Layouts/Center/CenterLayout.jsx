import React from 'react';
import classes from "./Center.module.css";
import Button from "../../Buttons/Default/Button";

const CenterLayout = ({children, ...props}) => {
    return (
        <div {...props} className={classes.container}>{children}</div>
    );
};

export default CenterLayout;