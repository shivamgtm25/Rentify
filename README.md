Project Overview
Rentify is a real estate platform designed to connect property owners with potential tenants. The application allows users to register, log in, create listings for their properties, and manage bookings efficiently. The platform is built with a focus on user experience, ensuring that the process of searching and booking properties is as seamless as possible.

Technology Stack
Frontend:

React.js: A JavaScript library for building user interfaces.
Redux: For state management.
SCSS: For styling components.
Axios: For making HTTP requests.
Backend:

Node.js: A JavaScript runtime for building the backend services.
Express.js: A web framework for building RESTful APIs.
MongoDB: A NoSQL database for data storage.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
File Upload:

Multer: Middleware for handling multipart/form-data, used for uploading files.
Authentication:

JWT (JSON Web Tokens): For secure authentication and authorization.
Installation Steps
Prerequisites
Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
MongoDB should be set up and running. You can use MongoDB Atlas for cloud hosting.
Step 1: Clone the Repository
bash
Copy code
git clone <repository-url>
cd Rentify
Step 2: Install Dependencies
For the Backend
Navigate to the server directory.
bash
Copy code
cd server
Install the required packages.
bash
Copy code
npm install
For the Frontend
Navigate to the client directory.
bash
Copy code
cd client
Install the required packages.
bash
Copy code
npm install
Step 3: Set Up Environment Variables
Create a .env file in the server directory and add the following variables:
        
Copy code
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
PORT=3001
Step 4: Run the Application
For the Backend
Navigate to the server directory if not already there.
Start the server.
bash
Copy code
npm start
For the Frontend
Navigate to the client directory.
Start the client application.
bash
Copy code
npm start
Project Structure
The project has a structured hierarchy for easy navigation and management. Below is a breakdown of the main folders and files:

client/: Contains the React frontend application.
src/: Contains the main application code.
pages/: Contains page components (e.g., Login, Register, Listings).
redux/: Contains Redux state management files (state.js, store.js).
styles/: Contains SCSS files for styling.
App.js: Main component that integrates everything.
server/: Contains the Node.js backend application.
models/: Contains Mongoose models (User, Listing, Booking).
routes/: Contains route handler files for user authentication, listings, and bookings.
public/uploads/: Directory for storing uploaded files (images).
.env: Environment variables for configuration.
End-to-End Functionality
User Registration: Users can register by filling out a form that includes their first name, last name, email, password, and profile image. The profile image is uploaded using Multer and stored on the server.

User Login: Registered users can log in using their email and password. The application verifies the credentials and generates a JWT for authenticated sessions.

Property Listings: Users can create, view, and manage their property listings. Each listing contains details such as images, price, location, and description.

Booking Management: Users can book properties. The application manages reservations, allowing users to view their booking history.

User Dashboard: Users have access to their dashboard where they can view their listings, bookings, and wishlists.

Conclusion
Rentify is a feature-rich platform designed to streamline the process of renting properties. It leverages modern technologies to provide an efficient and user-friendly experience. Follow the installation steps to set up the project locally and explore its functionality.

