import { useParams } from "react-router-dom";

export default function Card() {
  const { id } = useParams();

  return (
    <div className=" text-center bg-cyan-600 h-lvh text-white">
      <h3 className=" text-xl font-bold ">Card 5</h3>
      <p className=" text-md">This is card Number 5</p>
      <br />
      <p>You can change here with id</p>
      <h3>Card {id}</h3>
    </div>
  );
}
