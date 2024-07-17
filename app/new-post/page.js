"use client";
import { useFormState } from "react-dom";
import ButtonSection from "./ButtonSection";
import { createPost } from "./action";

export default function NewPostPage() {
  const [state, formAction] = useFormState(createPost, { message: "" });

  const { message } = state;

  return (
    <>
      {message === "incomplete" ? (
        <h1>The title and content should be filled</h1>
      ) : (
        <h1>Create a new post</h1>
      )}

      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <ButtonSection />
      </form>
    </>
  );
}
