import { unstable_noStore as noStore } from "next/cache";

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
];
const posts = [
  { id: 1, title: "Post 1", body: ".....", userId: 1 },
  { id: 2, title: "Post 2", body: ".....", userId: 1 },
  { id: 1, title: "Post 3", body: ".....", userId: 2 },
  { id: 2, title: "Post 4", body: ".....", userId: 2 },
];
export const getPosts = async () => {
  //   noStore();
  return posts;
};
export const getPost = async (id: number) => {
  return posts.find((post) => post.id === id);
};
export const getUser = async (id: number) => {
  return users.find((user) => user.id === id);
};
