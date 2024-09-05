// Timer.js
class Timer {
    constructor() {
      this.startTime = 0;
      this.elapsed = 0;
      this.running = false;
      this.paused = false;
      this.requestId = null;
    }
  
    start() {
      if (this.running) return;
      this.startTime = performance.now();
      this.running = true;
      this.paused = false;
      this.requestId = requestAnimationFrame(this.update.bind(this));
    }
  
    pause() {
      if (!this.running || this.paused) return;
      cancelAnimationFrame(this.requestId);
      this.elapsed += performance.now() - this.startTime;
      this.paused = true;
      this.running = false;
    }
  
    resume() {
      if (this.running || !this.paused) return;
      this.startTime = performance.now();
      this.paused = false;
      this.running = true;
      this.requestId = requestAnimationFrame(this.update.bind(this));
    }
  
    stop() {
      if (!this.running) return;
      cancelAnimationFrame(this.requestId);
      this.elapsed += performance.now() - this.startTime;
      this.running = false;
    }
  
    reset() {
      this.startTime = 0;
      this.elapsed = 0;
      this.running = false;
      this.paused = false;
      this.requestId = null;
    }
  
    update() {
      if (this.running) {
        this.requestId = requestAnimationFrame(this.update.bind(this));
      }
    }
  
    getElapsedTime() {
      if (this.running) {
        return this.elapsed + (performance.now() - this.startTime);
      }
      return this.elapsed;
    }
  }
  
  export default Timer;
  