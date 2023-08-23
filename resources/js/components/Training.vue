<template>
    <button @click="startTimers" class="mx-3">Start</button>
    <button @click="stopTimers" class="mx-3">Stop</button>
    <div v-for="(training, index) in trainings" :key="index">
    	<timer ref="timers" :train="training"  @timer-zero="timerZero(training)"></timer>
    </div>
</template>

<script>


export default {
  data() {
    return {
    	trainings: [
    		// Warmup
    		{
	    		time: 5,
	    		name: "Dance Like it ain't No Tomorrow",
	    		image: 'https://media.giphy.com/media/QEHGsUsaAJzx8GvfG9/giphy.gif',
	    		isRunning: false,
	    	},
	    	{
	    		time: 5,
	    		name: 'Plank Hold',
	    		image: 'images/plank-hold.png',
	    		isRunning: false,
	    	},
	    	{
	    		time: 2,
	    		name: 'Relax',
	    		image: 'https://media.giphy.com/media/xVOStTxZO036wsH42l/giphy.gif',
	    		isRunning: false,
	    	},
	    	{
	    		time: 5,
	    		name: 'Hop A to B',
	    		image: 'images/hop-A-B.png',
	    		isRunning: false,
	    	},
	    	{
	    		time: 2,
	    		name: 'Relax',
	    		image: 'https://media.giphy.com/media/xVOStTxZO036wsH42l/giphy.gif',
	    		isRunning: false,
	    	},
	    	{
	    		time: 5,
	    		name: 'Push Up Hold',
	    		image: 'images/push-up-hold.png',
	    		isRunning: false,
	    	},
	    	{
	    		time: 2,
	    		name: 'Relax',
	    		image: 'https://media.giphy.com/media/xVOStTxZO036wsH42l/giphy.gif',
	    		isRunning: false,
	    	},
	    	{
	    		time: 5,
	    		name: 'Squat Hold',
	    		image: 'images/squat-hold.png',
	    		isRunning: false,
	    	},
	    	// Streching out
    	],
    	currentTrainingIndex: 0,
    }
  },

  methods: {
  	startTimers() {
      this.startNextTimer();
    },
    startNextTimer() {
      this.trainings[this.currentTrainingIndex].isRunning = true;
      this.$refs.timers[this.currentTrainingIndex].startTimer();
    },
    timerZero(training) {
      this.currentTrainingIndex++;
      if (this.currentTrainingIndex < this.trainings.length) {
        this.startNextTimer();
      }
    },
    stopTimers() {
      this.$refs.timers[this.currentTrainingIndex].stopTimer();
    }
  },

}
</script>