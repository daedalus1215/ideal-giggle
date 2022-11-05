import React from 'react'
import './App.css'
import SongList from './components/SongList';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({});

function App() {

  return (<ApolloProvider client={client}>
    <div>Lyrical</div>
    <SongList />
  </ApolloProvider >);
}

export default App
