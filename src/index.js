const schedule = require('node-schedule');

const job = schedule.scheduleJob({hour: 18, minute: 57, dayOfWeek: 3}, function(){
    console.log('Time for tea!');
  });
  