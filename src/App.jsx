import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"
import Lessons from "./components/Lessons";
import Videos from "./components/Videos";
import Login from "./components/Login";
import GradeOneLesson from "./components/GradeOneLesson";
import ErrorPage from "./components/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";
import ErrorHandler from "./components/ErrorHandler";
import SignUp from "./components/SignUp";


function App() {


  return (
     <ErrorBoundary FallbackComponent={ErrorHandler}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="lesson" element={<Lessons />}>
             <Route path="grade_1" element={<GradeOneLesson />} />
            </Route>
            <Route path="videos" element={<Videos />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
