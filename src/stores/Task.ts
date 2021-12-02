import {makeAutoObservable, runInAction} from "mobx";
import {getTasks} from "../api/api";

export class Task {
    private list: [] = [];
    constructor() {
        makeAutoObservable(this);
    }
    async loadData() {
        const result = await getTasks();
        console.log(result)
        runInAction(() => this.list = result.data);
    }
}

// export default Task;
