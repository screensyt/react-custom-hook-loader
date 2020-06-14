import React from "react";

import useFetchData from "./useFetchData";
import ErrorComponent from "./ErrorComponent";
import LoaderComponent from "./LoaderComponent";

function FetchData({ action, children }) {
  const [data, isLoaded, error] = useFetchData(action);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  if (!data) return null;

  return children(data);
}

export default FetchData;
