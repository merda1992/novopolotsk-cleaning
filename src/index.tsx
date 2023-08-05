import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/index';
import './utils/i18n';
import { ApolloClient, InMemoryCache, ApolloProvider, ApolloLink, createHttpLink } from '@apollo/client';
import Cookies from 'js-cookie';

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = Cookies.get('token');

  operation.setContext({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return forward(operation);
});

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authMiddleware.concat(httpLink),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
);
