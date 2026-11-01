
# Wanderlust-FullStack

Wanderlust-FullStack is a full-stack web application designed to facilitate the browsing and booking of vacation accommodations, including houses, villas, and farmhouses. This platform allows users to add their own properties to the listing, providing a diverse range of options for potential renters. Key features include a seamless booking system that simplifies the reservation process and real-time property location views via Mapbox API. To enhance user experience and security, the application supports fast login options through Google OAuth and GitHub OAuth. The application also boasts a dynamic server for responsive performance and an intuitive, aesthetically pleasing user interface, ensuring an engaging and efficient user experience.

## 🌐 Live Demo

[Wanderlust-FullStack Live Application](https://wanderlust-k9ep.onrender.com)

## ✨ Features

- **User Authentication**: Secure user registration and login/logout functionalities are implemented using Passport.js, ensuring safe password storage and authentication processes.
- **Property Listings**: Users can browse through a curated list of properties, each with detailed descriptions, amenities, and pricing information.
- **Reviews and Ratings**: Users can read reviews from other travelers and contribute their own, fostering a community of honest feedback and recommendations.
- **Property Management**: Property owners who list their accommodations on the platform can easily edit their property details, keeping information up-to-date and accurate.
- **Image Management**: Integrated with Cloudinary for efficient image storage and retrieval. The use of multer-storage-cloudinary facilitates seamless image uploading and management directly within the application.
- **Map Integration**: Real-time property location views via Mapbox API enhance the user experience by providing geographical context.
- **Validation**: Both client-side and server-side validations are implemented to ensure data integrity and enhance security throughout the platform.

## 🛠️ Technologies Used

### Frontend

- HTML, CSS, JavaScript
- EJS (Embedded JavaScript Templates)
- Bootstrap

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas
- Mongoose

### Authentication

- Passport.js
- Google OAuth
- GitHub OAuth

### Cloud Services

- Cloudinary (Image Hosting)
- Mapbox API (Map Integration)

### Other Packages

- Multer (File Uploads)
- Joi (Data Validation)
- Dotenv (Environment Variables)
- Express-Session (Session Handling)
- Connect-Flash (Flash Messages)
- Connect-Mongo (Session Store)
- Cookie-Parser (Cookie Handling)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Henil29/Wanderlust-FullStack.git
   cd Wanderlust-FullStack
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DB_URL=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   SESSION_SECRET=your_session_secret
   ```

4. **Start the application**

   ```bash
   npm start
   ```

   The application will be running at `http://localhost:3000`.

## 🧪 Testing

To run tests (if available), use the following command:

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📫 Contact

For any inquiries or feedback, feel free to reach out:

- **GitHub**: [Henil29](https://github.com/Henil29)
