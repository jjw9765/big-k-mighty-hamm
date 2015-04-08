"use strict"
window.TankBullet = (function() {

	function TankBullet(x, y, speed) {
		
		this.active = true;
		this.age = Math.floor(Math.random() * 128);
		
		this.color = "#A2B";
		
		this.x = x - 15;
		this.y = y - 9;
		this.amplitude = getRandom(1.5,7.0);
		
		this.width = 15;
		this.height = 15;
		this.speed = speed;
	};
	
	TankBullet.prototype.inBounds = function() {
		return this.x >= 0 && this.y <= CANVAS_WIDTH &&
				this.y >= 0 && this.y <= CANVAS_HEIGHT;
	};
		
	TankBullet.prototype.draw = function(ctx) {
				var halfW = this.width/2;
				var halfH = this.height/2;
				ctx.drawImage(images["bulletImage"], 
				this.x - halfW, this.y - halfH, this.width, this.height);
	};
	
	TankBullet.prototype.update = function(dt) {
	
		this.x -= this.speed;
		this.age++;
		this.active = this.active && this.inBounds();
	};
	
	TankBullet.prototype.explode = function () {
		this.active = false;
	};
	
	return TankBullet;
	
	})();