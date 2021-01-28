class Ground {
    constructor(x, y, width, height) {
        var gOption = {
            isStatic: true
            
        }

        this.ground = Bodies.rectangle(x, y, width, height, gOption)
        World.add(world, this.ground);
        this.image = loadImage("sprites/ground.png")
        this.width= width;
        this.height = height;
    }

    display() {

        var pos = this.ground.position
        push ()
        imageMode(CENTER)
       image  (this.image,pos.x, pos.y, this.width, this.height)

        pop ()
    }

}