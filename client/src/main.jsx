import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SongList from './songList/SongList';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { onError } from '@apollo/client/link/error';
import SongCreate from './songCreate/SongCreate';

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
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={SongList} />
        <Route path="/song/new" component={SongCreate} />
      </Router>
    </ApolloProvider >
)
