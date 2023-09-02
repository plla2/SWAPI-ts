import { PropsType } from "./Type";

const Button = ({ text, open }: PropsType) => {
  return (
    <button onClick={open} aria-label={text}>
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
