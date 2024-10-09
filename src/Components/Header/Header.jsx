import { RxAvatar } from "react-icons/rx";
const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center my-11">
      <h1 className="text-4xl font-bold">Recipe Calories</h1>
      <div>
        <ul className="flex flex-col lg:flex-row justify-between items-center gap-7 text-2xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Recipes</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-4 bg-gray-100 p-2 rounded-xl my-4">
          <input
            type="text"
            placeholder="Type here"
            className="input bg-transparent border-0"
          />
          <button className="btn bg-none ">search</button>
        </div>
        <h3 className="text-4xl">
          <a className="flex justify-between items-center gap-4" href="">
            <RxAvatar className="bg-green-400 rounded-full" />
            <span>User Name</span>
          </a>
        </h3>
      </div>
    </div>
  );
};
export { Header };
