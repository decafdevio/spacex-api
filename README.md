# Space X Launches

![react](https://badgen.net/badge/React/18.2.0/purple?icon=git)
![bootstrap](https://badgen.net/badge/React-Bootstrap/2.5.0/blue?icon=git)
![axios](https://badgen.net/badge/Axios/0.27.2/yellow?icon=git)

### Display scheduled launches associated with SpaceX. This app maps through launches from the open API and displays them in a Bootstrap grid with additional information on each launch.

My first step was to install React framework, initialize a Git and install dependencies i think i may need: Axios and Bootstrap. I run the Space X open API through Insomnia to easily view what data i would get as a response. I proceeded to code Axios to connect to the API and set responses and error to state values. UseEffect runs the function and loads data on DOM load & component refresh. I send the response data through to the launch list and launch components. I'm having some trouble passing the ID through as a key to the correct element - will come back later. A ternary condition shows a refresh button unless launches are loading. I created a map to cut through the data and group them into individual launches. Using bootstrap grid i've built each launch into rows and columns, so far everything seems to be responsive. Added a second API call to get the rocket data, response was an infinite loop - thinking - it may work sending the props through a rocket component. Added flex, padding and justify content css. I would like to do more but i'm out of time.

## Installation

```bash
  npm install
```

## Run

To run this app use commands

```bash
  npm start
```

## Socials

<p align="left"> <a href="https://www.facebook.com/enitdev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/facebook.svg" width="32" height="32" /></a> <a href="https://www.github.com/enitdev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="32" height="32" /></a> <a href="https://enitial.hashnode.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/hashnode.svg" width="32" height="32" /></a> <a href="https://www.linkedin.com/in/enitdev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="32" height="32" /></a> <a href="https://www.stackoverflow.com/users/enitdev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/stackoverflow.svg" width="32" height="32" /></a> <a href="https://www.twitter.com/enitdev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/twitter.svg" width="32" height="32" /></a></p>

## Support Me

<a href="https://www.buymeacoffee.com/enitdev"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>
