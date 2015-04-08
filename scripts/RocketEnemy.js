"use strict"
window.RocketEnemy = (function() {

	function RocketEnemy() {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		
		this.color = "#A2B";
		
		this.x = CANVAS_WIDTH;
		this.y = Math.random() * (300 - 100) + 100;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 100;
		this.height = 100;
		
		this.counter = 0;

	};
	
	RocketEnemy.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	RocketEnemy.prototype.draw = function(ctx) {
				var count, frameNumber, xoff, yoff;
				count = Math.floor(counter/300);
				frameNumber = count % 3;
				xoff = frameNumber * 100;
				yoff = 0;
				if(frameNumber > 10){
					xoff = (frameNumber - 4) * 10;
					yoff = 100;
				
				}
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["rocketEnemyImage"], 
				//0, 20, 110, 145,
				xoff, 0, 90, 90,
				this.x - halfW, this.y - halfH, this.width, this.height);
		
	};
	RocketEnemy.prototype.update = function(dt) {
	
		this.x -= 0.11;
		this.counter++;
		this.age++;
		this.active = this.active && this.inBounds();
		
		if(this.active == false)
		{
			SCORE += 1;
		}
	};
	
	RocketEnemy.prototype.explode = function () {
		this.active = false;
		SCORE -= 1;
	};
	
	return RocketEnemy;
	
	})();