import { format } from "date-fns";
import { useState, useEffect } from "react";

interface SuccessResultProps {
  useInfo: object;
}

export function SuccessResult({ useInfo }: SuccessResultProps) {
  const [creatingDate, setCreatingDate] = useState("")
  const [updatingDate, setUpdatingDate] = useState("")

  useEffect(() => {
    setCreatingDate(format(useInfo.created_at, "dd/MM/yyyy"))
    setUpdatingDate(format(useInfo.updated_at, "dd/MM/yyyy"))
  })

  return (
    <div className="my-10 bg-neutral-base border border-neutral-light rounded-3xl w-full h-96">
      <div className="flex items-center gap-14 p-20 w-full">
        <img
          className="size-48 rounded-full"
          src={useInfo.avatar_url}
          alt="Imagem do GitHub"
        />

        <div className="flex flex-col">
          <h1 className="text-white text-3xl font-semibold text-start italic ">
            {useInfo.login}
          </h1>

          <ul className="text-white py-5">
            <li>
              <span className="text-neutral-soft font-medium">Name:</span>{" "}
              {useInfo.name}
            </li>
            <li className="max-w-[35rem] truncate">
              <span className="text-neutral-soft font-medium ">Bio:</span>{" "}
              {useInfo.bio}
            </li>
            <li>
              <span className="text-neutral-soft font-medium">Followers:</span>{" "}
              {useInfo.followers}
            </li>
            <li>
              <span className="text-neutral-soft font-medium">Following:</span>{" "}
              {useInfo.following}
            </li>
            <li>
              <span className="text-neutral-soft font-medium">
                {" "}
                Created at:
              </span>{" "}
              {creatingDate}
            </li>
            <li>
              <span className="text-neutral-soft font-medium">Updated at:</span>{" "}
              {updatingDate}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
