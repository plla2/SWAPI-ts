import { PropsType } from "./Type";

const Button = ({ text, open, name }: PropsType) => {
  return (
    <button onClick={open} aria-label={String(text)} className={name}>
      {text}
    </button>
  );
};

export default Button;
