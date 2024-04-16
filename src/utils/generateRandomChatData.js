const chatData = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg"
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/23/22/15/teen-photo-8466399_640.jpg"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    imageUrl: "https://pixabay.com/illustrations/girl-phone-cellphone-play-cartoon-8158685/"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_1280.jpg"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_1280.jpg"
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    imageUrl: "https://cdn.pixabay.com/photo/2023/11/02/11/31/woman-8360350_1280.jpg"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    imageUrl: "https://cdn.pixabay.com/photo/2024/02/06/20/58/couple-8558015_640.png"
  },
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/09/10/09/woman-8439000_640.png"
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    author: "Edmund Burke",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
    imageUrl: "https://dummyimage.com/300x300/000/fff"
  },
  {
    quote: "A person who never made a mistake never tried anything new.",
    author: "Albert Einstein",
    imageUrl: "https://cdn.pixabay.com/photo/2023/11/19/00/30/paris-8397488_640.jpg"
  },
  {
    quote: "We may encounter many defeats but we must not be defeated.",
    author: "Maya Angelou",
    imageUrl: "https://cdn.pixabay.com/photo/2023/12/09/10/09/woman-8439000_640.png"
  },

];

export function generateRandomChatData() {
  var data = chatData[Math.floor(Math.random() * chatData.length)];
  return data;
};