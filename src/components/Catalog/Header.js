import React from 'react';

const Header = ({formattedName}) => {
	return (
		<div className="catalog__header">
			<div className="catalog__container">
				<h1 className="catalog__title">{formattedName}</h1>
			</div>
		</div>
	);
};

export default Header;