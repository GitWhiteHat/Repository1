class ground {
    constructor(x, y) {
        var options = {
            'isStatic': true,
        }
        this.body = Bodies.rectangle(x, y, 900, 50, options);
        this.image = loadImage("ground.png");
        World.add(world, this.body);
    }
    display() {
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 900, 50);
    }
}