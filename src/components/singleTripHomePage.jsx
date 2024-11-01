import Image from "next/image";

export default function SingleTripHomePage() {
  return (
    <div className="w-full border rounded my-4">
    <div
  className="h-56 bg-black bg-cover bg-center"
  style={{ backgroundImage: "url('https://wallpapers.com/images/featured/best-travel-background-04ml2h9wywaoo6ei.jpg')" }}
></div>      <div className="h-auto bg-white p-2 text-left">
        <h1 className="font-semibold text-2xl p-4">Discover the magic of the Pacific Northwest !</h1>
        <div className="flex justify-between items-center p-4">
            <div>

<div className="flex items-center mb-4">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
<p className="text-xl font-normal mx-4">Nepal , upper Mustang</p>
</div>
<div className="flex items-center  mb-4">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

<p className="text-xl font-normal mx-4">7 Days</p>
</div>


            </div>
            <div className="text-2xl font-bold">2.300$</div>
        </div>
        <hr></hr>

        <p className="p-4 text-lg">tart in vibrant Seattle, exploring the Space Needle and Pike Place Market. Then, venture to Olympic National Park for serene forests and coastal views.</p>
<button className="w-full p-3 rounded bg-primaryGreen text-white text-xl">View details</button>
      </div>

    </div>
  );
}
