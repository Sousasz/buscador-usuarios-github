import { SuccessResult } from "../success-result";
import { ErrorResult } from "../error-result";

interface SearchResultProps {
  useInfo: object;
}

export function SearchResult({ useInfo }: SearchResultProps) {
  return (
    <>
      {useInfo.login ? (
        <SuccessResult useInfo={useInfo} />
      ) : (
        <ErrorResult />
      )}
    </>
  );
}
