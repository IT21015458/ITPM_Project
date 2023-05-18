/*import './App.css';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPage from './components/NavigationPage'
import SignINForm from './components/SignINForm'
import SignUPForm from './components/SignUPForm'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<NavigationPage/>} />
            <Route exact path="/signin" element={<SignINForm/>} />
            <Route exact path="/signup" element={<SignUPForm/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
