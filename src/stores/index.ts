import {observable, action} from 'mobx';

class IndexStore {
    @observable counter = 0;
    
    @action.bound
    addCounter() {
        this.counter++;
    }
    @action
    clearCounter() {
        this.counter = 0;
    }
}

export default new IndexStore();