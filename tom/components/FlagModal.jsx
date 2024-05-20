import React from "react";

const FlagModal = ({ setShowModal }) => {
	return (
		<div className="absolute top-[200px] left-[200px] w-[300px] h-[300px] bg-orange-300">
			<button onClick={() => setShowModal(false)}>閉じる</button>
		</div>
	);
};

export default FlagModal;
