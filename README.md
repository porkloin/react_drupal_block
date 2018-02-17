# React Drupal Block
This Drupal 8 module serves as an example implementation of a React-powered Drupal block that passes the node context (via UUID) to the child React application.

It is build primarily around an ejected [Create React App](https://github.com/facebook/create-react-app) application which is attached as a JS library to an exposed block Drupal module.

To build:

* Install the module to your Drupal site by cloning this repository to the `modules` folder of your site: `git clone https://github.com/porkloin/react_drupal_block`
* `cd modules/react_drupal_block/react-src`
* Install node packages: `yarn install`
* Compile the react application: `yarn build`
* Enable the module: `drush en -y react_drupal_block` or via Admin>Extend
* Place the block on your site via Admin>Structure>Block

Note: whenever changes are made the source files of the React app (`react-src/src/`) you will need to re-compile your React app for Drupal to pick up on the code changes.

To run a local development server for ONLY your React app:
* `cd modules/react_drupal_block/react-src && yarn start`
* Your app will be served at localhost:3000

