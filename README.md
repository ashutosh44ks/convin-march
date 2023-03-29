# Deployment (Github Pages)
[Click here to view deployment](https://ashutosh44ks.github.io/convin-march/)

## Technologies Used
- React, React Router, React-Redux, Redux Middleware - Thunk, Tailwind CSS
- JSON-server (as dummy backend)

## How to run locally with local server?
1. Use REACT_APP_LOCAL_API_URL instead of REACT_APP_BASE_API_URL from the .env file in all api calls
2. Run command ```json-server --watch db.json --port 3004``` to start the server
3. Run command ```npm start``` to start client

## How to run locally?
1. Run command ```npm start``` to start client

## Problem Statement
Create an application where the following functionalities are present -
1. User can create, delete and edit a card
2. The card must contain name and a video/mp3 link
3. Each card can be created under a bucket (eg : Entertainment Videos, Education Videos, Etc )
4. The user has the flexibility to Name this bucket according to his/her choice.
5. User can move a card from one bucket to an other bucket.
6. On clicking on the card a modal with an iframe should open which starts playing the video
7. User can delete a single card or multiple card under a single bucket at once
8. There should be a separate tab called history which lists the mp3/mp4 links that you have played i.e the card name, the link and the time it was played
