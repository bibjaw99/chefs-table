const Preparing = ({ item }) => {
  return (
    <div>
      <ul className="flex justify-between">
        <li>{item.recipe_name}</li>
        <li>{item.preparing_time}</li>
        <li>{item.calories}</li>
      </ul>
    </div>
  );
};
export { Preparing };
