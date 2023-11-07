interface Todo {
  id: number;
  task: string;
  checked: boolean;
}

interface Props {
  todo: Todo[];
  onClick: (id: number) => void;
  onDelete: (id: number) => void;
  onClear: () => void;
}

export default function TodoList({ todo, onClick, onDelete, onClear }: Props) {
  const uncheckedItem = todo.filter((item) => item.checked === false).length;
  if (todo.length === 0) return null;
  return (
    <div>
      <ul className="rounded-md overflow-hidden shadow-md font-light relative">
        {todo.map((item) => (
          <li
            className="bg-white-100 px-5 py-[14px] md:px-6 border-b border-light-grayish-blue-100 last:border-none flex justify-between items-center text-[13px] sm:text-[15px]"
            key={item.id}
          >
            <div className="flex items-center gap-4">
              <div
                onClick={() => onClick(item.id)}
                id={`item-${item.id}`}
                className={`cursor-pointer w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] rounded-full border-light-grayish-blue-100 ${
                  item.checked == true
                    ? "bg-gradient-to-br from-light-blue to-purple border-none relative grid place-items-center"
                    : "border-[1.4px]"
                } `}
              >
                <img
                  className={`${item.checked == false && "hidden"}`}
                  src="./images/icon-check.svg"
                  alt="check"
                />
              </div>

              <p
                className={`${
                  item.checked === true
                    ? "line-through text-light-grayish-blue-200"
                    : ""
                }`}
              >
                {item.task}
              </p>
            </div>
            <button
              onClick={() => onDelete(item.id)}
              className="w-3 h-3 overflow-hidden"
              type="button"
            >
              <span className="sr-only">Delete</span>
              <img src="./images/icon-cross.svg" alt="delete-btn" />
            </button>
          </li>
        ))}
        <li className="bg-white-100 flex justify-between font-normal text-dark-grayish-blue-100 px-5 py-[14px] text-[12px] md:text-[13.5px]">
            <div className={`${uncheckedItem === 0} ? "hidden" : "block"`}>
              {uncheckedItem} {uncheckedItem === 1 ? `item` : "items"} left
            </div>
            <button
              onClick={onClear}
              className="hover:text-dark-grayish-blue-300 transition-all"
              type="button"
            >
              Clear Completed
            </button>
        </li>
      </ul>
    </div>
  );
}
