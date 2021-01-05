class Ground{
    constructor(x,y,width,height){

        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        fill(180);
        rect(pos.x,pos.y,this.body.width,this.body.height);
    }

}