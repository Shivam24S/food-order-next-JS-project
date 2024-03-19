"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// handling form submission using server Side action
export async function mealFormData(formData) {
  // form validation on server side

  function IsInvalidate(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("email"),
  };

  if (
    IsInvalidate(meal.title) ||
    IsInvalidate(meal.creator) ||
    IsInvalidate(meal.summary) ||
    IsInvalidate(meal.instructions) ||
    IsInvalidate(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    throw new Error("Invalidate Inputs please correct and try again");
  }

  await saveMeal(meal);

  redirect("/meals");
}
