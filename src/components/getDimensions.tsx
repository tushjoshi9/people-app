import { useEffect, useState } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	let noOfItems = width < 600 ? 5 : Math.floor((width - 100) / 306);
	return {
		noOfItems,
		width,
		height
	};
}

export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}