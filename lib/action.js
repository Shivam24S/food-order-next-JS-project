"use server";
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
  console.log("meal Data", meal);
}
