import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts() {
  const response = await axios.get<Post[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
