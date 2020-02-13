/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/greendook
*/
// const axios = require('axios').default;

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

  
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} /> avatar_url
  <div class="card-info"> 
    <h3 class="name">{users name}</h3> name
    <p class="username">{users user name}</p> login
    <p>Location: {users location}</p> location
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a> html_url
    </p>
    <p>Followers: {users followers count}</p> followers
    <p>Following: {users following count}</p> following
    <p>Bio: {users bio}</p> bio
  </div>
</div>

*/


function newCard(obj) {
  // define new elements
  const card = document.createElement('div');
  const imageURL = document.createElement('img');
  const cardInfo = document.createElement('div');
  const usersName = document.createElement('h3');
  const usersUsername = document.createElement('p');
  const usersLocation = document.createElement('p');
  const profile = document.createElement('p');
  const usersGithub = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const usersBio = document.createElement('p');
  // setting up the structure
  card.append(imageURL, cardInfo, usersName, usersUsername, usersLocation, profile, followers, following, usersBio);

  profile.textContent = "Profile:"

  profile.append(usersGithub);

  // add the classes to the elements
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  usersName.classList.add('name');
  usersUsername.classList.add('username')
  // set text content
  imageURL.src = obj.avatar_url;
  usersName.textContent = obj.name;
  usersUsername.textContent = obj.login;
  usersLocation.textContent = `Location: ${obj.location}`;
  usersGithub.textContent = obj.html_url;
  usersGithub.setAttribute("href", obj.html_url);
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  usersBio.textContent = `Bio: ${obj.bio}`;

  return card;
}
const container = document.querySelector('.cards');

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "greendook"
];

followersArray.forEach(item => {
  axios.get(`https://api.github.com/users/${item}`)
    .then(function (response) {
      // handle success

      const card = newCard(response.data)
      container.appendChild(card)
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

})




/* List of LS Instructors Github username's:
tetondan
dustinmyers
justsml
luishrd
bigknell
*/
