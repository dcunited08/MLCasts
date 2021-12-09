let outputs = [];
const predefinedPoint = 300;

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push({ dropPosition, bounciness, size, bucketLabel });
}



function runAnalysis() {
  const testSetSize = 100;
  const k = 3;

  let tmp = _.chain(outputs)
    .map(row => [distance(row.dropPosition), row.bucketLabel])
    .sortBy(row => row[0]).value();
  console.log(tmp);
  outputs = [];
}

function distance(point) {
  return Math.abs(point - predefinedPoint);
}
