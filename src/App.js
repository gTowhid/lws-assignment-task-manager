import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AddTaskPage from './pages/AddTaskPage';
import EditTaskPage from './pages/EditTaskPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/addTask" element={<AddTaskPage />}></Route>
        <Route path="/editTask/:taskId" element={<EditTaskPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
