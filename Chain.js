class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.95,
            length:350
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
         var pointA=this.chain.bodyA.position;
         var pointB=this.chain.bodyB.position;
         strokeWeight(3);
         stroke("black");
         line (pointA.x,pointA.y,pointB.x,pointB.y);

    }
}