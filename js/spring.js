

let sketch = function(p) {
  p.setup = function() {
  p.let cnv = createCanvas(1200, 400);
  p.background(87, 210, 214,);
  p.cnv.id('spring');
 p.noStroke();

 let c = p.color (235, 235, 84)
  p.fill(c);
 p.ellipse(240, 140, 350, 350);
  p.noStroke();

c = p.color(111, 214, 92)
  p.fill (c);
  p.rect(572, 200, 10, 300)

  c = p.color(242, 242, 245)
  p.fill(c);
  p.translate(580, 200);
  p.noStroke();
  for (let i = 0; i < 10; i ++) {
    p.ellipse(0, 30, 20, 80);
    p.rotate(p.PI/5);
  }
  c = p.color(235, 235, 84);
  p.fill(c);
  p.ellipse(0, 0, 50, 50);

  c = p.color(111, 214, 92)
  p.fill (c);
  p.rect(295, 50, 10, 300)


  c = p.color(242,242,245)
  p.fill (c);
  p.translate(300, 50);
  p.noStroke();
  for (let i = 0; i < 10; i ++) {
    p.ellipse(0, 30, 20, 80);
    p.rotate(p.PI/5);
  }

  c = p.color(235, 235, 84);
  p.fill(c);
  p.ellipse(0, 0, 50, 50);

c = p.color(111, 214, 92)
  p.fill (c);
  p.rect(295, 50, 10, 300)


  c = p.color(242,242,245)
  p.fill (c);
  p.translate(300, 50);
  p.noStroke();
  for (let i = 0; i < 10; i ++) {
    p.ellipse(0, 30, 20, 80);
    p.rotate(p.PI/5);
  }

  c = p.color(235, 235, 84);
  p.fill(c);
  p.ellipse(0, 0, 50, 50);

}
};
