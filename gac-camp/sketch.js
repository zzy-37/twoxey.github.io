let p;
let pg, pg2;

var NOISE_SCALE = 0.004;
var STEP = 20;
var count;

function setup() {
  createCanvas(windowWidth, windowHeight);
  p = createP();
  m1 = new noiseMap("cyan", 0.01, 150);
  m2 = new noiseMap("red", 0.02, 500);
  m3 = new noiseMap("purple", 0.03, 750);

  pg = createGraphics(width, height, WEBGL);
  pg2 = createGraphics(150, 150, WEBGL);
  pg3 = createGraphics(150, 150, WEBGL);
  pg4 = createGraphics(150, 150, WEBGL);

  strokeWeight(0.5);
  noFill();
  count = round((width * 1.5) / STEP);
}

function mousePressed() {
  // remove()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (const m of [m1, m2, m3]) {
    m.resize();
  }
}

function draw() {
  clear();
  // background(40, 40, 40)

  m1.x += 0.01;
  m2.x += 0.01;
  m2.y += 0.02;

  blendMode(HARD_LIGHT);
  for (const m of [m1, m2, m3]) {
    m.drawNoise();
    image(m.g, 0, 0, width, height);
  }

  blendMode(DODGE);
  drawDots();
  // drawCurves();
  // drawShapes();

  // p.html("Framerate: " + round(frameRate()));
}

function drawShapes() {
  blendMode(BLEND);
  pg2.clear();
  pg2.reset();
  pg2.noFill();
  pg2.rotateX(frameCount * 0.01);
  pg2.rotateZ(frameCount * 0.01);
  pg2.box(75);
  image(pg2, width - 200, height - 500);

  pg3.clear();
  pg3.reset();
  pg3.noFill();
  pg3.rotateX(frameCount * -0.01);
  pg3.rotateZ(frameCount * 0.01);
  pg3.torus(35, 30, 5, 5);
  image(pg3, width - 200, height - 350);

  pg4.clear();
  pg4.reset();
  pg4.noFill();
  pg4.rotateY(frameCount * 0.01);
  pg4.rotateX(frameCount * 0.01);
  pg4.torus(50, 15, 10, 10);
  image(pg4, width - 200, height - 200);
}

function drawCurves() {
  push();
  fill(0, 16);
  rect(0, 0, width, height);
  pop();

  var phase = frameCount / 2;

  for (var y = 0; y < height; y += 10) {
    var myColour = lerpColor(
      color(210, 222, 255),
      color(130, 130, 175),
      y / height
    );
    // var myColour = lerpColor(color(18, 41, 63), color(130, 175, 175), y / height);
    drawPerlinCurve(width + 50, y, phase, STEP, count, myColour);
  }
}

function drawPerlinCurve(x, y, phase, step, count, myColour) {
  push();
  stroke(myColour);
  beginShape();
  for (var i = 0; i < count; i++) {
    curveVertex(x, y);
    var angle =
      2 * PI * noise(x * NOISE_SCALE, y * NOISE_SCALE, phase * NOISE_SCALE);
    x += cos(angle) * step;
    y += sin(angle) * step;
  }
  endShape();
  pop();
}

function drawDots() {
  // blendMode(BURN);
  pg.clear();
  pg.reset();
  pg.translate(-600, -500);
  pg.rotateX(PI / 4);
  pg.rotateY(PI / 4);
  pg.noFill();
  pg.stroke(200);
  pg.strokeWeight(3);
  pg.beginShape(POINTS);
  const l = 8;
  const off = frameCount * 0.01;
  const scl = 0.02;
  for (let y = 0; y < 200; y++) {
    const ny = y * scl + off;
    for (let x = 0; x < 200; x++) {
      const nx = x * scl + off;
      const h = noise(nx, ny) * 800;
      pg.vertex(x * l, y * l, h);
    }
  }
  pg.endShape();
  image(pg, 0, 0);
}

class noiseMap {
  constructor(c, scl, off) {
    this.x = this.y = off;
    this.noise_scale = scl;
    this.color = color(c);
    this.g = createGraphics(100, 100);
    this.resize();
  }
  resize() {
    if (width >= height) {
      this.g.height = ceil((height / width) * 100);
    } else {
      this.g.width = ceil((width / height) * 100);
    }
    this.g.pixelDensity(1);
    this.g.background(this.color);
  }
  drawNoise() {
    this.g.loadPixels();
    for (let idx = 3, py = 0; py < this.g.height; py++) {
      const noiseY = this.noise_scale * py + this.x;
      for (let px = 0; px < this.g.width; px++, idx += 4) {
        const noiseX = this.noise_scale * px + this.y,
          alphaNoise = noise(noiseX, noiseY) * 255;
        this.g.pixels[idx] = alphaNoise;
      }
    }
    this.g.updatePixels();
  }
}
