const API_KEY = 'at_VDOQ35GZC6fveKlNEYsux8s4riz9C'; //... Set your api key so that the app works

export const getCurrentIp = async () => {
	try {
		const response = await fetch('https://api.ipify.org');
		if (!response.ok) {
			throw new Error('Failed to fetch current IP');
		}
		return response.text();
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const getIp = async ip => {
	try {
		const response = await fetch(
			`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip};`
		);
		if (!response.ok) {
			throw new Error('Failed to fetch IP information');
		}
		return response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
};
