/******************************************
Quotes Generator
******************************************/

const body = document.querySelector('body');

let quotes = [
  {
    quote:"Make it work, make it right, make it fast.",
    source:"Kent Beck"
  },
  {
    quote:"Stay hungry, stay foolish",
    source:"Steve Jobs"
  },
  {
    quote:"Don’t count the days, make the days count.",
    source:"Muhammad Ali"
  },
  {
    quote:"In order to be irreplaceable one must always be different.",
    source:"Coco Chanel"
  },
  {
    quote:"Be kind whenever possible. It is always possible.",
    source:"Dalai Lama"
  },
  {
    quote:"It always seems impossible until it’s done.",
    source:"Nelson Mandela"
  },
  {
    quote:"Love the life you live. Live the life you love.",
    source:"Bob Marley"
  },
  {
    quote:"By failing to prepare, you are preparing to fail.",
    source:"Benjamin Franklin"
  },
  {
    quote:"I came, I saw, I conquered.",
    source:"Julius Caesar"
  },
  {
    quote:"To be, or not to be, that is the question.",
    source:"William Shakespeare"
  },
  {
    quote:"Float like a butterfly, sting like a bee.",
    source:"Muhammad Ali"
  },
  {
    quote:"You only live once, but if you do it right, once is enough.",
    source:"Mae West"
  },
  {
    quote:"Good artists copy, great artists steal.",
    source:"Pablo Picasso"
  },
  {
    quote:"Be proud of who you are.",
    source:"Eminem"
  },
  {
    quote:"It’s fun to do the impossible.",
    source:"Walt Disney"
  },
  {
    quote:"Have no fear of perfection, you’ll never reach it.",
    source:"Salvador Dali"
  },
  {
    quote:"If not us, who? If not now, when? ",
    source:"John F. Kennedy"
  },
  {
    quote:"I would like to die on Mars. Just not on impact.",
    source:"Elon Musk"
  },
  {
    quote:"Talk is cheap. Show me the code.",
    source:"Linus Torvalds"
  },
  {
    quote:"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    source:"Martin Fowler"
  },
  {
    quote:"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    source:"John Woods"
  },
  {
    quote:"Give a man a program, frustrate him for a day.Teach a man to program, frustrate him for a lifetime.",
    source:"Muhammad Waseem"
  },
  {
    quote:"Code is like humor. When you have to explain it, it’s bad.",
    source:"Cory House"
  },
  {
    quote:"Experience is the name everyone gives to their mistakes.",
    source:"Oscar Wilde"
  },
  {
    quote:"Your love makes me strong. Your hate makes me unstoppable.",
    source:"Cristiano Ronaldo"
  }
];

//function to change background color
function changeBackground() {
  var randomColor = `
    rgb(
      ${Math.floor(Math.random() * 100)},
      ${Math.floor(Math.random() * 100)},
      ${Math.floor(Math.random() * 100)}
    )
  `;
  
  body.style.backgroundColor = `${randomColor}`;
}

//function to get a random number
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  let randomQuote = array[randomNum];
  return randomQuote;
}

//function to print random quote
function printQuote() {
  let message = "";
  let quoteObject = getRandomQuote(quotes);

  message += `<p class="quote">${quoteObject.quote}</p>`;
  message += `<p class="source">${quoteObject.source}`;
  if(quoteObject.citation) {
    message += `<span class="citation">${quoteObject.citation}</span>`;
  }
  if(quoteObject.year) {
    message += `<span class="year">${quoteObject.year}</span>`;
  }
  message +=`</p>`;

  changeBackground();
  document.getElementById('quote-box').innerHTML = message;
}

printQuote();

function refresh() {
  window.setInterval(printQuote,8000);
}

refresh();

//Click Event Listener for Show Another Quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);