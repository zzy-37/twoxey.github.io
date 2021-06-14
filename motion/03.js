let pts = [];
let power = 2;
let ra = 20;
let pt;
let pg;

function setup() {
  // pixelDensity(1);
  createCanvas(800, 800);
  background(0);

  // pg = createGraphics(2 * width, 2 * height, WEBGL);
  pg = createGraphics(width, height, WEBGL);

  // let v = createVector(0, 0, 0);
  // pt = new particle(v, power, ra);

  generateCurve(200);
}

function draw() {
  pg.clear();
  pg.background(0,50);
  pg.stroke(255);
  pg.noFill();
  pg.strokeWeight(0.9);

  animate();

  image(pg, 0, 0, width, height);
  // print(frameRate());
}

function animate() {
  let a = 0;
  for (let i = 0; i < TWO_PI; i += 0.01) {
    pg.rotateY(0.03);

    pg.push();

    pg.rotateZ(0.1 * a); //0.1*a
    pg.rotateY(0.5); //0.5*a
    drawCone();

    pg.pop();

    a += 0.1;
  }
}

function drawCone() {
  // for (let j = 0; j < 2; j++) {
  // for (let aa = 0; aa < TWO_PI; aa += PI / 20) {
  //   pg.rotateY(aa);
  pg.beginShape(POINTS);
  for (let i = 0; i < pts.length; i++) {
    pts[i].emitte();
  }
  pg.endShape();
  // }
  // pg.rotateX(PI);
  // }
}

function generateCurve(w) {
  for (let x = 1; x < w; x++) {
    let y = (10 * w) / x;
    // vertex(x, y, 0);
    let v = createVector(x, y, 0);
    pts.push(new particle(v, power, ra));
  }
}

class particle {
  constructor(pos, pow, r) {
    this.pos = pos;
    this.pow = pow;
    this.r = r;
  }
  emitte() {
    for (let i = 0; i < this.pow; i++) {
      let dist = random(this.r);
      if (random() < 1 / sq(dist)) {
        let v = p5.Vector.random3D();
        v.setMag(dist);
        pg.vertex(this.pos.x + v.x, this.pos.y + v.y, this.pos.z + v.z);
      }
    }
  }
}
