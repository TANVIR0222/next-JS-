"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Melas = () => {
  const [search, setSearch] = useState();
  const [meals, setMeals] = useState([]);

  const loadeData = async () => {
    const res = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    const data = await res.json();
    console.log(data.meals);
    // setMeals(data.meals);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <div className="">
        <input
          onChange={handleChange}
          type="text"
          id="id"
          name="name"
          placeholder="placeholder"
          className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none	bg-transparent"
        />
        <button
          onClick={() => loadeData()}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-
            2 px-4 rounded p-3"
        >
          Search
        </button>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols
            -3 gap-4 p-4"
      >
        {meals &&
          meals?.map((meal) => (
            <div
              key={meal.idMeal}
              className="bg-white rounded-lg shadow-md p-4
                    hover:bg-gray-100 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">{meal.strMeal}</h2>
                <button
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-
                            2 px-4 rounded p-3"
                >
                  View
                </button>
              </div>
              <div className="flex justify-between items-center">
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <p className="text-lg font-bold">{meal.strArea}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Melas;
