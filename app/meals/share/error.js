"use client";
const error = ({ error }) => {
  return (
    <>
      <div className="error">
        <h1>An error Occurred</h1>
        <p>{error.message}</p>
      </div>
    </>
  );
};

export default error;
