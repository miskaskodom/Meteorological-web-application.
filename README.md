<h1>Meteorological-web-application.</h1>

<h1>Description</h1>
Client part for a web service with weather forecast. Data taken from openweathermap.org. The main goal of the application is to consolidate in practice the basic knowledge that was covered in the course and the acquisition of skills in interacting with external services.

Application functionality:
1.Ability to see the weather and the name of my location based on my current coordinates.
2. Ability to switch between saved cities.
3. Ability to switch between saved cities.
4. Ability to delete a saved city
5. Settings page where you can add options to the weather display.
6. Ability to search through saved cities.
7. After reloading the page, the list of saved cities and the settings page retain their data.
8.Hardware-adapted environment.

<h1>Technologies used</h1>
<io>
  <li>React</li>
  <li>Tailwind CSS</li>
  <li>React Router</li>
</io>

<h1>API</h1>
<p>openweathermap.org/API</p>

<h1>Assembly</h1>
Vite + React

<h1>Development</h1>
<h2>Requirement</h2>
To install and run the project, Vite v10.2.4 is required.
<h2>Installing dependencies</h2>
To install dependencies, run the command:
<code>$npm install</code>
To install React Router run the command:
<code>$npm install react-router-dom </code>
<h2>Launching the Development server</h2>
To start the development server, run the command:
<code>npm run dev</code>
<h2>Creating a build</h2>
To run a production build, run the command:
<code>npm run build</code>
<h2>Deploy</h2>
To deploy the application follow the guide at the link https://vitejs.dev/guide/static-deploy
<h1>Link to the deployed application</h1>
https://miskaskodom.github.io/Meteorological-web-application./

<h1>How to use the application</h1>

Start page

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/90b0492d-8ae4-4139-9573-5c5ab31176d7)

There are two links on this page:

-To the application page https://miskaskodom.github.io/Meteorological-web-application./#/mainapp

-To the page about the project https://miskaskodom.github.io/Meteorological-web-application./#/aboutapp

Main app
![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/45f0de9c-0152-4f30-af9e-1c2c069e1802)

This page displays the user's current location and the weather at his location, to add a city click on the "Add city" button

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/d2e1c1b2-9d8e-4985-804c-ca2f8a31b21d)

In the modal window there is a line with a choice of city; the user can select either an existing one from the options or add his own by clicking on the button with the plus icon.

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/7852eed4-ec29-401c-81ea-fc4ee7cbe2eb)

The saved city is added to the list of saved cities.

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/84e100a9-1bb1-41b5-8d9f-80c59873c41f)

By clicking on a saved city, the user will see the weather display for this city

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/03528bb2-1cd5-49fb-9adc-469c749cf86a)

The user can search through saved cities.

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/f8e9143f-6480-4a75-a162-5b2d9f77204d)

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/a3ec7091-fd7d-466a-8f49-2c8136daefc8)

To close the modal window, you can click on the cross at the top right, or click on the dark background outside the modal window.

To add or remove weather display, click on the Settings button.

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/3fd14c3b-793e-4605-a74b-175e309ea017)

We remove the display of weather options and return to the Main app using the Back button

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/9ca626fa-5cf6-45e6-9a97-d30a31c6abdf)

Application after manipulation

![image](https://github.com/miskaskodom/Meteorological-web-application./assets/156936493/5a3d8707-81dc-456d-8659-229db4363056)

When you reload the page, the saved cities and weather display options settings are saved.






