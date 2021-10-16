import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
      <AuthContextProvider>
        <Switch>
          {" "}
          {/* previne que duas rotas sejam acessadas ao mesmo tempo*/}
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
};
