// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import BlurBlob from "./components/BlurBlob";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import ClassPage from "./pages/ClassPage";
import SemesterPage from "./pages/SemesterPage";
import SubjectPage from "./pages/SubjectPage";
import StreamPage from "./pages/StreamPage";
import StreamSubjectsPage from "./pages/StreamSubjectsPage";
import BranchPage from "./pages/BranchPage";
import SocialSciPage from "./pages/SocialSciPage";
import ChapterPage from "./pages/ChapterPage";
import BCAChapterPage from "./pages/BCAChapterPage";
import DiplomaChapterPage from "./pages/DiplomaChapterPage";
import BTechChapterPage from "./pages/BTechChapterPage"; // ✅ NEW
import MissingNote from "./pages/MissingNote";

const MainLayout = ({ children, showFooter = true }) => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="bg-[#050414] overflow-x-hidden relative text-white font-sans min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md transition duration-300">
        <Navbar />
      </div>

      {!isContactPage && (
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      )}

      {!isContactPage && (
        <BlurBlob position={{ top: "35%", left: "20%" }} size={{ width: "18%", height: "25%" }} />
      )}

      <div className="relative z-10 pt-28 flex-grow">{children}</div>

      {!isContactPage && showFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🏠 Home Page */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
              <Notes />
              <About />
            </MainLayout>
          }
        />

        {/* 📞 Contact Page */}
        <Route
          path="/contact"
          element={
            <MainLayout showFooter={false}>
              <Contact />
            </MainLayout>
          }
        />

        {/* 📚 Class Selection */}
        <Route
          path="/class/:classId"
          element={
            <MainLayout>
              <ClassPage />
            </MainLayout>
          }
        />

        {/* 📘 Social Science */}
        <Route
          path="/class/:classId/subject/social-science"
          element={
            <MainLayout>
              <SocialSciPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/subject/social-science/:subjectId"
          element={
            <MainLayout>
              <ChapterPage />
            </MainLayout>
          }
        />

        {/* 📘 Normal Subjects */}
        <Route
          path="/class/:classId/subject/:subjectId"
          element={
            <MainLayout>
              <SubjectPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/subject/:subjectId/chapter"
          element={
            <MainLayout>
              <SubjectPage />
            </MainLayout>
          }
        />

        {/* 🧪 Stream-based (11th/12th) */}
        <Route
          path="/class/:classId/stream"
          element={
            <MainLayout>
              <StreamPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/stream/:streamName"
          element={
            <MainLayout>
              <StreamSubjectsPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/stream/:streamName/subject/:subjectId"
          element={
            <MainLayout>
              <SubjectPage />
            </MainLayout>
          }
        />

        {/* 🏗️ BTech / Diploma (branch + semester) */}
        <Route
          path="/class/:classId/branch"
          element={
            <MainLayout>
              <BranchPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/branch/:branchName/semester"
          element={
            <MainLayout>
              <SemesterPage />
            </MainLayout>
          }
        />
        
        {/* ✅ BTech Notes by Branch + Semester */}
        <Route
          path="/class/btech/branch/:branchName/semester/:semNumber"
          element={
            <MainLayout>
              <BTechChapterPage />
            </MainLayout>
          }
        />

        {/* 🧑‍💻 Diploma route with branch */}
        <Route
          path="/class/diploma/branch/:branchName/semester/:semNumber"
          element={
            <MainLayout>
              <DiplomaChapterPage />
            </MainLayout>
          }
        />

        {/* 🧑‍💻 BCA Semester Notes */}
        <Route
          path="/class/bca/semester"
          element={
            <MainLayout>
              <SemesterPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/bca/semester/:semNumber"
          element={
            <MainLayout>
              <BCAChapterPage />
            </MainLayout>
          }
        />
{/* 📄 Missing Notes Info Page */}
<Route
  path="/note-missing"
  element={
    <MainLayout>
      <MissingNote />
    </MainLayout>
  }
/>
        {/* 🔁 Fallback for other semester pages */}
        <Route
          path="/class/:classId/branch/:branchName/semester/:semNumber"
          element={
            <MainLayout>
              <SemesterPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/semester/:semNumber"
          element={
            <MainLayout>
              <SemesterPage />
            </MainLayout>
          }
        />
        <Route
          path="/class/:classId/semester/:semNumber/subject/:subjectId"
          element={
            <MainLayout>
              <SubjectPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
