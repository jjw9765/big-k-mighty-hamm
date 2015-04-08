"use strict"
window.Bean = (function() {

	function Bean() {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		
		this.color = "#A2B";
		
		this.x = CANVAS_WIDTH;
		this.y = Math.random() * (490 - 100) + 100;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 28;
		this.height = 39;

	};
	
	Bean.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	Bean.prototype.draw = function(ctx) {
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["beanImage"], 
				this.x - halfW, this.y - halfH, this.width, this.height);
		
	};
	Bean.prototype.update = function(dt) {
	
		this.x -= 0.12;
		this.age++;
		this.active = this.active && this.inBounds();
		
		if(this.active == false)
		{
			SCORE += 1;
		}
	};
	
	Bean.prototype.explode = function () {
		this.active = false;
		SCORE -= 1;
	};
	
	return Bean;
	
	})();