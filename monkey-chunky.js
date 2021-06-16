fetch('https://snack.expo.io/@karanaggarwalwhjrstudent/class-66---ternary-operator-monkey-chunky-stage-4')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });