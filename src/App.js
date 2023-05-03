import './App.css';
import MainPage from './component/Layout/MainPage';
import ActiveElection from './component/Pages/ActiveElection';
import { Routes, Route } from "react-router-dom";
import SignUp from './component/Pages/user/SignUp';
import Login from './component/Pages/user/Login';
import CandidateForm from './component/Pages/candidate/CandidateForm';
import Candidates from './component/Pages/candidate/Candidates';


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/candidate" element={<CandidateForm />}></Route>
      <Route path="/candidate/all" element={<Candidates />}></Route>
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/contactus" component={Contact} /> */}
      <Route path="/activeelections" element={<ActiveElection />}></Route>
    </Routes>
  );
}

export default App;
