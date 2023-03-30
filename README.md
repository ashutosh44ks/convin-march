# Deployment (Github Pages)
[Click here to view deployment](https://ashutosh44ks.github.io/convin-march/)
(This app is best viewed in local, see below, as JSON-server is used as dummy backend)

## Technologies Used
- React, React Router, React-Redux, Redux Middleware - Thunk, Tailwind CSS
- JSON-server (as dummy backend)

## How to run locally with local server?
1. Clone repository and Switch to ```dev``` branch
2. Run command ```json-server --watch db.json --port 3004``` to start the server
3. Run command ```npm start``` to start client

### deployment is based on ```master``` branch
Run command ```npm start``` to test prod environment.

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
