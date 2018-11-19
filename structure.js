var obsx = 200;
var obsy = 200;
var obsw = 55;
var obsh = 20;


function setup(){
	createCanvas(500,600),
	car = new Car();
}

function draw(){
	background(0);
	car.update();
	car.show();

	rect(obsx,obsy,obsw,obsh);
}

function Car(){
	this.pos = createVector(width/2,height);
	this.vel = createVector(0,-3);
	this.acc = createVector();

	this.applyForce = function(force){
		this.acc.add(force);
	}

	this.update = function (){
		
			this.vel.add(this.acc);
			this.pos.add(this.vel);
			this.acc.mult(0);
		
		

		if (this.pos.x > obsx && this.pos.x < obsx+obsw && this.pos.y > obsy && this.pos.y < obsy+25+obsh){
			this.crashed=true;
			this.vel = p5.Vector.random2D();
		}
	}

	this.show = function (){
		push();
		translate(this.pos.x, this.pos.y);
		rectMode(CENTER);
		fill(255,255,255,100)
		rotate(this.vel.heading());
		rect(0,0,50,30);
		pop();
	}
}