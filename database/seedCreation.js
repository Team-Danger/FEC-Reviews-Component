const { LoremIpsum } = require('lorem-ipsum');
const { name } = require('faker');

// set up lorem ipsum params
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 1,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

// ===== HELPER FUNCTIONS =====
const pad3 = (numString) => {
  if (numString.length > 3 || numString.length <= 0) {
    return undefined;
  }
  return numString.padStart(3, '0');
};

const average = (array) => array.reduce((a, b) => a + b) / array.length;

const hasResponse = () => (Math.floor(Math.random() * 2) === 0);

const randomNumber = (min, max) => (Math.floor(Math.random() * (max - min)) + min);

const generateReviews = (size) => {
  const reviews = [];
  for (let count = 1; count <= size; count += 1) {
    const reviewObj = {};

    reviewObj.reviewer_name = name.firstName();
    reviewObj.dp = randomNumber(1, 30).toString();
    reviewObj.body = lorem.generateParagraphs(1);
    if (hasResponse()) {
      reviewObj.respond = lorem.generateParagraphs(1);
    }

    reviews.push(reviewObj);
  }
  return reviews;
};

// Math.floor(Math.random() * (max - min + 1) + min)

// ====== ENTRY CREATION FUNCTION =====
const seedEntry = (seed) => {
  // ===== STORAGE SETUP =====
  const entry = {};
  const averages = [];

  // ===== CHECKS =====
  if (typeof seed !== 'number') {
    return undefined;
  }

  // ===== DUMMY DATA CREATION ======

  for (let count = 1; count <= 6; count += 1) {
    averages.push(randomNumber(10, 50) / 10);
  }
  const [cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg] = averages;
  entry.padded_id = pad3(seed.toString());
  entry.user_dp = randomNumber(1, 100).toString();
  entry.user_name = name.firstName();
  entry.avg = average(averages).toFixed(2);
  entry.review_size = randomNumber(6, 10);
  entry.clean_avg = cleanAvg;
  entry.comm_avg = commAvg;
  entry.accuracy_avg = accuracyAvg;
  entry.value_avg = valueAvg;
  entry.location_avg = locationAvg;
  entry.checkin_avg = checkinAvg;
  entry.reviews = generateReviews(entry.review_size);

  return entry;
};

module.exports = seedEntry;
