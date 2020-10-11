class Particle{
    constructor(x,y){
        var options = {
            restitution:0.4,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,10,options);
        this.color = color(random(0,255) , random(0,255) , random(0,255)) 
        this.radius = 50;
 
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius);
        pop();
    }
}