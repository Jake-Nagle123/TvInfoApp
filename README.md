# Tv Info App 
## Full Stack Web Development 2 - Assignment_1

## Overview
Develop a SPA using the React framework to create an app using an external API source which returns information on the media.

## Project Description
The application displays multiple media pages received an external API request. The API data is received from a Movie Database(TMDB), which has great variations in the information it gives. Through the use of API fetch calls, components and templates I created four different pages including a most popular movies page, a tv series page, actors page, and a favourite actors page.

The actors and tv series page both have a more info button which leads to a detailed page with a parameter value of the id of the chosen element. Actors can be marked as favourites by clicking the star and they will appear on the favourite actor page. They can be removed from the favourites page by clicking the bin button.

Caching is implemented on all of the web pages to prevent unnecessary re-fetching. This was done through the use of the react-query library of React, query Functions and the useQuery hook. Vite was used in the project to give a fast page refresh. The four pages were built locally first using the IDE Visual Studio Code and the React framework, and later deployed online through the deployment site Vercel.

I put together information on a combined credits API call and the shape of what the data may look like into the interface. I had intended to use this for a multi-criteria search for the actors which is why I left the no filter on the page. However I found the people data more of a challenge than the data for movies or tv series but I left the code in there with the intention of developing the application in the future.

## Set up and run project
#### Needed for Project
* vite
* storybook
* mui
* vercel
* tmdb
* Visual Studio Code

#### Copy Github project Url
* Click on code
* Copy HTTPS
 
#### Install Project
* npm install

#### Open account on TMDB
* Follow https://www.themoviedb.org/
* Click on the sign up button
* Give your account details

#### Open account on Vercel
* Follow https://vercel.com/login
* Give account details

#### Vercel
* Import project via Github
* Give setup of project details

Note: May need to import .env keys into environment variables for external APIs

Your project is now deployed!

## Links
#### Links to my project
1. GitHub: https://github.com/Jake-Nagle123/TvInfoApp.git
2. Vercel: multi-media-channel.vercel.app
3. Youtube link: https://youtu.be/0rNVyG4LWx8

#### Link used to begin project
1. https://github.com/Jake-Nagle123/TvInfoApp.git

#### Helpful link
1. MUI - https://mui.com/
