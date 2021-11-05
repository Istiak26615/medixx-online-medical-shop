import logo from './logo.svg';
import './App.css';
import Menubar from './Components/Menubar/Menubar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Services from './Components/Services/Services';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Medicines from './Components/Medicines/Medicines';
import Doctors from './Components/Doctors/Doctors';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import CovidVaccine from './Components/CovidVaccine/CovidVaccine';
import WhyMedixx from './Components/WhyMedixx/WhyMedixx';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Errorpage from './Components/Errorpage/Errorpage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Menubar></Menubar>
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <Services></Services>
          <CovidVaccine></CovidVaccine>
          <WhyMedixx></WhyMedixx>
          <Footer></Footer>

        </Route>
        <PrivateRoute exact path="/medicine">
            <Medicines></Medicines>
        </PrivateRoute>
        <PrivateRoute exact path="/doctor">
            <Doctors></Doctors>
        </PrivateRoute>
        <Route exact path="/signup">
            <Signup></Signup>
        </Route>
        <Route exact path="/login">
            <Login></Login>
        </Route>
        
        <PrivateRoute path="/details/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/*">
            <Errorpage></Errorpage>
        </Route>
      </Switch>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
