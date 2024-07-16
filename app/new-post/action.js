"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

export async function createPost(currentState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  if (!title || !content) {
    return {
      message: "incomplete",
    };
  }

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
