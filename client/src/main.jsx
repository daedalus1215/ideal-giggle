import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import SongList from './songList/SongList';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { onError } from '@apollo/client/link/error';
import SongCreate from './songCreate/SongCreate';
import SongDetail from './songDetail/SongDetail';

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
// const client = new ApolloClient({
//   link: link,
//   cache: new InMemoryCache(),
// });


const client = new ApolloClient({
  dataIdFromObject: o => o.id, // Tell apollo to use the id in the record to keep track of it and to tell React whenever a particular song is updated.
  link: link,
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={SongList} />
      <Route path="/song/new" component={SongCreate} />
      <Route path="/song/:id" component={SongDetail} />
    </Router>
  </ApolloProvider >
)
