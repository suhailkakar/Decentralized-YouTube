import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./utils/ThemeContext";
import Background from "./components/Background";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/salmandabbakuti/ourtube",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <Background>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeProvider>
            <Toaster />
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    </React.StrictMode>
  </Background>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
