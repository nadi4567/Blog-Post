 🚀 "Daily Journal ON"

This is a simple blog website where users can create, read, and view blog posts.
The website is built using Node.js, Express.js, MongoDB, and EJS as the templating engine.

- Live at https://journaling-yocy.onrender.com/
- You can test my blog website here "https://journaling-yocy.onrender.com/". I use onrender to host my website.

 🚀 Features
- Home page displaying all blog posts
- Compose new blog posts
- View individual blog posts
- About and Contact pages

   Technologies Used
  - ✅  Node.js - JavaScript runtime
  - ✅ Express.js - Web framework for Node.js
  - ✅ MongoDB - Database for storing blog posts
  - ✅ EJS - Templating engine for rendering dynamic views
  - ✅ Lodash - Utility library for string manipulation
  - ✅ dotenv - For managing environment variables


 🚀 Installation
 🚀 Prerequisites
- Make sure you have Node.js and MongoDB installed.

Setup Steps

Clone this repository:
- git clone https://github.com/nadi4567/Blog-Post.git
- cd Blog-Post

Install dependencies:
- npm install

Create a .env file in the project root and add your MongoDB connection details:
- MONGODB_PASSWORD=your_mongodb_password
- PORT=3000

Run the server:
- node app.js
- Open a browser and go to:

 🚀 API Routes

Home Page

GET / - Renders the home page with all blog posts.

Compose Page

GET /compose - Displays a form to create a new blog post.

Submit a Post

POST /compose - Saves a new blog post to MongoDB and redirects to the home page.

View a Post

GET /posts/:postId - Displays a single post by its ID.

About & Contact Pages

GET /about - Displays information about the website.
GET /contact - Displays contact details.

 🚀 Contributing
-   Feel free to fork this repository and submit a pull request.

License
This project is open-source and available under the MIT License.

Made with ❤️ by Yu Nadi Soe 



