let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = "Welcome to DOM's page";
  


  // Part 2
  const body = document.querySelector('body');
  body.style.backgroundColor = "voilet";

  // Part 3
  const favoriteThingsList = document.querySelector('#favorite-things');
  const favoriteThingsItems = favoriteThingsList.querySelectorAll('li');
  favoriteThingsList.removeChild(favoriteThingsItems[favoriteThingsItems.length - 1]);

  // Part 4
  const specialTitles = document.querySelectorAll('.special-title');
  specialTitles.forEach(title => {
    title.style.fontSize = "2rem";
  });

  // Part 5
  const pastRacesList = document.querySelector('#past-races');
  const chicagoRace = pastRacesList.querySelector('li');
  pastRacesList.removeChild(chicagoRace);

  // Part 6
  const newCity = "New York"; // Replace with the name of the new city
  const pastRaces = document.querySelector('#past-races');
  const newRace = document.createElement('li');
  newRace.textContent = newCity;
  pastRaces.appendChild(newRace);

  // Part 7
  const blogPosts = document.querySelector('.blog-posts');
  const newBlogPost = document.createElement('div');
  newBlogPost.classList.add('blog-post');
  const blogPostTitle = document.createElement('h2');
  blogPostTitle.textContent = NewYork;
  const blogPostContent = document.createElement('p');
  blogPostContent.textContent = "New city.";
  newBlogPost.appendChild(blogPostTitle);
  newBlogPost.appendChild(blogPostContent);
  blogPosts.appendChild(newBlogPost);

  // Part 8
  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9
  const blogPostElements = document.querySelectorAll('.blog-post');
  blogPostElements.forEach(post => {
    post.addEventListener('mouseout', function() {
      post.classList.toggle('purple');
    });
    post.addEventListener('mouseenter', function() {
      post.classList.toggle('red');
    });
  });
});



