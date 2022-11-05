import React from 'react'
import './App.css'
import SongList from './components/SongList';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink } from '@apollo/client';
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

function App() {

  return (<ApolloProvider client={client}>
    <div>Lyrical</div>
    <SongList  />
  </ApolloProvider >);
}

export default App
