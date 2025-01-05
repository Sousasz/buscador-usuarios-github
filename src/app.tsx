import { Search } from "lucide-react";

export function App() {
  return (
    <div className="bg-neutral-dark min-h-screen flex items-center flex-col py-20">
      <div className="w-[30rem] flex flex-col gap-7">
        <div className="w-72 ">
          <h1 className="text-white text-3xl font-semibold text-start ">
            GitHub Users
          </h1>
          <span className="text-stone-50">Find GitHub users</span>
        </div>

        <div className="bg-neutral-base border border-neutral-light w-[35rem] h-14 rounded-full flex justify-between items-center">
          <div className="w-full flex gap-5 px-5 ">
            <Search color={"#505A65"} size={30} />
            <input
              className="bg-transparent placeholder:text-neutral-light placeholder:italic outline-none text-white w-full"
              type="text"
              placeholder="Ex.: Sousasz"
            />
          </div>

          <button
            className="text-white text-lg font-semibold bg-green-light rounded-full h-full w-52 outline-none"
            type="submit"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
