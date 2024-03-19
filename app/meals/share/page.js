"use client";
import ImagePicker from "@/component/meals/image-picker";
import classes from "./page.module.css";
import { mealFormData } from "@/lib/action";
import MealFormStatus from "@/component/meals/meal-form-status";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
  // separating server action in other file so if i want to use use client i can but if they both in one component
  //  i cant use both so we have to septate them

  // handling error efficient way showing error message from server side
  // spacial react-dom hook  it take two argument first action function and second initialValue
  const [state, formAction] = useFormState(mealFormData, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <p>
            {" "}
            {state.message && (
              <p>invalidate input please correct your input</p>
            )}{" "}
          </p>
          <ImagePicker name="image" label="Your Image" />
          <p className={classes.actions}>
            <MealFormStatus />
          </p>
        </form>
      </main>
    </>
  );
}
