import styles from './Components.module.css'
import {H2,P,Button} from  './HelperComponents/StyledComponentsElement';
import TextFieldInput from "./HelperComponents/TextFieldInput";
import React, {useState} from "react";
import db from "../db.json"
import {useAppDispatch, useAppSelector} from "../Redux/store";
import {ButtonThunk} from "../Redux/ApiThunkCalls";
type InputEvent = React.ChangeEvent<HTMLInputElement>;

const init = {
    name:"",
    phone:"",
    email:""
}

const ContactUs = () => {
    const ButtonChecker = useAppSelector(state=>state.Button)
    console.log(ButtonChecker)
    const [state,setState] = useState(init)
    const dispatch = useAppDispatch()
    const handleChange = (e:InputEvent) => {
        const {name,value} = e.target
        return setState(prev => ({...prev,[name]:value}))
    }
    return (
        <div className={styles.ContactUs__background}>
            <div className={styles.ContactUs}>
            <H2>ContactUs</H2>
                <P>Do you have any kind of help please contact with us.</P>
                <section className={styles.ContactUs__TextField}>
                    <TextFieldInput  placeholder={"Name"} onChange={handleChange} name={'name'}/>
                    <TextFieldInput  placeholder={"Phone"} onChange={handleChange} type={'phone'} name={'phone'}/>
                    <TextFieldInput  placeholder={"Email"} onChange={handleChange} type={'email'} name={'email'}/>
                </section>
                <Button
                    className={styles.ContactUs__button}
                    onClick={(e) => {
                        e.preventDefault()
                        dispatch(ButtonThunk(Object.assign({id:db.feedback.length + 1},state)))
                    }}
                >
                    {ButtonChecker.isLoading ? "...." : ButtonChecker.status}
                    {ButtonChecker.status.length > 0 ? "" : "Sent"}
                </Button>

        </div>
        </div>
    );
};

export default ContactUs;