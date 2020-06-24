const seedEntry = require('../database/seedCreation.js');

describe('Seeding Script Tests', () => {
  const seedOne = seedEntry(1);
  const { reviews } = seedOne;

  test('paddedId in seeds should be length 3 and padded with appropriate 0s in front', () => {
    const seedTens = seedEntry(10);
    const seedHundred = seedEntry(100);

    expect(seedOne.paddedId).toBe('001');
    expect(seedTens.paddedId).toBe('010');
    expect(seedHundred.paddedId).toBe('100');
  });

  test('section averages should be between 1 and 5', () => {
    const {
      cleanAvg, commAvg, accuracyAvg, valueAvg, locationAvg, checkinAvg,
    } = seedOne;

    const cleanCheck = cleanAvg >= 1 && cleanAvg <= 5;
    const commCheck = commAvg >= 1 && commAvg <= 5;
    const accuracyCheck = accuracyAvg >= 1 && accuracyAvg <= 5;
    const valueCheck = valueAvg >= 1 && valueAvg <= 5;
    const locationCheck = locationAvg >= 1 && locationAvg <= 5;
    const checkinCheck = checkinAvg >= 1 && checkinAvg <= 5;

    expect(cleanCheck).toBe(true);
    expect(commCheck).toBe(true);
    expect(accuracyCheck).toBe(true);
    expect(valueCheck).toBe(true);
    expect(locationCheck).toBe(true);
    expect(checkinCheck).toBe(true);
  });

  test('should contain 6 - 10 reviews', () => {
    expect(reviews.length).toBeLessThanOrEqual(10);
    expect(reviews.length).toBeGreaterThanOrEqual(6);
  });

  test('some reviews should have responses', () => {
    let hasResponse = false;

    for (let i = 0; i < reviews.length; i += 1) {
      if (reviews[i].respond) {
        hasResponse = true;
        break;
      }
    }

    expect(hasResponse).toBe(true);
  });
});
