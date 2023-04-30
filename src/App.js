import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from './components/SignIn/SignIn';
import Users from "./components/Users/Users";

function App() {
  return ( 
    <>
      <Routes>
        <Route exact path="*" element={ <SignUp/> }/>
        <Route exact path="/signup" element={ <SignUp/> }/>
        <Route exact path="/signin" element={ <SignIn/> }/>
        <Route exact path="/users" element={ <Users/> }/>
      </Routes>
    </>
  );
}

export default App;
