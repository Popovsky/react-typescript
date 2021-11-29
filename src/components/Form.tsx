import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {IForm} from "../interfaces/form";

const Form: React.FC = () => {
    const {register, handleSubmit} = useForm<IForm>();
    const onSubmit: SubmitHandler<IForm> = (data: object) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('firstName')}/><br/>
            <input type="text" {...register('lastName')}/><br/>
            <input type="number" {...register('age')}/><br/>
            <input type="submit"/>
        </form>
    );
};

export default Form;