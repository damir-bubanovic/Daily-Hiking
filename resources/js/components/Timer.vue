<template>
  <div class="container" v-if="isRunning === true">
	    <div class="flex justify-center">
	        <div class="flex">
	            <div class="p-4 mx-4 text-center">
	                <p class="text-9xl font-black text-blue-600">{{ minutes }}</p>
	                <p class="mt-2 text-lg">Minutes</p>
	            </div>
	            <div class="p-4 mx-4 text-center">
	                <p class="text-9xl font-black text-blue-600">{{ seconds }}</p>
	                <p class="mt-2 text-lg">Seconds</p>
	            </div>
	        </div>
	    </div>
	    <div class="flex justify-center">
	    	<p class="text-4xl font-black p-4 text-blue-500">{{ train.name }}</p>
	    </div>
	    <div class="flex justify-center">
	    	<img :src="train.image" alt="Image" class="max-w-lg" />
	    </div>
	</div>
</template>

<script>
export default {

	props: {
	  train: {
	    type: Object,
	    required: true,
	  },
	},

  data() {
    return {
    	currentTime: 0,
      intervalId: null,
      isRunning: false,
    };

  },
  computed: {
    minutes() {
      return Math.floor(this.currentTime / 60);
    },
    seconds() {
      return this.currentTime % 60;
    },

  },
  methods: {
    startTimer() {
    	this.currentTime = this.train.time;
    	this.isRunning = this.train.isRunning;
      this.intervalId = setInterval(this.updateTimer, 1000);
    },
    stopTimer() {
    	this.currentTime = 0;
      this.isRunning = false;
      clearInterval(this.intervalId);
    },
    updateTimer() {
      if (this.currentTime > 0) {
        this.currentTime--;
      } else {
      	this.currentTime = 0,
      	this.stopTimer();
      	this.$emit('timer-zero');
      }
    },
  },
  beforeDestroy() {
  	this.currentTime = 0;
  	this.isRunning = false;
    clearInterval(this.intervalId);
  },

};
</script>

