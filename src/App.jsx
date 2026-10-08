import { useState } from "react";
import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";

  const [practiceCount, setPracticeCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const completePractice = () => {
    setPracticeCount(practiceCount + 1);
  };

  const resetPractice = () => {
    setPracticeCount(0);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="app">
      <Header />

      <div className="controls">
        <button onClick={completePractice}>
          Complete Practice
        </button>

        <button onClick={resetPractice}>
          Reset
        </button>

        <button onClick={toggleProfile}>
          {showProfile ? "Hide Profile" : "Show Profile"}
        </button>
      </div>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={studentDepartment}
          year={studentYear}
          practiceCount={practiceCount}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;