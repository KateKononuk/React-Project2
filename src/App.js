
import './styles/App.css';
import MainComponent from './Components/MainComponent';
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AuthProvider } from "./Contexts/AuthContext";
import Profile from "./Components/Profile";
import Account from './Components/Account'
import PrivateRoute from './Components/PrivateRoute'
import Signup from './Components/Signup';
import Login from './Components/Login'
import ResetPassword from "./Components/ResetPassword";
import { Container } from "react-bootstrap";


function App() {

  return (<>
      <NavBar />
    <Container
      className="'d-flex flex-column justify-content-between align-items-center"
      style={{ minHeight: "100vh" }}
    >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={MainComponent} />
                  
            <PrivateRoute path="/profile" component={Account} />
              <PrivateRoute path="/update-profile" component={Profile} />
              <Route  path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ResetPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </Container>
   </>
  );
}

export default App;
