## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Yarn or npm

### Installation

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```sh
   yarn install
   # or
   npm install
   ```

3. Set up the environment variables:

   ```sh
   cp .env.example .env
   ```

4. Update the [.env](http://_vscodecontentref_/29) file with your database credentials and other configurations.

### Database Setup

1. Run the migrations:

   ```sh
   yarn migrate
   # or
   npm run migrate
   ```

2. Seed the database (if you have seeders):
   ```sh
   yarn seed
   # or
   npm run seed
   ```

### Running the Application

1. Start the development server:

   ```sh
   yarn dev
   # or
   npm run dev
   ```

2. The server will be running at `http://localhost:3000`.

## API Endpoints

### Employees

- `POST /employees` - Create a new employee
- `GET /employees` - Get all employees
- `GET /employees/:id` - Get an employee by ID
- `PUT /employees/:id` - Update an employee by ID
- `DELETE /employees/:id` - Delete an employee by ID

### Projects

- `POST /projects` - Create a new project
- `GET /projects` - Get all projects
- `GET /projects/:id` - Get a project by ID
- `PUT /projects/:id` - Update a project by ID
- `DELETE /projects/:id` - Delete a project by ID

### Assignments

- `POST /assignments` - Create new assignments

## License

This project is licensed under the MIT License.
