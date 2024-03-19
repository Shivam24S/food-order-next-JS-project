"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// handling form submission using server Side action
export async function mealFormData(formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("name"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);

  redirect("/meals");
}
