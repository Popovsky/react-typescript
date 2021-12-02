import axios from 'axios';
import {IUpdateTask} from "../interfaces/task";
import _ from 'lodash';

const apiInstance = axios.create({
    baseURL: `http://localhost:${process.env.PORT ?? 3000}`,
});

export const createTask = (data: string) => apiInstance.post('/tasks', data);
export const getTasks = () => apiInstance.get('/tasks');
export const getTaskById = (id: number) => apiInstance.get(`/tasks/${id}`);
export const updateTaskById = (data: IUpdateTask) => apiInstance.patch(`/tasks/${data.id}`, _.omit(data, ['id']));
export const removeTaskById = (id: number) => apiInstance.delete(`/tasks/${id}`);

export default apiInstance;
