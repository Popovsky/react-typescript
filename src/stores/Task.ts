import {makeAutoObservable, runInAction} from "mobx";
import {getTasks} from "../api/api";

export class Task {
    private list: [] = [];
    constructor() {
        makeAutoObservable(this);
    }
    loadData = async () => {
        const result = await getTasks();
        runInAction(() => this.list = result.data);
    }
}

// export default Task;
