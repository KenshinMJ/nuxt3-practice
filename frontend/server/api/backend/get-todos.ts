import type { Todo } from "~/types/Todo";

export default async (_req: any, _res: Todo[], _next: any) => {
  console.log('/api/backend/get-todos');
  // TODO 環境変数（環境ごとの値）から取得
  const todos: Todo[] = await $fetch("http://localhost:3001/local/todos");
  return todos;
}