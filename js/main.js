new Vue({
	el: '#vue-app',

	data: {
		health: 100,
		score: 0,

		// Define que o jogo acaba quando a 'health' atinge 0.
		ended: false,
		message: "Congratulations!"
	},

	methods: {

		punch: function(){

			var x = Math.floor(Math.random() * (15 - 10 + 1)) + 10;

			this.health -= x;

			// checando se a 'health' é 0 ou menos.
			if(this.health <= 0) {
				this.ended = true;
			}

		},

		play: function(){
			var audio = document.getElementById("audio");
			audio.currentTime = 0;
			audio.play();
		},

		restart: function(){
			this.health = 100;
			// resetando o 'ended' para false quando recomeçamos o jogo.
			this.ended = false;
		}
	},

	computed: {

	}

});