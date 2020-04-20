import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';

import Redirect from './pagesHair/Redirect';
import Logon from './pagesHair/Logon';  
import RegisterService from './pagesHair/RegisterService';
import SelectRegister from './pagesHair/SelectRegister';
import MarkedCare from './pagesHair/MarkedCare';
import LogonClient from './pagesClient/Logon';
import Registration from './pagesClient/Register'; 


export default function Routes(){

return(
	<BrowserRouter>
	<Switch>
		<Route path="/" exact  component={Redirect}/>
       <Route path="/logonhair" component={Logon}/>
	   <Route path="/register"  component={Registration}/>
	   <Route path="/registerservice"  component={RegisterService}/>
	   <Route path="/selectservice"  component={SelectRegister}/>
	   <Route path="/markedCare"  component={MarkedCare}/>
	   <Route path="/LogonClient"  component={LogonClient}/>

	</Switch>

	</BrowserRouter>
	);
}