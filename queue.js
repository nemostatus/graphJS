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
}

export default Queue