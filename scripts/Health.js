"use strict"
window.Health = (function() {

	function Health() {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		
		this.color = "#A2B";
		
		this.x = CANVAS_WIDTH;
		this.y = Math.random() * (490 - 100) + 100;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 61;
		this.height = 61;

	};
	
	Health.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	Health.prototype.draw = function(ctx) {
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["healthImage"], 
				this.x - halfW, this.y - halfH, this.width, this.height);
		
	};
	Health.prototype.update = function(dt) {
	
		this.x -= 0.14;
		this.age++;
		this.active = this.active && this.inBounds();
	};
	
	Health.prototype.explode = function () {
		this.active = false;
		SCORE += 1;
	};
	
	return Health;
	
	})();