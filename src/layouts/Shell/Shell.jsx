import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'assets/theme';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { Wrapper } from 'components/Elements';
import Form from 'views/Form';
import List from 'views/List';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: stretch;
	height: 100vh;
	width: 100vw;
	overflow-x: hidden;
`;
const Main = styled(Wrapper)`
	flex: 1 0 auto;
	width: 100%
`;
function Shell() {
	return (
		<ThemeProvider theme={theme}>
			<Container>
				<Router>
					<Header />
					<Main as="main">
						<Route path="/" exact component={Form} />
						<Route path="/submissions/" component={List} />
					</Main>
					<Footer />
				</Router>
			</Container>
		</ThemeProvider>
	);
}

export default Shell;
