import './App.css';
import {BrowserRouter , Switch , Route, Redirect} from 'react-router-dom'

//Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


// components
import Home from './Home'
import Apparel from './Apparel'
import Contact from './Contact'
import Navbar from './Navbar'
import Footer from './Footer'
import Cart from './Cart'
import Checkout from './Checkout'
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....
    auth.onAuthStateChanged(authUser => {
      
      if (authUser) {
        // the user just logged in / the user was logged in 
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      
      }
      else {
        // the user was logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <div >
      <BrowserRouter>
        {/* <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apparel" component={Apparel} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
        <Footer/> */}

        <Switch>
          <Route exact path="/" >
            <Navbar/>
            <Home/>
            <Footer/>
          </Route>

          <Route exact path="/apparel" >
            <Navbar/>
            <Apparel/>
            <Footer/>
          </Route>
          
          <Route exact path="/contact" >
            <Navbar/>
            <Contact/>
            <Footer/>
          </Route>
          
          <Route exact path="/cart" >
            <Navbar/>
            <Cart/>
            <Footer/>
          </Route>

          <Route exact path="/checkout" >
            <Navbar/>
            <Checkout/>
            <Footer/>
          </Route>
          
          <Route exact path="/login" >
            
            <Login/>
            
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
