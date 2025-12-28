import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Singleblog() {
  const { id } = useParams(); // get id from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        console.log(`${apiUrl}blogs/${id}`);
        
        const res = await axios.get(`${apiUrl}api/blogs/${id}`);
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p className="p-10">Loading blog...</p>;

  if (!blog) return <p className="p-10">Blog not found.</p>;

  return (
    <div className="p-10 max-w-4xl mx-auto mt-20">
      <h1 className="text-4xl text-center font-playfair text-primary capitalize font-extrabold mb-4">{blog.title}</h1>
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
      )}
      <ul className="list-none text-justify list-inside space-y-2 text-lg">
    {blog.description
      .split("\n")
      .filter((point) => point.trim() !== "")
      .map((point, index) => (
        <li key={index}>{point}</li>
      ))}
  </ul>

  <a href="https://t.me/winnersgame/17182" className="text-blue-500  font-semibold">https://t.me/winnersgame/17182</a>
    </div>
  );
}
