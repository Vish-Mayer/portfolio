import React from 'react';

const NOT_FOUND_STYLES = {
  width: "210px",
	height: "100px",
  position: "absolute",
	top:0,
	bottom: 0,
	left: 0,
	right: 0,
	margin: "auto"
}

const PageNotfound = () => {
  return(
    <div className="error-404" style ={NOT_FOUND_STYLES}>
      <h6>404 || Page was not found.</h6>
    </div>
  );
};

export default PageNotfound