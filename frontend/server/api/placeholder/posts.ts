import type { Post } from "~/types/Post";

export default async (_req: any, _res: Post[], _next: any) => {
  console.log('/api/placeholder/posts');
  const posts: Post[] = await $fetch("https://jsonplaceholder.typicode.com/posts");
  return posts.slice(0, 15);
}