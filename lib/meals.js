import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("setTimeout completed after 5000ms");
      resolve(); // Resolve the promise after 5000ms
    }, 5000);
  });

  return db.prepare("SELECT * FROM meals").all();
}
