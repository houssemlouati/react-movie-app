import React from "react";
import Loader from "react-loader-spinner";
function WithLoading(Component) {
  return function WithLoadingComponent({ load, ...props }) {
    return !load ? (
      <Component {...props} />
    ) : (
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    );
  };
}
export default WithLoading;
