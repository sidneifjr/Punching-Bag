new Vue({
	el: '#vue-app',

	data: {
		health: 100,
		score: 0,

		// Define que o jogo acaba quando a 'health' atinge 0.
		ended: false,
		message: "Congratulations!",

		lists: [
			{position: '1st'},
			{position: '2nd'},
			{position: '3th'},
			{position: '4th'},
		]
	},

	methods: {
		punch: function(){
			const x = Math.floor(Math.random() * (15 - 10 + 1)) + 10;
			this.health -= x;
			this.score += x;

			if(this.health <= 0) {
				this.ended = true;
			}

			const audio = document.querySelector("audio");
			if (!audio) return;
			audio.currentTime = 0;
			audio.play();
		},

		restart: function(){
			this.health = 100;
			this.score = 0;
			this.ended = false;
		},

		show: function() {
			const show = document.querySelector('.leaderboard');
			if (show.classList.contains('show')){
				show.classList.remove('show');
				show.classList.add('hide');
			} else {
				show.classList.add('show');
				show.classList.remove('hide');
			}
		},
	},

	computed: {

	}
});