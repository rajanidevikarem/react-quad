import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home.js";
import Career  from './views/Career'
import Bi  from './components/Servicescontent/Business-intellegence/Bi'
import Riskanalytics from './components/Servicescontent/Riskanalytics'
import Bigdata from './components/Servicescontent/BigData'
import Globalworkforce from './components/Global/Globalworkforce.js'
import Capabilites  from './components/landingpagesections/Capabilites'
import Products  from './components/landingpagesections/Products'
import About  from './components/landingpagesections/About'
import Datamanagement from './components/Servicescontent/Datamangement'
import Datavisualization from './components/Servicescontent/Datavisualization'
import Dataanalytics from './components/Servicescontent/Dataanalytics'
import Contact from './components/landingpagesections/Contact'
import Capabilitymatrix from './components/landingpagesections/Capabilitymatrix'
import Globalreadmore from './components/Global/Globalreadmore'
import Mlplatform from './components/landingpagesections/Mlplatform';
import Cloudadpotion from './components/landingpagesections/Cloudadpotion';
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>

     <Route path="/home" render={props => <Home {...props} />} /> 
      
      <Route
       path="/Career"
       render={props => <Career {...props} />}/>
       <Route
       path="/bi"
       render={props => <Bi {...props} />}/>
    
    <Route
       path="/riskanalytics"
       render={props => <Riskanalytics {...props} />}/>

       <Route
       path="/bigdata"
       render={props => <Bigdata {...props} />}/>
        
        <Route
       path="/globalworkforce"
       render={props => <Globalworkforce {...props} />}/>
 <Route
       path="/capabilites"
       render={props => <Capabilites {...props} />}/>
       <Route
       path="/capabilitymatrix"
       render={props => <Capabilitymatrix {...props} />}/>
       <Route
       path="/products"
       render={props => <Products  {...props} />}/>
       
        <Route
       path="/about"
       render={props => <About {...props} />}/>

    <Route
       path="/datamangement"
       render={props => <Datamanagement {...props} />}/>
       <Route
       path="/datavisualization"
       render={props => <Datavisualization {...props} />}/>
        <Route
       path="/dataanalytics"
       render={props => <Dataanalytics {...props} />}/>
        <Route
       path="/contact"
       render={props => <Contact {...props} />}/>
  <Route
       path="/globalreadmore"
       render={props => <Globalreadmore {...props} />}/>
       <Route
       path="/ml"
       render={props => <Mlplatform {...props} />}/>
        <Route
       path="/reactquad/cloudadoption"
       render={props => <Cloudadpotion {...props} />}/>
       
      
       <Redirect to="/home" />
     <Redirect from="/" to="/home" />
     {/* <Redirect to="/home" />
     <Redirect from="/" to="/home" /> */}
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
