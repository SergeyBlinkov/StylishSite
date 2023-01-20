import styles from './styles.module.css'
import React from "react";
type InputEvent = React.ChangeEvent<HTMLInputElement>;
interface TextFieldType {
    onChange?:(e:InputEvent)=> void
    placeholder?:string,
    type?:string,
    name?:string
}



const TextFieldInput = ({placeholder,onChange,type,name}:TextFieldType) => {
    return (<div className={styles.TextFieldInput__background}>
        <input
            className={styles.TextFieldInput}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
        />
    </div>
    );
};

export default TextFieldInput;