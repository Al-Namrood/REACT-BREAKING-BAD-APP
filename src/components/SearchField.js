import { getSuggestedQuery } from "@testing-library/react";
import React, { useState } from "react";

const SearchField = ({getQuery}) => {
	const [text, setText] = useState("");

    const handleOnChange = (q) => {
        setText(q)
        getQuery(q)
    }
	
	return (
		<section className='search'>
			<form>
				<input
					type='text'
					className='form-control'
					placeholder='Search characters'
					value={text}
					onChange={(e) => handleOnChange(e.target.value)}
					autoFocus
				/>
			</form>
		</section>
	);
};

export default SearchField;
