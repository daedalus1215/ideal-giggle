import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SongList from './components/SongList';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { onError } from '@apollo/client/link/error';


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`)
    });
  }
});


const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/graphql' })
])
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
      </Route>
    </Router>
  </ApolloProvider >
  </React.StrictMode>
)
