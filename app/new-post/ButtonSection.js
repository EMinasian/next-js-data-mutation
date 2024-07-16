"use client";
import { useFormStatus } from "react-dom";

export default function ButtonSection() {
  const { pending } = useFormStatus();

  return (
    <p className="form-actions">
      {pending ? (
        <p>Please wait...</p>
      ) : (
        <>
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </>
      )}
    </p>
  );
}
