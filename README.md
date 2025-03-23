# Description
Small typescript project that i made as part of a job application proscess
# Prerequisites

- An installation of Node.js version 18.16.1 or higher (earlier versions might work but have not been tested).

- Acess to the secret .env file.

<br>

# How to run the application locally

1. Add the provided .env file to the repositories root directory.

2. Run the following commands in the project directory:
    - `npm install` to install required dependencies and packages.
    - `npm run dev` to run the application.

3. The app is now running on port 5173 and can be accesed at [this](http://localhost:5173) adress.
 
<br>

# Deployment

The app is hosted on Azure and can be accesed at [this](https://gray-pond-002eb6603.5.azurestaticapps.net/) adress.

Any changes to the main branch are automatically deployed to Azure using Github Actions. 

<br>

# Testing

Run `npm test` in the project directory to execute the test suite.

<br>

# Troubleshooting

1. Verify your node installation or upgrade to the most recent version (23.0.0).

2. Shut down any other services that are running on port 5173.

3. verify that you have the env.ts file in the src folder.

4. contact technical support (nelson.janusson@gmail.com).

<br>

# Structure

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂test
 ┣ 📂types
```
