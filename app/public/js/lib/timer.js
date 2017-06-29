var Timer = function() {
  this.timeDifference = 0;
  this.timeStart = 0;
  this.timeStop = 0;
};

Timer.prototype = {
  start: function() {
    this.timeStart = new Date().getTime();
  },
  update: function() {
    timeInstance = new Date().getTime();
    this.timeDifference += timeInstance - this.timeStart;
  },
  reset: function() {
    this.timeDifference = 0;
    this.timeStart = 0;
    this.timeStop = 0;
  },
  getTimeDiff: function() {
    return this.timeDifference;
  }
};
