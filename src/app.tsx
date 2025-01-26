import { Introduction } from "./components/introduction";
import { SearchUsersArea } from "./components/search-users-area";
import { SearchResult } from "./components/search-result";
import { useState, ChangeEvent, FormEvent } from "react";

export function App() {
  const [search, setSearch] = useState("");
  const [useInfo, setUseInfo] = useState({});
  const [ isModalOpen, setIsModalOpen ] = useState(false)

  function onSearchUser(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setIsModalOpen(false)
  }

  function fetchUsers(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (search.trim() === "") {
      return;
    }

    setIsModalOpen(true)

    fetch(`https://api.github.com/users/${search}`).then((response) => {
      response.json().then((data) => {
        setUseInfo(data);
        console.clear()
      });
    }); 
  }

  return (
    <div className="bg-neutral-dark min-h-screen flex items-center flex-col py-20">
      <div className="flex flex-col gap-7">
        <Introduction />
        
        <SearchUsersArea
          search={search}
          onSearchUser={onSearchUser}
          fetchUsers={fetchUsers}
        />

        {isModalOpen ? (
          <SearchResult useInfo={useInfo} />
        ) : (
          null
        )}
      </div>
    </div>
  );
}
