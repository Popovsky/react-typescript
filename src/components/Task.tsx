import React from 'react';
import {Checkbox, IconButton, ListItem} from "@mui/material";
import {Delete} from '@mui/icons-material';

interface ITask {
    content: string,
}

const Task: React.FC<ITask> = (props) => {
    return (
        <ListItem style={{
            width: '35vw',
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start"
        }}>
            <Checkbox style={{width: '10%'}} />
            <p style={{width: '80%', margin: 0}}>{props.content}</p>
            <IconButton style={{width: '10%'}} aria-label="delete" size="large">
                <Delete fontSize="inherit" />
            </IconButton>
        </ListItem>
    );
};

export default Task;
