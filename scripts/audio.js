/*
	Name: 			audio.js
	Author: 		Tony Jefferson
	Last Modified: 	3/23/2013
	Description: 	Quick and dirty audio playing script. Should be re-factored to 
	allow more simultaneous sound channels and the re-use of Audio() objects.
	Dependencies: 	requires HTML5 Audio() object
*/

"use strict";
window.audio = (function(){

	var AUDIO_CHANNEL = {
		CHANNEL_BACKGROUND: "channelBackground",
		CHANNEL_BULLET: "channelBullet",
		CHANNEL_BOING: "channelBoing",
		CHANNEL_ERASER: "channelEraser",
		CHANNEL_GAMEOVER: "channelGameOver",
		CHANNEL_HURTONE: "hurt1",
		CHANNEL_HURTTWO: "hurt2",
		CHANNEL_HURTTHREE: "hurt3",
		CHANNEL_HURTFOUR: "hurt4",
		CHANNEL_MISSILE: "missile",
		CHANNEL_FARTONE: "fart1",
		CHANNEL_FARTTWO: "fart2",
		CHANNEL_HEART: "heart",
		CHANNEL_NONE: "channelNone"
	};

	var AUDIO_SOURCES = {
		AUDIO_BACKGROUND: "sounds/backgroundmusic",
		AUDIO_BULLET: "sounds/tankshot",
		AUDIO_ERASER: "sounds/eraser",
		AUDIO_BOING: "sounds/boing",
		AUDIO_GAMEOVER: "sounds/gameover",
		AUDIO_HURTONE: "sounds/hurt1",
		AUDIO_HURTTWO: "sounds/hurt2",
		AUDIO_HURTTHREE: "sounds/hurt3",
		AUDIO_HURTFOUR: "sounds/hurt4",
		AUDIO_FARTONE: "sounds/fart1",
		AUDIO_FARTTWO: "sounds/fart2",
		AUDIO_HEART: "sounds/heart",
		AUDIO_MISSILE: "sounds/missile",
	};
	
	var soundChannels = {};

	function AudioEffect(channel,trackURL,volume,loop){
		/* 
		Kill old channel if we want
		Probably a good idea if you don't like crashes
		*/
		if (soundChannels[channel]) soundChannels[channel].kill(); // kill old AudioEffect
			
		if(channel != AUDIO_CHANNEL.CHANNEL_NONE) soundChannels[channel] = this;
		this.myAudio = new Audio();
		if(this.myAudio.canPlayType("audio/mpeg")){
			trackURL += ".wav";
		} else {
			trackURL += ".wav";
		}
		this.myAudio.src = trackURL;
		this.myAudio.volume = volume;
		if (loop) this.myAudio.loop = true;
		this.myAudio.play();
			
	}
		
	AudioEffect.prototype.kill = function(){
		if(this.myAudio){
			this.myAudio.pause();
			this.myAudio.src = "";
			this.myAudio = null;
		} 
	}
	// end AudioEffect
	
	function playBulletSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_BULLET,AUDIO_SOURCES.AUDIO_BULLET,volume);
	}
	
	function playMissileSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_MISSILE,AUDIO_SOURCES.AUDIO_MISSILE,volume);
	}
	
	function playBoingSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_BOING,AUDIO_SOURCES.AUDIO_BOING,volume);
	}
	
	function playHeartSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_HEART,AUDIO_SOURCES.AUDIO_HEART,volume);
	}
	
	function playGameOver(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_GAMEOVER,AUDIO_SOURCES.AUDIO_GAMEOVER,volume);
	}
	
	function playHurtOne(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_HURTONE,AUDIO_SOURCES.AUDIO_HURTONE,volume);
	}
	
	function playHurtTwo(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_HURTTWO,AUDIO_SOURCES.AUDIO_HURTTWO,volume);
	}
	
	function playHurtThree(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_HURTTHREE,AUDIO_SOURCES.AUDIO_HURTTHREE,volume);
	}
	
	function playHurtFour(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_HURTFOUR,AUDIO_SOURCES.AUDIO_HURTFOUR,volume);
	}
	
	function playFartOne(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_FARTONE,AUDIO_SOURCES.AUDIO_FARTONE,volume);
	}
	
	function playFartTwo(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_FARTTWO,AUDIO_SOURCES.AUDIO_FARTTWO,volume);
	}
	
	function playEraserSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_ERASER,AUDIO_SOURCES.AUDIO_ERASER,volume);
	}
	
	function playBackgroundSound(volume){
		new AudioEffect(AUDIO_CHANNEL.CHANNEL_BACKGROUND,AUDIO_SOURCES.AUDIO_BACKGROUND,volume,true);
	}
	

	
	// These 4 functions are the public interface of this module
	// they can be accessed from the outside like this: audio.playBackgroundSound(0.5);
	return{
		playBulletSound : playBulletSound,
		playBoingSound : playBoingSound,
		playGameOver : playGameOver,
		playHurtOne	:	playHurtOne,
		playHurtTwo	: 	playHurtTwo,
		playHurtThree	:	playHurtThree,
		playHurtFour	:	playHurtFour,
		playFartOne		:	playFartOne,
		playFartTwo		:	playFartTwo,
		playMissileSound : playMissileSound,
		playEraserSound	:	playEraserSound,
		playHeartSound	:	playHeartSound,
		playBackgroundSound : playBackgroundSound
	};

})();