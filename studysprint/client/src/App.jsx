import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GroupFinder from "./pages/GroupFinder";
import Dashboard from "./pages/Dashboard";
import ChatRoom from "./pages/ChatRoom";
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import LiveChat from './pages/LiveChat';
import GroupDiscussion from './pages/GroupDiscussion';
import StudyMaterials from './pages/StudyMaterials';
import ThreadView from "./pages/ThreadView";
import UploadNotes from './pages/UploadNotes';
import ExamTimelines from './pages/ExamTimelines';
import DataStructuresTest from './pages/tests/DataStructuresTest';
import WebDevelopmentTest from './pages/tests/WebDevelopmentTest';
import MachineLearningTest from './pages/tests/MachineLearningTest';
import ComputerNetworksTest from './pages/tests/ComputerNetworksTest';
import OperatingSystemsTest from './pages/tests/OperatingSystemsTest';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groups" element={<GroupFinder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/chat/:groupId" element={<ChatRoom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/live-chat" element={<LiveChat />} />
        <Route path="/group-discussion" element={<GroupDiscussion />} />
        <Route path="/study-materials" element={<StudyMaterials />} />
        <Route path="/thread/:title" element={<ThreadView />} />
        <Route path="/upload-notes" element={<UploadNotes />} />
        <Route path="/exam-timelines" element={<ExamTimelines />} />
         <Route path="/exam/data-structures" element={<DataStructuresTest />} />
        <Route path="/exam/web-development" element={<WebDevelopmentTest />} />
        <Route path="/exam/machine-learning" element={<MachineLearningTest />} />
        <Route path="/exam/computer-networks" element={<ComputerNetworksTest />} />
        <Route path="/exam/operating-systems" element={<OperatingSystemsTest />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
