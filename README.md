# Fishing-Fanatics
Share your best spots with fellow fishing fanatics!

Access our live website and join us at: 

https://polar-ridge-73411-3a05ece12937.herokuapp.com/

[![License: MIT](https://img.shields.io/badge/License-MIT-E365FF.svg)](https://opensource.org/licenses/MIT)

## Project Description
---
```
The objective of this project was to design a user-friendly web application that enables fishing enthusiasts to interact with each other and share information about their favourite fishing spots and fishing experiences via posts on the application. The application was created to enable existing users to return and login or new users to sign up to gain access to the application. 

After sign in, users are presented with a page containing the 4 seasons and they can click on any season to make a post relating to the season they went fishing. Users will also see previous posts from other users. To make a post, the user will be required to complete a form and then also select the specie of fish caught from a drop-down list of fish species. The user can also add a new specie of fish to the existing species if the fish they caught is not already there.

```

## Table of Contents
---

- [Description](#project-description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage-and-screenshots)
- [Technologies](#technologies)
- [Credits](#credits)
- [License](#license)

## User Story
---
```
As a fishing enthusiast
I want to share my fishing spots with fellow fishers
So that I can add value to my fishing community

I want to highlight what season I fished in
So that I can improve the data of fishing success

I want to see other people’s recommended fishing spots
So that I can fish those spots too and catch good fish

I want to share my thoughts by commenting
So that I can let my fellow fishers know what success I have had
```
## Acceptance Criteria
---
```
WHEN I open the web application,
THEN the home page should include a nav bar with "Home", "Login" and "Sign up" buttons.

WHEN I click on either the "Login" or "Signup" button, 
THEN I am taken to a new page with a "Login" and "Signup" form.

WHEN I log in as an existing user or I sign-up as a new user, 
THEN I am presented with a new page displaying the 4 seasons with images representing each season.

WHEN I click on a season,
THEN I am taken to a new page displaying previous fishing posts for that season, a form to post a new fishing spot and a form to add a new specie of fish caught which is not part of the existing species in the drop-down list.

WHEN I fill-out the form to post a new fishing spot,
THEN my post is displayed alongside other posts from previous users.

WHEN I accidentally close my browser and immediately re-open it,
THEN my session continues and I remain logged in.

WHEN I click on the "logout" button,
THEN I am taken to the home page.
```

## Installation
---

+ Access repository here:
https://github.com/robinsonfdossantos/Fishing-Fanatics

+ Clone to your local machine within the location of your desire:

```md
git clone git@github.com:robinsonfdossantos/Fishing-Fanatics.git
```

+ Create a new '.env' file within the FISHING FANATICS root directory, populate it with the following details:
```md
  DB_NAME='fishing_db'
  DB_USER='<your-MYSQL-username>'
  DB_PASSWORD='<your-MySQL-password>'
 ```
 
+ Utilising terminal install package dependancies:
```md
  npm i 
  ```

+ Open and log in to the mysql shell:
```md
  mysql -u root -p
  ```

+ Create the database:
 ```md
  source schema.sql;
  ```

+ Open the server.js file in a new terminal and create the tables and relationships:
```md
  npm run seed
  ```

+ Fire it up:
```md
  npm start
  ```

+ Happy days at http://localhost:3001! 😁

## Usage and Screenshots
---
You will be greeted by the home page:
![FF-Homepage](/public/images/readmeref/FFHomepage.png)

From here you can log in or sign up:
![FF-Login](/public/images/readmeref/FFLogin.png)

Now you can access the season of your desire:
![FF-Seasons](/public/images/readmeref/FFSeasons.png)

View existing posts or make your own, it's all about a good time!
![FF-Posts](/public/images/readmeref/FFPosts.png)

## Technologies
---

```
The project was developed employing the *Model-View-Controller (MVC)* methodology depicting Separation of Concerns.
It incorporated several code libraries including but not limited to the following: `sequelize`, `mysql2`, `express.handlebars`, `express.js`, `node.js` e.t.c.
Additional technology chosen to meet criteria is `newsAPI`
```

## Credits
---
Web app developed by:
- Robinson Dos Santos
- Kanayochi Ifediora
- Iggy Gaudio

## License
---
MIT Licensed unless otherwise indicated.


