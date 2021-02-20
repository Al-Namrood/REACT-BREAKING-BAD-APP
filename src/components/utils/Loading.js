import React from "react";
import spinner from "../../img/spinner.gif";
const Loading = () => {
	return (
		<img
			alt='loading'
			src={spinner}
			style={{ width: "200px", margin: "auto", display: "block" }}
		/>
	);
};

export default Loading;
