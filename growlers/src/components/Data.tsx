import React, { ReactElement, FC } from "react";
import { useProxy } from "valtio";

import store, { TapStore } from "../store";

const DataComponent: FC<{
  children: (state: TapStore) => ReactElement<any, any>;
}> = ({ children }) => {
  const state = useProxy(store);
  return children(state);
};

export default DataComponent;
