import TodoFilter from "./TodoFilter";

interface Props {
  filterClick: (cat: string) => void;
  selectCategory: string;
}

const TaskCategoryView = ({ filterClick, selectCategory }: Props) => {
  return (
    <div className="bg-white-100 dark:bg-dark-grayish-blue-700  font-normal text-dark-grayish-blue-100 dark:text-dark-grayish-blue-300 px-5 py-[14px] text-[12px] md:text-[13.5px] rounded-md grid gap-4">
      <div>
        <p className="text-[14px] dark:text-light-grayish-blue-200 flex gap-[20px] items-center mx-auto w-fit font-bold py-6 text-dark-grayish-blue-800">
          No {selectCategory.toLowerCase() === "all" ? "" : selectCategory}{" "}
          Tasks{" "}
        </p>
      </div>
      <div className="hidden sm:block">
        <TodoFilter onClick={filterClick} selectedCategory={selectCategory} />
      </div>
    </div>
  );
};

export default TaskCategoryView