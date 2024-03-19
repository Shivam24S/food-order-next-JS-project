"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";

// handling form submission using server Side action
export async function mealFormData(prevState, formData) {
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
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "invalidate Input please correct your input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");

  redirect("/meals");
}
