import categories from "./Categories";
interface Props {
  selectedCategory: string;
  onClick: (cat: string) => void;
}

export default function TodoFilter({ onClick, selectedCategory }: Props) {
  return (
    <div className="bg-white-100 dark:bg-dark-grayish-blue-700 dark:shadow-md-dark rounded-md px-6 py-4 shadow-sm mt-6 relative sm:shadow-none sm:rounded-none sm:mt-0 sm:p-0">
      <div className="text-[12px] md:text-[14px] text-dark-grayish-blue-100 dark:text-dark-grayish-blue-400  flex gap-[20px] items-center mx-auto w-fit font-bold">
        {categories.map((cat, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onClick(cat)}
            className={
              selectedCategory === cat
                ? "text-blue"
                : "dark:hover:text-light-grayish-blue-100 hover:text-dark-grayish-blue-400 transition-colors"
            }
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
