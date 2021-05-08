class Queue{
    constructor(){
        this.items=[]
    }
    enqueue(element){
this.items.push(element)
    }

    dequeue(){
        if(this.isEmpty())
            return "overflow"
return this.items.shift()
}

isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}
}

module.exports = Queue