const newYears = "1 Jan 2021";

function countDown(){
   const newYearsDate = new Date(newYears);
   const currentDate = new Date();

   const seconds = (newYearsDate - currentDate) / 1000;

   const days = Math.floor(seconds / 3600 / 24);
   const hours = Math.floor(seconds / 3600) % 24;

   console.log("%d days, %d hours", days, hours);
}

// initial call
countDown();

// setInterval(countDown, 1000);