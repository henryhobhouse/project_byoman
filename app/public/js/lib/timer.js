var Timer = function() {
  this.time_diff = 0;
  this.time_start = 0;
  this.time_stop = 0;
};

Timer.prototype = {
  start: function() {
    this.time_start = new Date().getTime();
  },
  stop: function() {
    this.time_stop = new Date().getTime();
    this.time_diff += this.time_stop - this.time_start;
    this.time_stop = 0;
    this.time_start = 0;
  },
  reset: function() {
    this.time_diff = 0;
    this.time_start = 0;
    this.time_stop = 0;
  },
  get_time_diff: function() {
    return this.time_diff;
  }
};
