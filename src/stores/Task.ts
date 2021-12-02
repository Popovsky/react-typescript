import {makeAutoObservable} from "mobx";

class Task {
    private list: [] = [];
    constructor() {
        makeAutoObservable(this);
    }
}

export default Task;
