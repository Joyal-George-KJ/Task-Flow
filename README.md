# Task Flow

**Task Flow** is a project and task management web application designed to help users organize their projects, manage tasks, and track progress. With an intuitive interface and flexible task management features, Task Flow allows users to create projects, add tasks, and assign tags to categorize them effectively. Tasks can be updated or deleted, and all changes are saved to local storage.

## Features

-   **Project Management**: Create, update, and delete projects with ease.
-   **Task Management**: Add, update, and delete tasks within projects.
-   **Tags**: Assign tags to tasks for better organization.
-   **Persistent Storage**: Automatically saves projects and tasks in the browser’s local storage.
-   **Responsive UI**: User-friendly, mobile-responsive interface.

## Technologies Used

-   **React**: Frontend library for building UI components.
-   **Redux**: State management for handling global state and ensuring consistent data flow.
-   **Redux Toolkit**: Simplified Redux logic and middleware.
-   **React Router**: For page navigation and handling routes.
-   **TailwindCSS**: Styling framework for responsive and modern UI components.
-   **LocalStorage**: Browser-based storage for persisting user data.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Node.js**: You will need Node.js installed. You can download it from [here](https://nodejs.org/).
-   **npm**: Comes with Node.js, but ensure it is up to date.

### Steps to Install:

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-flow.git
```

2. Navigate to the project directory:

```bash
cd task-flow
```

3. Install the dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm start
```

5. Open your browser and visit:

```
http://localhost:3000
```

## Usage

1. **Create a New Project**:

    - On the "Project" page, click the "Add" button to create a new project. You will be prompted to enter a project name.

2. **Add Tasks**:

    - Within a project, click the "Add Task" button to create a new task. Each task can be tagged with multiple labels for better organization.

3. **Update and Delete**:

    - Tasks and projects can be updated or deleted as needed.

4. **Persistence**:
    - All projects and tasks are saved automatically in local storage. Your tasks will be available even if you close and reopen the browser.

## Code Structure

-   **/src/components**: Reusable UI components like the navigation bar, forms, and buttons.
-   **/src/store**: Redux slices for managing the state of projects and tasks.
-   **/src/pages**: Contains the main pages of the application, like Project and Task views.
-   **/src/common**: Utility functions like DataManager to handle local storage interactions.

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

### Steps to Contribute:

1. Fork the repository.
2. Create your feature branch:

```bash
git checkout -b feature/my-feature
```

3. Commit your changes:

```bash
git commit -m "Add some feature"
```

4. Push to the branch:

```bash
git push origin feature/my-feature
```

5. Open a pull request.

Data Structure Arragement:

```js
Storage-Name : [{
        projectName: 'common tasks',
        tasks: [
            {
                task: String,
                tags: Array of String,
                status: Boolean || null //  Default -> null, null: pending | true: done | false: failed
            },
            {...}
        ],
    },
    {
        projectName: String
        tasks: Array of Object
    },
    {...}
]
```

## Contributions and Improvment Accepted.

#### 1. Better Design.

#### 2. Impliment Auth (Appwrite, Firebase, etc).

#### 3. Check the thing and Do something that improve User Experiance, User Interface, Working or whatever!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any queries, feel free to reach out:

-   **Project Creator**: Joyal George K J
-   **Email**: [joyalgeorge1111@gmail.com](mailto:joyalgeorge1111@gmail.com)

---


##### <center> Contact Me📱 || Socials in Profile🌐 || Drop a Star⭐! </center>