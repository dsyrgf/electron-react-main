import { HashRouter, Navigate, Route, Routes as Switch } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";
import { useEffect } from "react";
import NewUser from "../components/NewUser";

interface IProps {
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const Routes = ({ logged, setLogged }: IProps): JSX.Element => {
  useEffect(()=>{},[logged])
  return (
    <HashRouter>
      <Switch>
        <Route path="/" element={logged ? <Navigate to={"/home"} /> : <Navigate to={"/login"}/>} />
        <Route path="/login" element={<Login setLogged={setLogged} />} />
        <Route path="/home" element={<Home setLogged={setLogged}/>} />
        <Route path="/register" element={<NewUser/>} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
