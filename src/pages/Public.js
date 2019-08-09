import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { MasterContext } from '../Context';

import Nav from '../components/Public/Nav';
import Home from '../components/Public/Home';

const Public = () => {
	// const [auth] = useContext(MasterContext);
	// console.log('App : ', auth);

	// if (auth.login) {
	// 	return <Redirect to='/feed' />;
	// }

	return (
		<section>
			<Nav />
			<Home />
		</section>
	);
};

export default Public;
