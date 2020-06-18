const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const faker = require('faker');
const { name, random } = require("faker");

//set up lorem ipsum params
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 1
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

// ===== HELPER FUNCTIONS =====
const pad3 = numString => {
  if (numString.length > 3 || numString.length <= 0) {
    console.log('Cannot pad. Please check')
    return;
  }
  return numString.padStart(3, '0');
}

const average = array => array.reduce((a, b) => a + b) / array.length;

const hasResponse = () => Math.floor(Math.random() * 2) === 0 ? true : false;

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

const generateReviews = () => {
  const randomSize = randomNumber(6, 10);

  let reviews = [];
  for (let count = 1; count <= randomSize; count++) {
      let reviewObj = {};

      reviewObj.dp = randomNumber(1, 30).toString();
      reviewObj.body = lorem.generateParagraphs(1);
      if (hasResponse()){
        reviewObj.respond = lorem.generateParagraphs(1);
    }

    reviews.push(reviewObj)
  }
  return reviews;
}

// Math.floor(Math.random() * (max - min + 1) + min)

// ====== ENTRY CREATION FUNCTION =====
const seedEntry = seed => {
  // ===== STORAGE SETUP =====
  let entry = {};
  let averages = [];

  // ===== CHECKS =====
  if (typeof seed !== 'number') {
    console.log('Invalid')
    return;
  }

  //===== DUMMY DATA CREATION ======

  for (let count = 1; count <= 6; count++) {
    averages.push(randomNumber(10, 50) / 10);
  }

  seed = seed.toString();

  entry.paddedId = pad3(seed);
  entry.name = faker.name.firstName();
  entry.dp = randomNumber(1, 100).toString();
  entry.avg = average(averages).toFixed(2);
  entry.clean_avg = averages[0];
  entry.comm_avg = averages[1];
  entry.accuracy_avg = averages[2];
  entry.value_avg = averages[3];
  entry.location_avg = averages[4];
  entry.checkin_avg = averages[5];

  console.log(entry);
  entry.reviews = generateReviews();

  return entry;
}

module.exports.seedEntry = seedEntry;