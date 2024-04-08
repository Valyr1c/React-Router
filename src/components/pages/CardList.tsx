import { Link } from "react-router-dom";

export default function CardList() {
  return (
    <div className=" text-center h-lvh bg-indigo-500">
      <h1 className="  text-white font-bold text-xl">CardList</h1>
      <Link className=" text-gray hover:text-white" to={`5`}>
        To card 5
      </Link>
    </div>
  );
}
