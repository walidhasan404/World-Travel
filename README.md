Packages Used: 
1. React-tooltip
2. React Awesome reveal

Explore World Website
Explore World is a web application that allows users to discover and explore various tourist spots around the world. Users can view details about each spot, including its location, description, average cost, seasonality, travel time, total visitors per year, and more. They can also add, update, and delete spots as needed.

Features
View a list of tourist spots
View detailed information about each spot
Add new spots
Update existing spots
Delete spots
Technologies Used
MongoDB: For storing spot data
Express.js: For building the server-side application
React: For building the client-side user interface
Node.js: For running the server-side application
React Router: For client-side routing
Firebase Authentication: For user authentication (optional)
Bootstrap: For styling the user interface
Getting Started
Prerequisites
Node.js and npm installed on your machine
MongoDB installed and running locally or a MongoDB Atlas account for cloud hosting
Firebase project set up for authentication (optional)
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Navigate to the project directory:
bash
Copy code
cd explore-world
Install dependencies:
bash
Copy code
npm install
Set up environment variables:Create a .env file in the root directory and add the following environment variables:
plaintext
Copy code
DB_USER=your-mongodb-username
DB_PASS=your-mongodb-password
Replace your-mongodb-username and your-mongodb-password with your MongoDB username and password.If you're using Firebase Authentication, add the Firebase configuration in your .env file as well.
Start the development server:
bash
Copy code
npm start
Visit http://localhost:3000 in your web browser to view the application.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.
