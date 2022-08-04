import { allCollections } from "../lib/api";

export default function TestApi() {
  return (
    <button
      onClick={(_) => {
        allCollections();
      }}
    >
      do
    </button>
  );
}
