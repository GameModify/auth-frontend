    import React from "react";
import classes from "./Input.module.css"

const InputText = React.forwardRef((props, ref) => {
    return (
        <label className={classes.label}>
            Ввод
            <input ref={ref} className={classes.input} {...props}/>
        </label>
    )
})

export default InputText