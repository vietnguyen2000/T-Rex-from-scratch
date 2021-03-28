class ObjectPooler {
    constructor(GameObject, capacity = 10) {
        this.type = GameObject;
        this.ready = []
        this.waiting = []
        this.size = 0;

        this.instantiate(capacity);
    }
    getInstance(){
        if (this.ready.length == 0){
            let temp = []
            while (this.waiting.length != 0) {
                let m = this.waiting.pop();
                if (m.enabled) {
                    temp.push(m)
                }
                else{
                    this.ready.push(m);
                }
            }
            if (this.ready.length == 0){
                this.instantiate(this.size);
            }
            return this.getInstance();
        };
        let res = this.ready.pop();
        this.waiting.push(res);
        res.enable();
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

    }
}

export default ObjectPooler;