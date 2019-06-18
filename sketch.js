let walls = [];
let ray;
let partical;
let xoff = 0;
let yoff = 265165;


function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < 5; i++) {
        let x1 = random(width);
        let x2 = random(width);
        let y1 = random(height);
        let y2 = random(height);
        walls[i]= new Boundary(x1, x2, y1, y2);
    }
    
    walls.push(new Boundary(0,0,width,0));
    walls.push(new Boundary(width,0,width,height));
    walls.push(new Boundary(width,height,0,height));
    walls.push(new Boundary(0,height,0,0));

    partical = new Partical();
}


function draw() {
    background(0);
    for(let wall of walls){
        wall.show();
    }
    partical.update(noise(xoff)*width, noise(yoff)*height);
    partical.show();
    partical.look(walls);

    xoff += 0.01;
    yoff += 0.01;
}