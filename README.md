# Hospital Appointment System

An exam-friendly, simple, full-stack Hospital Appointment System built for **ITUE301 — Advanced Web Development Frameworks Practical Exam**.

---

## Tech Stack
- **Frontend**: React.js + Vite, JavaScript, React Router v6
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose, dotenv

---

## Project Structure

```text
itue301-exam-[roll-number]-[batch]/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── AppointmentCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── DoctorsPage.jsx
│   │   │   └── BookingPage.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── backend/
│   ├── models/
│   │   ├── Patient.js
│   │   ├── Doctor.js
│   │   └── Appointment.js
│   ├── server.js
│   ├── test-db.js
│   ├── .env
│   ├── .env.example
│   └── package.json
│
├── .env.example
├── .gitignore
├── README.md
└── PROJECT_EXPLANATION.md
```

---

## Setup & Running Instructions

### 1. Backend Setup & Run

Navigate to the `backend` folder:
```bash
cd backend
npm install
```

Start the Express backend server:
```bash
node server.js
# OR
npm start
```
The server runs at: `http://localhost:5000`

### 2. Frontend Setup & Run

Navigate to the `frontend` folder:
```bash
cd frontend
npm install
```

Start the React development server:
```bash
npm run dev
```
The application opens at: `http://localhost:3000`

### 3. MongoDB Setup

1. Make sure local MongoDB server is running on `mongodb://localhost:27017` (or provide a MongoDB Atlas URI).
2. Configure the `.env` file inside `backend/`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/hospital_db
   ```
3. Test MongoDB Schema & Validation:
   ```bash
   cd backend
   node test-db.js
   ```

---

## Required Environment Variables

| Variable | Description | Example Value |
| --- | --- | --- |
| `PORT` | Backend server port | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/hospital_db` |

---

## REST API Endpoints

| Method | Endpoint | Description | HTTP Status |
| --- | --- | --- | --- |
| `GET` | `/api/v1/appointments` | Return all appointments | 200 OK |
| `POST` | `/api/v1/appointments` | Create a new appointment | 201 Created |
| `GET` | `/api/v1/doctors` | Return all doctors | 200 OK |
| `POST` | `/api/v1/mongo/patients` | Create patient in MongoDB | 201 Created |
| `GET` | `/api/v1/mongo/test-validation` | Test MongoDB schema validation failure | 400 Bad Request |

---

## Practical Mapping

- **Practical 1 (Task 1)**: React Component Architecture (`AppointmentCard` receiving props, status CSS classes).
- **Practical 2 (Task 2)**: React Router (`Link`, routes `/`, `/doctors`, `/booking`) and `useState` form handling with live preview.
- **Practical 3 (Task 4)**: React consuming Express API using `fetch()` and `useEffect()` with `data`, `loading`, `error` states.
- **Practical 4 (Task 3)**: Express REST API with `requestLogger` middleware and global error handling middleware.
- **Practical 5 (Task 5)**: MongoDB + Mongoose schema design (`Patient`, `Doctor`, `Appointment`), references (`ref`), and validation rules.
