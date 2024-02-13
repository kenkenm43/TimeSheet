import { getPosts } from "@/lib/data";
import React from "react";

//FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // const posts = await getData();
  const posts = await getPosts();
  return (
    <div>
      BlogPage
      {posts.map((post) => (
        <div key={post.id}>dawdw</div>
      ))}
    </div>
  );
};

export default BlogPage;
