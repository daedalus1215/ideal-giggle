import React from 'react'
import './App.css'

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({});

function App() {

  return (<ApolloProvider client={client}>
    <div>Lyrical</div>
  </ApolloProvider>);
}

export default App
