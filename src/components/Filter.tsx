import { IconRemove } from "./IconRemove";

type FilterProps = {
  tags?: string[];
  deleteFilter: (filter: string) => void;
  clearFilter: () => void;
};

export const Filter = ({ tags, deleteFilter, clearFilter }: FilterProps) => {
  return (
    <div className="mx-8">
      {tags && tags?.length > 0 && (
        <div className="mx-auto flex w-full max-w-5xl -translate-y-1/2 items-center justify-between rounded-md bg-white px-8  py-4 shadow-lg">
          <ul className="flex flex-wrap items-center gap-4">
            {tags.map((tag) => (
              <li
                key={tag}
                className="flex items-center justify-between gap-2 rounded-md bg-neutral-filterTablet text-primary"
              >
                <span className="pl-2 font-bold">{tag}</span>
                <button
                  onClick={() => deleteFilter(tag)}
                  className="rounded-r-md bg-primary px-2.5 py-2.5 transition hover:bg-neutral-veryDarkGrayishCyan"
                >
                  <IconRemove />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearFilter}
            className="border-b-2 border-primary border-opacity-0 font-bold capitalize text-primary transition hover:border-opacity-100"
          >
            clear
          </button>
        </div>
      )}
    </div>
  );
};
