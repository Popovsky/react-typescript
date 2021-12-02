import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {IForm} from "../interfaces/form";

const Form: React.FC = () => {
    const {register, handleSubmit, reset} = useForm<IForm>();
    const onSubmit: SubmitHandler<IForm> = (data: object) => {
        console.log(data);
        reset();
    }

    return (
        <form style={{
            display: "flex",
        }} onSubmit={handleSubmit(onSubmit)}>
            <TextField style={{width: '90%'}} id="standard-basic" label="Add your task" variant="standard" {...register('task')} />
            <Button style={{backgroundColor: "#4eaf36", width: '10%'}} variant="contained" type="submit">Add</Button>
        </form>
    );
};

export default Form;