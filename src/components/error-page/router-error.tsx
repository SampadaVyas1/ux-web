import { memo } from "react";

const ErrorPage = () => {
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, requested route not found.</p>
    </div>
  );
};

export default memo(ErrorPage);
