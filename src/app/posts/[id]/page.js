const getPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const PostDeatilePage = async ({ params }) => {
  const { title, body } = await getPost(params.id);
  console.log(params.id);

  return (
    <div>
      <div className="border-2 p-2 border-red-800 shadow-lg">
        <h1 className="text-xl">{title}</h1>
        <p className="mt-2">{body}</p>
      </div>
    </div>
  );
};

export default PostDeatilePage;
