const canvas = document.getElementById('canvas');
canvas.width = 200;

const context = canvas.getContext('2d');                // use getContext to be able to get a set of functions and it becomes a reference... using 2d
const car = new Car(100, 100, 30, 50);                  // object Car to be created
const road = new Road(canvas.width / 2, canvas.width*.9);

function animate() {
    car.update(context);
    canvas.height = window.innerHeight;                 // canvas is the road
    road.draw(context);                                 // this draws a line for the road
    car.draw(context);                                  // uses canvas context to draw on canvas
    requestAnimationFrame(animate);                     // calls function animate many times a second to give the illusion it moves
}

animate();