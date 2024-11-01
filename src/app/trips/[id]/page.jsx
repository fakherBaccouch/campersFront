import Image from "next/image";
export default function SingleTrip() {
  return (
    <div className="relative  flex  flex-col items-center justify-around  text-center  w-full p-4 ">
   <div className="h-72 w-full p-2 overflow-hidden">
   <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D"
        alt="Scenic view"
        layout="responsive"
        width={100}    // Arbitrary width
        height={100}   // Arbitrary height; adjust based on desired aspect ratio
        objectFit="cover"
        quality={60}
      />   </div>
   <h1 className="font-semibold text-2xl pt-4">Discover the magic of the Pacific Northwest !</h1>
   <p className="p-4 text-lg">tart in vibrant Seattle, exploring the Space Needle and Pike Place Market. Then, venture to Olympic National Park for serene forests and coastal views.</p>
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
<div className="text-2xl font-bold py-4">2.300$</div>
<button className="w-full p-2 bg-orange-400 rounded text-white text-xl  ">Reserve now </button>
    </div>
  );
}
