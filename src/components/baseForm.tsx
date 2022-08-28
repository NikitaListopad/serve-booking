import React, {FC, FormEvent, FormEventHandler} from "react";
import Input from "./elements/input";
import Button from "./elements/button";
import styles from './baseForm.module.scss';


interface BaseFormProps {
    name: string;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputValue: string;
}

const BaseForm: FC<BaseFormProps> = (props: BaseFormProps) => {

    const {name, handleSubmit, handleChange, inputValue} = props;

    return (
        <div className={styles.formContainer}>
            <form name={name} onSubmit={handleSubmit}>
                <Input type='search' value={inputValue} onChange={handleChange} placeholder='Test' className={styles.input}/>
                <Button title='Submit' isDisabled={false} className={styles.btn}/>
            </form>
        </div>
    )
}

export default BaseForm;