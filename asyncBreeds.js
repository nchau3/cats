// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callbackWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    //console.log(data);
    //console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (error) callbackWhenDone(undefined);
    if (!error) callbackWhenDone(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// we try to get the return value
const printCatBreed = breed => {
  //console.log('Return Value: ', breed);
};

module.exports = breedDetailsFromFile

breedDetailsFromFile('Balinese', printCatBreed);
