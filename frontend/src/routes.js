import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';


import Logon from './pages/Logon';  
import Registration from './pages/Registration'; 
import RegisterService from './pages/RegisterService';
import SelectRegister from './pages/SelectRegister';
import MarkedCare from './pages/MarkedCare';


export default function Routes(){

return(
	<BrowserRouter>
	<Switch>
       <Route path="/" exact  component={Logon}/>
	   <Route path="/register"  component={Registration}/>
	   <Route path="/registerservice"  component={RegisterService}/>
	   <Route path="/selectservice"  component={SelectRegister}/>
	   <Route path="/markedCare"  component={MarkedCare}/>

	</Switch>

	</BrowserRouter>
	);
}