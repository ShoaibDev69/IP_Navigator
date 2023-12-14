import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getGeoDatas } from '../../services/GeoService';

import MarkerDark from '../../assets/images/icon-location-dark.svg';
import './Main.css';

function Main(props) {
	const { config, setConfig } = props;
	const [center, setCenter] = useState({ lat: 50.5, lng: 30.5 });

	useEffect(() => {
		if (config !== null) {
			setCenter({ lat: config.lat, lng: config.lng });
		}
	}, [config]);

	const ChangeView = () => {
		const map = useMap();
		map.setView(center);
		return null;
	};

	return (
		<main>
			<MapContainer center={center} zoom={15}>
				<ChangeView />
				<TileLayer />
				<Marker position={center} icon={iconCustom} />
			</MapContainer>
		</main>
	);
}

export default Main;
