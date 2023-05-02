import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from './components/SignIn/SignIn';
import Users from "./components/Users/Users";
import User from "./components/User/User";

function App() {
  return ( 
    <>
      <Routes>
        <Route exact path="*" element={ <SignUp/> }/>
        <Route exact path="/signup" element={ <SignUp/> }/>
        <Route exact path="/signin" element={ <SignIn/> }/>
        <Route exact path="/users" element={ <Users/> }/>
        <Route exact path="/user" element={ <User/> }/>
      </Routes>
    </>
  );
}

export default App;
