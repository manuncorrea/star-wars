import { InputContainer } from "./styles";

//@ts-ignore
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <InputContainer
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;