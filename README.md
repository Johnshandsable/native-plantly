# Native Plantly

Native Plantly is a full-stack CRUD application where users can get native plants by their location, search for native plants, and add them to gardens. This application was created as a way to better track sections for a native wildlife garden. If you're planning on creating your own native wildlife garden, this application will be perfect for you. Unlike other applications which search for native plants based on your location, this application will allow you to create gardens and add plants to specific gardens. This application uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`). A full deployment of this application can be found at [Heroku](https://still-atoll-92787.herokuapp.com/home).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Nodemon](https://nodemon.io/)
- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [React](https://reactjs.org/)

## Create database and table

If you want to run this app locally, make sure to copy and paste the database.sql file after creating a database named 'plantly'.

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:

  ```
  TREFLE_API_KEY=your_token_here
  SERVER_SESSION_SECRET=your_secret_here
  PLANT_ID_KEY=your_token_here

  ```

  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. [Import the sample routes JSON file](./PostmanPrimeSoloRoutes.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Application Structure

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

- src/components
  - AboutPage/AboutPage
  - App/App
  - Buttons/Buttons
  - DetailView/DetailView
  - Dropdown/Dropdown
  - Footer/Footer
  - Garden/Garden
  - LoginForm/LoginForm
  - LoginPage/LoginPage
  - LogOutButton/LogOutButton
  - Nav/Nav
  - PlantItem/PlantItem
  - PlantList/PlantList
  - ProtectedRoute/ProtectedRoute
  - RegisterForm/RegisterForm
  - RegisterPage/RegisterPage
  - SearchBar/SearchBar
  - Tables/Tables
  - UserPage/UserPage
