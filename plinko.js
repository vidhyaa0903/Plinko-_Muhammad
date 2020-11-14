class plinko{
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0.3
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(255,255,255);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS);
        rotate(angle)
        noStroke();
        fill(this.color)
        
        ellipse(0,0,10,10);
        
        pop()

        
    }
}