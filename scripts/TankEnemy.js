"use strict"
window.TankEnemy = (function() {

	function TankEnemy() {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		
		this.color = "#A2B";
		
		this.x = CANVAS_WIDTH;
		this.y = 470;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 100;
		this.height = 100;
		this.counter = 0;

	};
	
	TankEnemy.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	TankEnemy.prototype.draw = function(ctx) {
	
	var count, frameNumber, xoff, yoff;
				count = Math.floor(counter/300);
				frameNumber = count % 2;
				xoff = frameNumber * 500;
				yoff = 0;
				if(frameNumber > 10){
					xoff = (frameNumber - 4) * 10;
					yoff = 100;
				
				}
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["tankEnemyImage"], 
				//0, 20, 110, 145,
				xoff, 0, 500, 350,
				this.x - halfW, this.y - halfH, this.width, this.height);
	};
	TankEnemy.prototype.update = function(dt) {
	
		this.counter++;
		
		this.x -= 0.05;
		
		
		
		if(this.x < 0)
		{
			ACTIVE_TANK = false;
			console.log(ACTIVE_TANK);
		}
			
		this.age++;
		this.active = this.active && this.inBounds();
		
		if(this.active == false)
		{
			SCORE += 1;
		}
	};
	
	TankEnemy.prototype.explode = function () {
		ACTIVE_TANK = false;
		this.active = false;
		SCORE -= 1;
	};
	
	return TankEnemy;
	
	})();