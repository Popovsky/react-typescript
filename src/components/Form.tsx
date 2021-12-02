import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {Button, TextField} from "@mui/material";
import {IForm} from "../interfaces/form";

const Form: React.FC = () => {
    const {register, handleSubmit} = useForm<IForm>();
    const onSubmit: SubmitHandler<IForm> = (data: object) => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField id="standard-basic" label="First name" variant="standard" {...register('firstName')} /><br/>
            <TextField id="standard-basic" label="Last name" variant="standard" {...register('lastName')} /><br/>
            <TextField id="standard-basic" label="Age" variant="standard" {...register('age')} /><br/>
            <Button style={{backgroundColor: "#4eaf36"}} variant="contained" type="submit">Submit</Button>
        </form>
    );
};

export default Form;