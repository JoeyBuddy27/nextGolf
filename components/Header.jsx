import React from 'react';
import { AppBar, Container, Toolbar } from '@material-ui/core';

const Header = () => {
	return (
		<header>
			<AppBar color='default'>
				<Toolbar>
					<Container fixed>
						<img src='/logo.svg' alt={'Golfbreaks'} style={{ height: 30 }} />
					</Container>
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
