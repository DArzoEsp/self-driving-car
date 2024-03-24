class Car {
    constructor(x, y, width, height) {      // position and the objects width and height
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;                     // using speed and acc for constant movement
        this.acceleration = 0.2;
        this.maxSpeed = 2;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update(context) {                              // this function will update the position of the car (x, y)
        if (this.controls.forward) {
            this.speed -= this.acceleration;
        } 
        
        if (this.controls.reverse) {
            this.speed += this.acceleration;
        }
        
        if(this.speed > this.maxSpeed) {        // this caps speed at maxSpeed = 3;
            this.speed = this.maxSpeed;
        }
        
        if(this.speed < -this.maxSpeed / 2) {
            this.speed = -this.maxSpeed / 2;
        }

        if(this.speed > 0) {
            this.speed -= this.friction;
        } else if(this.speed < 0) {
            this.speed += this.friction / 2;
        }

        if(Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }

        if(this.controls.left) {
            this.angle -= 0.03;
        } else if(this.controls.right) {
            this.angle += 0.03;
        }

        this.x += Math.sin(this.angle) * this.speed;
        this.y += Math.cos(this.angle) * this.speed;
    }

    draw(context) {                         // function draw using context as a parameter
        context.save();
        context.translate(this.x, this.y);
        context.rotate(-this.angle);

        context.beginPath();                // begins a path or resets the current path
        context.rect(
            -this.width / 2,        // creates the position of the object which is x and y
            -this.height / 2,
            this.width,                     // creates the objects width and height
            this.height
        );
        context.fill();                     // fills it with color (black)
    }
}