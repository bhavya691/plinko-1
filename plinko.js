class Plinko{
    constructor(x,y){
        var options = {
            isStatic:true
        } 
        this.body = Bodies.circle(x,y,55,options);
        this.radius = 10;
      
        World.add(world,this.body)
    }

    display(){
        if(this.body!==undefined){
            var pos = this.body.position;
            fill("white");
            ellipseMode(RADIUS);
            ellipse(pos.x , pos.y , this.radius );
        }
       
    }
}