import { useState, useEffect } from "react";
import axios from "axios";
import Blogview from "./Blogview";

export default function Blog() {
  const [blogitem, setBlogitem] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [month, monthsearch] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log("hello");
  
  console.log(apiUrl);
  

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}api/blogs`);
        console.log("Fetched blogs:", res.data);

        if (Array.isArray(res.data)) {
          setBlogitem(res.data.reverse());
          setFilteredBlogs(res.data.reverse());
          console.log(filteredBlogs);
          
        } else {
          console.error("Expected array but got:", typeof res.data, res.data);
          setBlogitem([]);
          setFilteredBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔍 Filter blogs when user types
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredBlogs(blogitem);
    } else {
      const lowerSearch = search.toLowerCase();
      const filtered = blogitem.filter(
        (b) =>
          b.title.toLowerCase().includes(lowerSearch) ||
          b.description.toLowerCase().includes(lowerSearch) ||
          b.month.toLowerCase().includes(lowerSearch)
      );
      setFilteredBlogs(filtered);
      setCurrentPage(1); // reset to page 1 on new search
    }
  }, [search, blogitem]);

  if (loading) {
    return(
      <div className="w-full h-screen flex flex-col justify-center items-center">
        
         <p className="p-10 text-5xl font-playfair font-bold">Loading blogs...</p>
      </div>
    );
  }

  // Pagination Calculation
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);


  const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


  return (
    <div className="p-10 mt-20 ">
      {/* 🔍 Search Bar */}
      <div className="mb-6 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search blogs by title or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* 📰 Blog List */}
      <div className=" w-full flex justify-center">
        <div className=" w-[90%] flex flex-wrap justify-evenly gap-6">
        {currentBlogs.length > 0 ? (
          currentBlogs.map((e) => {
            const shortDesc =
              e.description.split(" ").slice(0, 30).join(" ") +
              (e.description.split(" ").length > 30 ? "..." : "");

            return (
              <Blogview
                key={e._id}
                id={e._id}
                title={e.title}
                dis={shortDesc}
                image={e.image}
              />
            );
          })
        ) : (
          <p>No blogs found.</p>
        )}
      </div>
      </div>

      {/* 📄 Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2">

          {/* Prev */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

     <div className="flex justify-center pt-4">
       <div className="w-[90%] flex justify-evenly lg:justify-center flex-wrap gap-3">
        {
          months.map((e)=>{
            return(
          
             <button className="px-4 py-2 text-sm md:text-xl  border-2 border-primary"  onClick={() => {setSearch(e)
              console.log(e);
              
             }} >
              <h2>{e}</h2> 
            </button>
           
          )
          })
        }
      </div>
     </div>
    </div>
  );
}
