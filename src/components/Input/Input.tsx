import styles from './input.module.scss';

type InputType = {
  type: string;
  placeholder: string;
  className: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<InputType> = ({
  type,
  placeholder,
  className,
  onChange,
}) => (
  <div className={styles.input_row}>
    <input
      onChange={onChange}
      className={styles[className]}
      type={type}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
