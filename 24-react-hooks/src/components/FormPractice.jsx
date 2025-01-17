import { useState } from "react";
import { useForm } from "react-hook-form";
export default function FormPractice() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="이름"
            {...register("name", { required: "이름은 필수항목입니다." })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <br />
          <input
            type="number"
            placeholder="나이"
            {...register("age", {
              required: "나이는 필수항목입니다.",
              min: {
                value: 0,
                message: "나이는 숫자 0 이상이여야합니다.",
              },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
          <br />
          <button type="submit">제출</button>
        </div>
      </form>
    </>
  );
}
