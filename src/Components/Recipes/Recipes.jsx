import { useEffect, useState } from "react";
import { Recipe } from "../Recipe/Recipe";
import { Sidebar } from "../Sidebar/Sidebar";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("allrecipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  // currently stored ordered recipe
  const [ordered, setOrdered] = useState([]);

  // handle ordered recipes
  const handleCookings = (recipe) => {
    let Includes = ordered.includes(recipe);
    if (!Includes) {
      const newOrdered = [...ordered, recipe];
      setOrdered(newOrdered);
    }
  };

  return (
    <div className="grid gap-8 my-28 ">
      <div className="text-center grid gap-8">
        <h2 className="text-4xl font-bold">Our Recipes</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum modi
          vero nemo saepe nisi, obcaecati id quaerat dicta voluptates aspernatur
          ipsum eos, cumque qui porro fuga quam et fugit aperiam.
        </p>
      </div>

      <div className="flex justify-between gap-5">
        <div className="grid grid-cols-2 gap-8 w-2/3">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe_id}
              recipe={recipe}
              handleCookings={handleCookings}
            ></Recipe>
          ))}
        </div>
        <div className="w-1/3">
          <Sidebar ordered={ordered}></Sidebar>
        </div>
      </div>
    </div>
  );
};
export { Recipes };
