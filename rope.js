class Rope
{
    constructor (body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
    
        this.rope=Constraint.create(options)
        World.add(world, this.Rope)
    }
    display(){
        var body1=this.rope.bodyA.position
        var body2=this.rope.bodyB.position
     strokeWeight(4)
    line (body1.x, body1.y, body2.x, body2.y)
    }
}