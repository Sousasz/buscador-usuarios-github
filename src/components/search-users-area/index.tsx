import { Search } from "lucide-react";
import { ChangeEvent, FormEvent } from "react";

interface SearchUsersAreaProps {
  onSearchUser: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchUsers: (e: FormEvent<HTMLFormElement>) => void;
  search: string
}

export function SearchUsersArea({ onSearchUser, fetchUsers, search }: SearchUsersAreaProps) {
  return (
    <form
      onSubmit={fetchUsers}
      className="bg-neutral-base border border-neutral-light h-14 rounded-full flex justify-between items-center"
    >
      <div className="w-full flex gap-5 px-5 ">
        <Search className="text-neutral-light size-8" />
        <input
          onChange={onSearchUser}
          value={search}
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
    </form>
  );
}
