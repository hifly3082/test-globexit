## User list app

### Requirements

- Create a report layout that displays a list of users. You can use sample user data for testing.

- Implement a user search feature that filters the list of users based on the input provided by the user.

- Develop a modal component that displays additional user information when a user card is clicked. The modal should close when the user clicks outside of it or on a close button.

- Set up a local backend server using the provided link: http://127.0.0.1:3000. Fetch the list of users from the backend and display it in your application.

- Implement the ability to search for users on the backend by sending requests with query parameters (term) based on the user's input.

- Ensure that the application is responsive and user-friendly.

## Solution

### Tech stack

- Vite 4.4.5
- React 18.2.0
- TypeScript 5.0.2

### Installation and setup

1. Make sure you have Node.js and npm installed.
2. Clone the project repository or create a new Vite project:

```bash
git clone https://github.com/hifly3082/user-list-app.git
cd user-list-app
```

3. Navigate to the project's root directory.
4. Install the dependencies using the following command:

```bash
npm install
```

### Usage

To run the application, use the following command:

```bash
npm run dev
```

You also need to start the [backend-server](https://github.com/hifly3082/backend-server) to get access to sample user data.
