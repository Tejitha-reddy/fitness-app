The Fitness App is a React-based web application that allows users to manage fitness-related information and appointments. Here's a breakdown of the code and instructions on how to set up and use the application.
The application relies on several npm modules to function. These modules are managed by Node.js and can be installed using the following command:
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/fd7bc459-5e0f-408c-b9f1-9386362c6522)

The key npm modules include:
react-feather: Provides icons for UI elements like PlusCircle, Edit, Trash2, and Calendar.
react-datepicker: Enables the selection of dates and times in a user-friendly manner.
react-responsive-modal: Implements responsive modals for user interactions.
react-toastify: Displays toast notifications for user feedback.
react-big-calendar: Renders a calendar component for displaying appointments.
moment: Handles date and time formatting.

install all the modules by using commands:
npm -i <npm-moduleName>

Running the Application
To run the Fitness App, execute the following commands:
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/bec6d3f7-073a-4480-8d51-0c487e7b3eed)

This will start the development server and open the application in your default web browser.
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/64e96d2d-ecc2-42a7-b415-14d862a73b47)

Using the Application:
Adding a User:
Click on the "Add" button in the toolbar.
Fill in the user details, including first name, last name, location, and appointment.
Click the "Submit" button.
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/dfe3b022-f5a3-40c6-8334-b435e26eb3ce)
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/24cf3a20-91f1-4451-ae0a-746509037d26)

Editing a User:
In the user list, click on the "Edit" button next to the user you want to edit.
Modify the user details.
Click the "Update" button.
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/28fe8e2f-0bb5-4bef-8df6-9dc3cbc82da7)
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/e2c37f3b-4a38-404b-94ed-070853375ad3)

Deleting a User:
In the user list, click on the "Delete" button next to the user you want to delete.
Confirm the deletion in the modal.
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/c992c7a3-1d6d-488f-baf0-edccd58036e9)
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/2a13c739-061d-4274-b4e7-ee92ca7994bf)

Viewing the Calendar:
Click on the "Show Calendar" button.
Explore the calendar to view scheduled appointments.
![image](https://github.com/Tejitha-reddy/fitness-app/assets/153427209/e3a364d7-ea6e-40e7-b38a-c33084cd3f30)

Code Structure:
App.js: The main component that orchestrates the entire application.
App.css: The stylesheet for styling the application.
react-big-calendar.css: The stylesheet for styling the react-big-calendar component
