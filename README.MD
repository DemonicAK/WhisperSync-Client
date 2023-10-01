# WhisperSync - Client

WhisperSync is a real-time chat application built with React, Vite, React Bootstrap, Redux, and Context API. This repository contains the frontend codebase for WhisperSync.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you start, make sure you have the following prerequisites:

- Node.js installed (at least v14.0.0)
- Yarn package manager (you can also use npm)
- Backend API URL configured in a `.env` file as `VITE_BACKEND_URL`

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/DemonicAK/whispersync-client.git
   ```

2. Navigate to the project folder:

   ```bash
   cd whispersync-client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm dev
   ```

   The application will be accessible at `http://localhost:5173`.

## Folder Structure

The project follows a well-organized folder structure to make it easy to navigate and maintain:

- **assets**: Contains images and other assets used in the application.
- **components**: Reusable UI components, including `MessageForm`, `Navigation`, and `Sidebar`.
- **context**: Houses the `AppContext`, which manages global state.
- **features**: Contains Redux slices, such as `userslice`, to manage specific features.
- **pages**: Defines the main application pages, including `Chat`, `Home`, `Login`, and `Signup`.
- **services**: Includes `appAPI` for making API requests to the backend.
- **store.jsx**: Configuration for the Redux store.

## Features

WhisperSync offers the following features:

- User registration and authentication
- Real-time chat functionality
- Message sending and receiving
- User profiles and avatars
- Responsive design with React Bootstrap

## Usage

To use WhisperSync, follow these steps:

1. Ensure you have set up the backend server and configured the API URL in the `.env` file.

2. Start the frontend development server using `npm run dev`.

3. Access the application in your web browser at `http://localhost:5173`.

4. Register or log in to your account.

5. Start chatting with other users in real-time using the chat interface.

## Contributing

We welcome contributions to make WhisperSync even better. To contribute:

1. Fork this repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/my-feature
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add my feature"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/my-feature
   ```

5. Create a pull request to merge your changes into the main repository.

Please follow the [code of conduct](CODE_OF_CONDUCT.md) and the [contribution guidelines](CONTRIBUTING.md) when contributing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
