"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handleImagePickerClick = () => {
    imageInput.current.click();
  };

  const handlePickedImage = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
    }

    // handling image preview as data url
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image pick yet</p>}
            {pickedImage && (
              <Image src={pickedImage} alt="image picked by user" fill />
            )}
          </div>
          <input
            type="file"
            className={classes.input}
            id={name}
            name={name}
            accept="image/png,image/jpeg,"
            ref={imageInput}
            onChange={handlePickedImage}
            required
          />
        </div>
        <button
          type="button"
          className={classes.button}
          onClick={handleImagePickerClick}
        >
          Pick an image
        </button>
      </div>
    </>
  );
}
