const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 md:p-20 py-8 md:rounded-xl grid gap-8">
      <h2 className="text-5xl text-center font-bold">
        Discover an exceptional cooking <br /> class tailored for you
      </h2>
      <p className="text-3xl text-center text-white font-bold">
        Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
        Database and solve 500+ <br /> coding problems to become an
        exceptionally well world-class Programmer.
      </p>
      <div className="grid grid-cols-2 gap-8">
        <button className="btn text-xl md:text-3xl"> Your Feedback </button>
        <button className="btn text-xl md:text-3xl"> Explore More </button>
      </div>
    </div>
  );
};
export { Banner };
