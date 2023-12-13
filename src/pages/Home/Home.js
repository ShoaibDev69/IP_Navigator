import React, { useState } from 'react';
import './Home.css';

import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';

function Home() {
	const [config, setConfig] = useState(null);

	return (
		<>
			<Header config={config} setConfig={setConfig} />
			<Main config={config} setConfig={setConfig} />
		</>
	);
}

export default Home;
