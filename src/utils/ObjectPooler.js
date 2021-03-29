class ObjectPooler {
    constructor(GameObject, capacity = 10) {
        this.type = GameObject;
        this.ready = []
        this.size = 0;

        this.instantiate(capacity);
    }
    getInstance(){
        if (this.ready.length == 0){
            if (this.ready.length == 0){
                this.instantiate(this.size);
            }
            return this.getInstance();
        };
        let res = this.ready.shift();
        res.setActive(true);
        return res;
    }
    instantiate(n){
        for (let i = 0 ; i < n ; i++) {
            let temp = new this.type()
            temp.setActive(false);
            this.ready.push(temp);
        }
        this.size += n;
    }

    disableInstance(instance) {
        instance.setActive(false);
        this.ready.push(instance);
    }
}

export default ObjectPooler;