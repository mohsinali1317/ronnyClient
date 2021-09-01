// Calculate dynamically no. years of experience
const startDate = new Date('6/4/2019');
const currentDate = new Date();
const experienceTime = Math.abs(currentDate - startDate);
const experienceDays = Math.ceil(experienceTime / (1000 * 60 * 60 * 24));
const yearsExperience = document.querySelectorAll('.years-experience');

// PMA Digital = 2 years 5 months (January 2017 - May 2019)
const pma = 881;
// Thoughtbubble Ltd = 8 months (April 2016 - November 2016)
const thoughtbubble = 224;
// Best&Co = 9 months (June 2015 - February 2016)
const bestandco = 274;
// Optimax = 6 months (December 2014 - May 2015)
const optimax = 183;

const experienceNumber = experienceDays + pma + thoughtbubble + bestandco + optimax;

yearsExperience.forEach((item) => {
  const calculatedExperience = Math.ceil(experienceNumber / 365);
  item.innerHTML = calculatedExperience;
});
