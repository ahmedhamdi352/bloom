import React, {Component,Suspense, lazy} from 'react';
import { HashRouter, Route, } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// import {
//     BrowserRouter as Router,
//     Route
    
//   } from 'react-router-dom';
import loadable from '@loadable/component'
import Loading from '../Components/Helpers/loading'



const ToolBar = lazy(() => import('../Components/Toolbar'))
const SignIn = lazy(() => import('../Components/Sign-in'))
const Confirm =lazy(() => (import('../Components/Confirm_site')))


class Routes extends Component {
    constructor(props){
        super(props);
       
    }
    render() {
        return (
            <>
            <HashRouter>
            
              <Suspense fallback= {<Loading/>}>
                <ToolBar /> 
                <Route path="/" component={Confirm}  />
              </Suspense>
              </HashRouter>

    
           </>
        )
    }
}




export default Routes


