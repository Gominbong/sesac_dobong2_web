import { useForm } from "react-hook-form";
export default function Form() {
  const {
    register, //input의 변경 감지
    handleSubmit, //form 의 submit 이벤트 발생시 호출
    watch, //특정 필드의 값을 실시간으로 관찰
    formState: { errors },
  } = useForm();

  //단축 평가
  //   console.log("단축평가 || 논리합", true || "hello");
  //   console.log("단축평가 || 논리합", false || "hello");
  //   console.log("단축평가 && 논리곱", true && "hi");
  //   console.log("단축평가 && 논리곱", false && "hi");
  const userNameRegister = register("username");
  console.log(userNameRegister);
  console.log("error = ", errors);

  const onValid = (data) => {
    console.log("유효한 데이터", data);
  };

  const onInValid = (error) => {
    console.log("유효하지 않은 데이터", error);
  };
  console.log("watch", watch());
  console.log("watch username", watch("username"));

  return (
    <form
      onSubmit={handleSubmit(onValid, onInValid)}
      style={{ border: "1px solid salmon", padding: "10px" }}
    >
      <input
        type="text"
        {...register("username", {
          //erros 객체로 매세지 전달됨
          //errors.username.message
          required: "이름을 입력해주세요",
          minLength: {
            value: 2,
            message: "2글자 이상 입력해주세요",
          },
        })}
        placeholder="username"
        name="username"
      />
      {errors.username?.message}
      <br />
      <input
        type="email"
        {...register("email", {
          required: "이메일을 입력해주세요",
          validate: {
            useGmail: (value) => {
              //인자로 들어오는 value는 input.value
              return (
                /^[a-zA-Z0-9._%+-]+gmail\.com$/.test(value) ||
                "gmail로만 가입 가능 합니다."
              );
            },
          },
        })}
        placeholder="email(gmail)"
        name="email"
      />
      {errors.email?.message}
      <br />
      <input
        type="password"
        {...register("password")}
        placeholder="password"
        name="password"
      />
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
