export async function fetchPosts(): Promise<Array<{ id: number; title: string }>> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}
