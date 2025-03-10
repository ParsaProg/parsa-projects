import Link from "next/link";
import { LuTimer } from "react-icons/lu";


export default function App() {
  return (
    <div className="app text-center bg-black text-white h-[100vh] justify-center items-center flex flex-col text-3xl">
      Parsa Projects in the web
      <Link href={"/timer"}>
        <button className="flex items-center justify-center bg-white text-black rounded-md mt-[20px] px-3 py-2 text-lg hover:text-white border-[1px] border-white transition-all duration-200 hover:bg-transparent">
          Timer Project
          <LuTimer size={20}/>
        </button>
      </Link>
    </div>
  );
}
