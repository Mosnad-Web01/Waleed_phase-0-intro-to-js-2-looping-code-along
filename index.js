const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger; // Helps debug and inspect values
  }
  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event) {
  let messages = [];

  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return messages;
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(number) {
  let i = number;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}

countDown(10);
