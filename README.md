# StoryTellers - Create Public and Private Stories
StoryTellers serves as a platform where users can securely log in using their Google accounts and publish their stories from their lives. The user has the choice to publish their story publically and share with other application users, or select the private option to securely hide their stories from other users. Furthermore, users can create, retrieve, update, and delete their stories. 

**Live Website:** 

![StoryTellers Landing Login Page](/StoryTellersLogin.png)

## How It's Made:

**Tech used:** JavaScript, Node.js, Express, Passport.js, MongoDB, Handlebars, Materialize, CSS

Built on the backbone of Node.js and Express, StoryTellers uses the Model-View-Controller (MVC) software architecture paradigm to organize the codebase and make it easier to maintain and extend in the near-future.

Requests are routed to the appropriate router to retrieve, input, and display requested information (e.g. login landing page, dashboard, user profile, etc). Users are able to create and edit their own stories, as well as retrieve and delete requested stories. 

Stories are inputted into our MongoDB database. Using Mongoose, I have constructed schemas to be able to define the structure of the inputted document, ensuring our documents to be organized. Additionally, these documents are able to be exported to be used for further GET, PUT, and DELETE requests.

By using Handlebars and Materialize I am able to create a consistent uniform appearance and feel to StoryTellers. Renderings include a login page for new users, a dashboard for logged in users displaying the user's public and priate stories, a user profile page displaying public stories from the respective user, and error pages. 

To ensure a secure experience for users, I have incorporated the Passport.js middleware and the Google OAuth 2.0 strategy. This allows for a seamless user experience where users can login and logout using their Google accounts. 

## Optimizations
Additional optimizations for this project are currently on-going.

* Unique site account if user prefers to not login using Google account.
* Build a comment section so that users can leave comments on other's stories.
* Add back buttons for easier navigation. 

## Lessons Learned:

Gaining familiarity with Passport.js and it's varying strategies allows me to add a layer of security to my web applications. Moving forward, I can see myself using Passport.js as a means to allow for a seamless user experience while maintaining a layer of authentication. 

This was the first time I have used Handlebars as my templating engine, as well as Materialize as an additional framework. The process of a creating a uniform layout and partials has opened up an abundance of ideas in how I hope to create future sites and web applications. I hope to use these tools and technologies as a means to cater to the users' experience. 