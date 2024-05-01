"use client";
import React, { useState, useEffect,useRef } from "react";

function EditInput() {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [initialValue, setInitialValue] = useState('');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setInitialValue(inputRef.current.value); // Capture initial value
    }
  };

  const handleSave = () => {
    // Implement logic to save edited value (e.g., send to server)
    console.log('Saved value:', inputRef.current.value);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input ref={inputRef} type="text" value={initialValue} onChange={() => {}} />
      ) : (
        <span>{initialValue}</span>
      )}
      <button onClick={handleEditClick}>Edit</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
    </div>
  );
}

export default EditInput;
