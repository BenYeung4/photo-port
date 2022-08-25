Start off with : npx create-react-app photo-port

npx - package runner tool simplifies the installation and runing process of devDependencies. Rather than installing CRA and then running i, npx will try using the local installation, if there isnt any, npx will install it for us.

create-react-app - is the created source code, photo-port is just the name

npm install the updated package and npm start

react-dom package - serves as the entry point to the DOM to render the JSX by using the virtual DOM.

npm install @testing-library/react @testing-library/jest-dom --save-dev
library to do tests in React

npm install -D gh-pages - a devDependency to deploy the website

modify package.json to include the hoempage as seen below, update <username> with own github username

"homepage": "http://<username>.github.io/photo-port",

update scripts in package.json with the following:

"predeploy": "npm run build",
"deploy": "gh-pages -d build

The React Testing Library, which provides functions that will help test React components, including the capacity to render components and query functions that can return DOM elements.

The jest-dom package, which is a library that extends Jest with custom matchers to enable inspection of various parts of the DOM.
