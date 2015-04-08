"use strict"
window.SpringEnemy = (function() {

	function SpringEnemy() {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		this.ground = 465;
		
		this.color = "#A2B";
		
		this.x = CANVAS_WIDTH + 25;
		this.y = this.ground;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 34;
		this.height = 40;
		
		this.gravity = 0.0008;
		this.velocityY = 0;
		this.speed = Math.random() * (15 - 7) + 7;
		this.jump_height = 400;
		this.jump = true;
		this.counter = 0;
	};
	
	SpringEnemy.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	SpringEnemy.prototype.draw = function(ctx) {
	
	var count, frameNumber, xoff, yoff;
				count = Math.floor(counter/300);
				frameNumber = count % 4;
				xoff = frameNumber * 0;
				yoff = 0;
				if(frameNumber > 10){
					xoff = (frameNumber - 4) * 10;
					yoff = 100;
				
				}
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["springEnemyImage"], 
				//0, 20, 110, 145,
				xoff, 0, 200, 200,
				this.x - halfW, this.y - halfH, this.width + 25, this.height + 25);
	};
	SpringEnemy.prototype.update = function(dt) {
	
		this.y =  this.y - this.speed * dt;
		this.counter++;
		this.x -= 0.14;
			
		if(this.y < this.jump_height)
		{
			this.jump = true;
		}
		
		if(this.jump == true)
		{
			this.velocityY += this.gravity;
			this.y += this.velocityY;
		}
		
		if(this.y > this.ground)
		{
			this.y = this.ground;
 			this.velocityY = 0;
			this.jump = false;
			console.log(this.speed);
		}
		
		
		this.age++;
		this.active = this.active && this.inBounds();
		
		if(this.active == false)
		{
			SCORE += 1;
		}
	};
	
	SpringEnemy.prototype.explode = function () {
		this.active = false;
		SCORE -= 1;
	};
	
	return SpringEnemy;
	
	})();