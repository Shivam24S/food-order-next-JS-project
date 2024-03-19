"use client";
import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  const imageInput = useRef();

  const handleImagePickerClick = () => {
    imageInput.current.click();
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <input
            type="file"
            className={classes.input}
            id={name}
            accept="image/png ,image/jpeg"
            ref={imageInput}
          />
        </div>
        <button
          type="button"
          className={classes.button}
          onClick={handleImagePickerClick}
        >
          ImagePicker
        </button>
      </div>
    </>
  );
}
