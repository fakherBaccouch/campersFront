import Image from "next/image";
import SingleTripHomePage from "./singleTripHomePage";
export default function Trip() {
  return (
    <div className="relative  flex py-4 flex-col items-center justify-around  text-center  w-full p-4">
    <h1 className="font-bold text-3xl">Explore popular trips</h1>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
  <SingleTripHomePage/>
<button className="w-full border p-3 rounded bg-orange-400 text-white">View all trips</button>
    </div>
  );
}
