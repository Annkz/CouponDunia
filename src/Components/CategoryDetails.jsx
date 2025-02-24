import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import categories from "../assets/categoryData/CategoriesData.js";

const CategoryDetails = () => {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === parseInt(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedTag, setSelectedTag] = useState("All");

  if (!category) {
    return (
      <h2 className="text-center text-2xl font-bold mt-10">
        Category Not Found
      </h2>
    );
  }

  const filteredData = selectedTag === "All" ? category.data : [selectedTag];

  return (
    <div className="p-4 sm:p-8">
      {/* Category Title */}
      <h1 className="text-3xl font-bold text-center mb-6 capitalize">
        {category.name} Offers
      </h1>

      {/* Sort By Tags */}
      <div className="flex flex-wrap items-center gap-4 mb-4 justify-center">
        <h2 className="font-semibold text-lg">Sort By Tags</h2>
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-4 py-2 rounded-full font-semibold transition ${
            selectedTag === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {category.data.slice(0, 5).map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(item)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition ${
              selectedTag === item
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span>🌟</span> {item}
          </button>
        ))}
      </div>

      {/* Remaining Categories */}
      <div className="flex flex-wrap items-center gap-4 mb-6 justify-center">
        {category.data.slice(5).map((item, index) => (
          <button
            key={index}
            onClick={() => setSelectedTag(item)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-200 transition ${
              selectedTag === item
                ? "bg-gray-400 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <span>🌟</span> {item}
          </button>
        ))}
      </div>

      {/* Selected Data Display */}
      <div className="space-y-8">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition flex flex-col text-center"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2 justify-center">
              <span>🌟</span> {item}
            </h3>
            <p className="text-gray-600">
              Limited-time offers available for {item}!
            </p>
            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded-md text-lg hover:bg-red-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Back to Categories
        </Link>
      </div>
    </div>
  );
};

export default CategoryDetails;
