/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  task: z.string().min(5, { message: "Task should be at least 5 characters." }),
});

type TodoFormData = z.infer<typeof schema>;
interface Props {
  onSubmit: (data: TodoFormData) => void;
  onClick: () => void;
  mode: string;
}

export default function TodoForm({ onSubmit, onClick, mode }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TodoFormData>({ resolver: zodResolver(schema) });

  return (
    <div className="grid gap-10 pb-5">
      <div className="flex items-center justify-between">
        <h1 className="uppercase leading-4 tracking-[10px] font-bold text-white-100 text-3xl">
          Todo
        </h1>
        <button
          onClick={onClick}
          className="h-6 w-6 overflow-hidden"
          type="button"
        >
          <span className="sr-only">Theme Switcher</span>
          <img
            src={
              mode === "dark"
                ? "./images/icon-sun.svg"
                : "./images/icon-moon.svg"
            }
            alt="theme-switcher"
          />
        </button>
      </div>
      <form
        id="form"
        aria-label="form-label"
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <label
          aria-label="aside-label"
          htmlFor="todo"
          className="bg-white-100 dark:bg-dark-grayish-blue-700 flex gap-4 items-center px-5 py-[14px] rounded-md dark:text-light-grayish-blue-300"
        >
          <span className="sr-only">Input Field</span>
          <span className="w-[20px] h-[20px] lg:w-[24px] lg:h-[22px] rounded-full border-[1.4px] border-light-grayish-blue-100 dark:border-dark-grayish-blue-200"></span>
          <input
            {...register("task", { required: true })}
            type="text"
            id="todo"
            placeholder="Create a new Todo..."
            className="outline-none text-[13px] md:text-[16px]  border-none placeholder:text-[13px] sm:placeholder:text-[15px] placeholder:text-dark-grayish-blue-100 dark:placeholder:text-dark-grayish-blue-200 w-full dark:bg-dark-grayish-blue-700 bg-white-100 text-dark-grayish-blue-700 dark:text-light-grayish-blue-300"
          />
        </label>
        {errors.task && (
          <p className="text-white-100 pt-[1px] text-[12px]">
            {errors.task.message}
          </p>
        )}
      </form>
    </div>
  );
}
