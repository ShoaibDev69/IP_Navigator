// const API_KEY = 'at_VDOQ35GZC6fveKlNEYsux8s4riz9C'; //... Set your api key so that the app works

// export const getCurrentIp = async () => {
// 	const response = await fetch('https://api.ipify.org');
// 	return await response.text();
// };

// export const getIp = async ip => {
// 	const response = await fetch(
// 		`https://geo.ipify.org/api/v2/country,city?apiKey=at_VDOQ35GZC6fveKlNEYsux8s4riz9C&ipAddress=8.8.8.8`
// 	);
// 	return await response.json();
// };
// Set API key as environment variable
const API_KEY = `at_VDOQ35GZC6fveKlNEYsux8s4riz9C`;

export const getCurrentIp = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');

    if(!response.ok) {
      throw new Error('Failed to get current IP'); 
    }

    return await response.json(); 
  } catch(error) {
    console.error(error);
    return null;
  }
}

export const getIpDetails = async (ip) => {
  try {
    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${at_VDOQ35GZC6fveKlNEYsux8s4riz9C}&ipAddress=${ip}`;

    const response = await fetch(url);

    if(!response.ok) {
      throw new Error('Failed to get IP details');
    }

    return await response.json();

  } catch(error) {
    console.error(error);
    return null; 
  }
}