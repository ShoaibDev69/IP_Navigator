import { getCurrentIp, getIp } from './HttpService';

export const getGeoDatas = async (tempIp = null) => {
	try {
		const ip = tempIp || await getCurrentIp();
		const geo = await getIp(ip);

		const { location } = geo;
		const { lat, lng, timezone, city, country, postalCode } = location;

		return {
			lat,
			lng,
			ip: geo.ip,
			isp: geo.isp,
			timezone: `UTC ${timezone}`,
			location: `${city}, ${country} ${postalCode}`,
		};
	} catch (error) {
		throw new Error('Failed to fetch geo data');
	}
};
