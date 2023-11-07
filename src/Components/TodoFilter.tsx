import categories from "./Categories";
interface Props {
  selectedCategory: string;
  onClick: (cat: string) => void;
}

export default function TodoFilter({ onClick, selectedCategory }: Props) {
  return (
    <div className="bg-white-100 rounded-md px-6 py-4 shadow-sm mt-6 relative ">
      <div className="text-[12px] md:text-[14px] text-dark-grayish-blue-100 flex gap-[20px] items-center mx-auto w-fit font-bold">
        {categories.map((cat, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onClick(cat)}
            className={selectedCategory === cat ? "text-blue" : ""}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
