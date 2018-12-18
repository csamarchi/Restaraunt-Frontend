# GrubList Restaurant App

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

* My App let's a user search through all restaurants located in Austin, TX, review their cuisine and website, and then add it to their list of favorite restaurants. It's like a playlist but for food. 

* The welcome page is the first thing the user is greeted with. From there, they can either sign up and make an account or log in if they are a returning user. The landing page is the Home page where they can search any key word in the search bar and the necessary restaurants will pop up. Zomato's API provides over 4,000 matches in their database. The user can click on individual places to see more details of the restaurant including a url to their website.

* From the Home page the user can navigate to their profile page to filter to their chosen favorite places to eat.  

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

# Screenshots: 

![alt text](/images/welcome.png "Logo Title Text 1")

![alt text](/images/register.png "Logo Title Text 1")

![alt text](/images/login.png "Logo Title Text 1")

![alt text](/images/home.png "Logo Title Text 1")

![alt text](/images/homesearch.png "Logo Title Text 1")

![alt text](/images/matts.png "Logo Title Text 1")

![alt text](/images/profile.png "Logo Title Text 1")

![alt text](/images/beginning.png "Logo Title Text 1")

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

![alt text](/images/wireframe.JPG "Logo Title Text 1")

# API 
My fetch calls to the Zomato API which pulls down only Austin, TX specific restaurants. The API only allows to show 20 at a time even though many more our found in the call. I make another fetch call to my local Express API (my Mongodb Database) which happens in my main container which is my RestaurantContainer for adding a restaurant to the user's profile page. I also fetched calls in my login and register, as well as logout the user by id using req.sessions


# MVP Overview
* A Fullstack application, built using Node, Express, and Mongoose, that serves JSON.
* Front-end React code that updates the UI and makes requests to the API.
* Use a third Party API

![alt text](/images/logout.png "Logo Title Text 1")

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

## Install

* Run `npm install` within the project directory
* Run `npm start` for dev

* Download Backend Restaurant Repo from https://github.com/csamarchi/Restaraunt-Backend
* Run `npm install`
* Run `nodemon` for dev

* Open third terminal and run `mongo`

