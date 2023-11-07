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
}

export default function TodoForm({ onSubmit }: Props) {
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
        <button className="h-5 w-5 overflow-hidden" type="button">
          <span className="sr-only">Theme Switcher</span>
          <img src="./images/icon-moon.svg" alt="theme-switcher" />
        </button>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <label
          htmlFor="todo"
          className="bg-white-100 flex gap-4 items-center px-5 py-[14px] rounded-md"
        >
          <span className="sr-only">Input Field</span>
          <div className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] rounded-full border-[1.4px] border-light-grayish-blue-100 relative"></div>
          <input
            {...register("task", { required: true })}
            type="text"
            id="todo"
            placeholder="Create a new Todo..."
            className="outline-none text-[13px] md:text-[16px]  border-none placeholder:text-[13px] sm:placeholder:text-[15px] placeholder:text-dark-grayish-blue-100 w-full"
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
