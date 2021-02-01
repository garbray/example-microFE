import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";
import { load } from "growlers/store";
import Taps from "growlers/Taps";
import Search from "growlers/Search";
import Cart from "growlers/Cart";
import Data from "growlers/Data";
load("hv-taplist");

const App = () => (
  <ChakraProvider>
    <div
      style={{
        gridTemplate: "1fr / 3fr",
        maxWidth: "960px",
        margin: "auto",
        display: "grid",
        gridColumnGap: "1rem",
      }}
    >
      <div>
        <Search />
        <Cart />
        <Data>
          {({ filteredTaps }) =>
            filteredTaps.map(({ beverageName }) => (
              <div key={beverageName}>{beverageName}</div>
            ))
          }
        </Data>
      </div>
      <Taps />
    </div>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
