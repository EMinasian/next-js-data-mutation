"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/cloudinary";
import { revalidatePath } from "next/cache";

export async function createPost(currentState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  if (!title || !content) {
    return {
      message: "incomplete",
    };
  }

  let imageUrl;
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Image uplaod failed", error);
  }

  await storePost({
    imageUrl: imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}
