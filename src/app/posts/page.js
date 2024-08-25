import { getPost } from "@/services/postApi";
import Link from "next/link";



const PagePage = async () => {
    const postsData = await getPost()
    // console.log(postsData);
    return (
        <div>
            page route
            <h1 className="text-3xl">All Post</h1>
            <div className=" grid grid-cols-4 gap-6 ">
                {
                    postsData?.slice(0,10).map((post) => <div key={post.id} className="border-2 p-2 border-red-800 shadow-lg">
                        <h1 className="text-xl">{post.title}</h1>
                        <p className="mt-2">{post.body}</p>
                        <Link href={`/posts/${post.id}`}><button className="  capitalize text-xl border-2 border-black">see post </button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PagePage;