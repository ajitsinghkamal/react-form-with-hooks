import React, { useState } from 'react';

const DetailsContext = React.createContext({});

export const DetailsConsumer = DetailsContext.Consumer;
export const DetailsProvider = ({ children }) => {
	const [
		list,
		updateList
	] = useState([]);

	const shouldUpdateList = (user) => {
		updateList([
			...list,
			user
		]);
	};

	return (
		<DetailsContext.Provider
			value={{
				list,
				shouldUpdateList
			}}
		>
			{children}
		</DetailsContext.Provider>
	);
};
export default DetailsContext;
