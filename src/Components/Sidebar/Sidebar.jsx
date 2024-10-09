import { Preparing } from "../Preparing/Preparing";
const Sidebar = ({ ordered }) => {
  return (
    <div className="border-2 border-black p-6">
      <h2 className="text-3xl font-bold text-center">
        Want to Cook : {ordered.length}
      </h2>
      <hr />
      <div>
        <ul className="flex justify-between">
          <li>Name</li>
          <li>Time</li>
          <li>Calories</li>
        </ul>
      </div>
      <div>
        {ordered.map((item, idx) => (
          <Preparing key={idx} item={item}></Preparing>
        ))}
      </div>
    </div>
  );
};
export { Sidebar };
