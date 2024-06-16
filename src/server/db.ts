import { turso } from "@/lib/turso";

interface User {
  clerk_id: string;
  username: string;
  full_name: string;
  email: string;
  profile_pic: string;
  is_admin?: boolean;
}

export const createUser = async ({
  clerk_id,
  username,
  full_name,
  profile_pic,
  email
}: User) => {
  if (clerk_id === undefined) throw new Error("Clerk ID is required");
  if (username === undefined) throw new Error("Username is required");
  if (full_name === undefined) throw new Error("First name is required");
  if (email === undefined) throw new Error("Email is required");

  if (username.length > 255) throw new Error("Username must be 255 characters or less");
  if (full_name.length > 255) throw new Error("First name must be 255 characters or less");
  if (email.length > 255) throw new Error("Email must be 255 characters or less");

  if (typeof clerk_id !== "string") throw new Error("Clerk ID must be a string");
  if (typeof username !== "string") throw new Error("Username must be a string");
  if (typeof full_name !== "string") throw new Error("First name must be a string");
  if (typeof email !== "string") throw new Error("Email must be a string");

  const user = await turso.execute({
    sql: "INSERT INTO users (clerk_id, username, full_name, profile_pic, email) VALUES (:clerk_id, :username, :full_name, :profile_pic, :email) RETURNING *",
    args: {
      clerk_id,
      username,
      full_name,
      profile_pic,
      email,
    }
  });

  console.log("user created", user)

  return user
}

export const updateUser = async ({ clerk_id, username, full_name, email, profile_pic }: User) => {
  if (clerk_id === undefined) throw new Error("Clerk ID is required");
  if (username === undefined) throw new Error("Username is required");
  if (full_name === undefined) throw new Error("First name is required");
  if (email === undefined) throw new Error("Email is required");

  if (username.length > 255) throw new Error("Username must be 255 characters or less");
  if (full_name.length > 255) throw new Error("First name must be 255 characters or less");
  if (email.length > 255) throw new Error("Email must be 255 characters or less");

  if (typeof clerk_id !== "string") throw new Error("Clerk ID must be a string");
  if (typeof username !== "string") throw new Error("Username must be a string");
  if (typeof full_name !== "string") throw new Error("First name must be a string");
  if (typeof email !== "string") throw new Error("Email must be a string");

  const user = await turso.execute({
    sql: "UPDATE users SET username = :username, full_name = :full_name, profile_pic = :profile_pic, email = :email WHERE clerk_id = :clerk_id RETURNING *",
    args: {
      clerk_id,
      username,
      full_name,
      profile_pic,
      email,
    }
  });

  console.log("user updated", user)

  return user
}