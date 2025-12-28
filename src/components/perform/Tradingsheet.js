import { useEffect, useState } from "react";
import axios from "axios";
import Performance from "../servicepage/Performance";

export default function Sheet() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = process.env.REACT_APP_API_URL;
  const [selectedImage, setSelectedImage] = useState(null);

  // Fetch all posts
  const fetchPosts = async () => {
    console.log("hello jix");

    try {
      const res = await axios.get(`${apiUrl}api/posts`);
      console.log(res.data);

      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-[40vh] flex flex-col justify-center items-center px-4">
        <p className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-center">
          Loading Performance Sheet...
        </p>
      </div>
    )
  };

  return (
  <div className="flex flex-col  p-6 justify-start  gap-6">

    <div className=" flex flex-wrap justify-center gap-4">
      {posts.filter((post) => post.category === "trading").length === 0 ? (
        <div className="w-full text-center text-gray-400 text-lg font-semibold">
          No performance sheet available
        </div>
      ) : (
        posts
          .filter((post) => post.category === "trading") // <-- Filter condition
          .map((post) => (
            <div
              key={post._id}
              className="w-full md:w-3/12 h-auto border-2 bg-gradient-to-r from-pink-700 via-purple-700 to-sky-700 p-1 flex justify-center items-center rounded-xl bg-secondary hover:shadow-lg"
              onClick={() => setSelectedImage(post.imageUrl)}
            >
              <div className="p-4 h-full flex items-center rounded-xl bg-white">
                <img
                  src={post.imageUrl}
                  alt={post.category}
                  className="w-full h-fit object-cover rounded-lg"
                />
              </div>
            </div>
          ))
      )}
    </div>

    {selectedImage && (
      <Performance
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    )}

  </div>
);

}
