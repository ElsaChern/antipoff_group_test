import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from './components/SignIn/SignIn';

function App() {
  return ( 
    <>
      <Routes>
        <Route exact path="*" element={ <SignUp/> }/>
        <Route exact path="/signup" element={ <SignUp/> }/>
        <Route exact path="/signin" element={ <SignIn/> }/>
      </Routes>
    </>
  );
}

export default App;
