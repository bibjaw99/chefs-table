const Recipe = ({ recipe, handleCookings }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="grid gap-4 bg-gray-200 border-2 border-black p-6 drop-shadow-2xl rounded-2xl">
      <img
        className="w-[400px] h-[250px] rounded-2xl mx-auto "
        src={recipe_image}
        alt=""
      />
      <h2 className="text-3xl">{recipe_name}</h2>
      <h2 className="text-l text-gray-500">{short_description}</h2>
      <hr />
      <h2>Ingredients {ingredients.length}</h2>
      <ul>
        {ingredients.map((item, idx) => (
          <li key={idx}> - {item}</li>
        ))}
      </ul>
      <hr />
      <div className="flex justify-between">
        <h3>Time: {preparing_time}</h3>
        <h3>Calories: {calories}</h3>
      </div>
      <button
        onClick={() => handleCookings(recipe)}
        className="btn bg-green-400 "
      >
        Want to cook
      </button>
    </div>
  );
};
export { Recipe };
