"use client";

import { useFormStatus } from "react-dom";

// export default function MealFormStatus() {
//   const { pending } = useFormStatus();

//   return (
//     <>
//   <button disabled={pending}>
//     {pending ? "submitting" : "share Meal"}
//   </button>
//     </>
//   );
// }

const MealFormStatus = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <button disabled={pending}>
        {pending ? "submitting" : "share Meal"}
      </button>
    </>
  );
};
export default MealFormStatus;
