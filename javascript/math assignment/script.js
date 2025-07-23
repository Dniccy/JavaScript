let sample = [4.2, 5.1, 3.8, 4.7, 5.3];

function calculateMean (sample) {
    var sum = 0;
    for (var i = 0; i < sample.length; i++) {
        sum += sample[i];
    }
    return sum / sample.length;
}

// Calculate the mean
var mean = calculateMean(sample);
var roundedMean = Math.round(mean * 100) / 100;
var resultMessage = "Mean: " + roundedMean;
console.log(resultMessage);

let y = "Hello" + " " + "World!";