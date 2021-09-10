function rand10(max) {
    return Math.floor(Math.random() * max);
  }

function multiRand(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(rand10(10)*multiRand(10));