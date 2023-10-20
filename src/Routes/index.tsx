import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import Login from "src/components/Login";

const Routes = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" element={<Login/>}/>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
