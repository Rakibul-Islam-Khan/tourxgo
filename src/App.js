import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import app from './Pages/Login/Firebase/firebase.init';
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Packages from "./Pages/Home/components/Packages/Packages";
import Header from "./Pages/Home/components/Header/Header";
import Footer from "./Pages/Home/components/Footer/Footer";
import Booking from "./Pages/Booking/Booking";
import AddNewPack from "./Pages/AddNewPack/AddNewPack";
import MyPackage from "./Pages/MyPackage/MyPackage";
import Signup from "./Pages/Login/Signup";
import Login from "./Pages/Login/Login";


app()

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/addpackage">
              <AddNewPack/>
            </Route>
            <Route path="/mypackage">
              <MyPackage/>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking/>
            </PrivateRoute>
            <PrivateRoute path="/packages">
              <Header/>
              <Packages/>
              <Footer/>
            </PrivateRoute>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
