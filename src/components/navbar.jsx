import Image from "next/image";
export default function Navbar() {
  return (
    <div className=" flex pt-4 text-red-400 justify-center flex-col items-center">
      <div className="h-20">
        <Image src="/campers.png" height="200" width="120" />
      </div>
      <div className="bg-primaryGreen w-full p-2 flex">
        <div className="ml-auto flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <div className="text-white px-2">Menu</div>
        </div>
      </div>
    </div>
  );
}
