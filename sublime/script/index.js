window.onload=function(){
	var circle=document.getElementById("anle");
	var span=document.getElementById("time").getElementsByTagName("span")[0];
	var answer=document.getElementById("answer");
	var stop=document.getElementById("stop");
	var music=document.getElementById("music");
	
	var star_time,end_time;
	
	stop.onclick=function(){
		if (music.paused) {
			stop.value='暂停';
			music.play();
		}else if (music.played) {
			stop.value='继续';
			music.pause();
		}
		
	}
	circle.ontouchstart=function(){
		 star_time=new Date();
	}
	circle.ontouchend=function(){
		 end_time=new Date();
		var different=end_time.getTime()-star_time.getTime();
		span.innerHTML=different/1000;
		if (different<400) {
			answer.innerHTML='李时珍的皮，好好按！';
		}else if (different<800) {
			answer.innerHTML='傻狗看了会流泪，李明禹看了会嘿嘿！';
		}else if(different<1000){
			answer.innerHTML='猴赛雷啊，和宇宙宙长比还是差那么点。';
		}else if(different==1000){
			answer.innerHTML='你要是能在按出一秒，我就是狗！';
		}else if (different<1200) {
			answer.innerHTML='呦吼，这么接近我，中午食咩啊？？';
		}else if (different<1800) {
			answer.innerHTML='切，垃圾死亡冰柱，分解，真是弱智。';
		}else if (different>1800) {
			answer.innerHTML='溜了，溜了，是不是很有灵性。';
		}
	}
	
}
