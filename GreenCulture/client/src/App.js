/*import './App.css';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPage from './components/NavigationPage'
import SignINForm from './components/SignINForm'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<NavigationPage/>} />
            <Route exact path="/signin" element={<SignINForm/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
