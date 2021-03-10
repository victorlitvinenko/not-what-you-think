import styles from './button.module.scss';

type ButtonType = {
  type: string;
  text: string;
  onSubmit: () => void;
};

const Button: React.FC<ButtonType> = ({ type, text, onSubmit }) => (
  <button
    onClick={onSubmit}
    className={`${styles.button} ${styles[type]}`}
    type="submit"
  >
    {text}
  </button>
);

export default Button;
