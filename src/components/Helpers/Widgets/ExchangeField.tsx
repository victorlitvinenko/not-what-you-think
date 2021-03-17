import React, { useState, useEffect, useRef } from 'react';
import styles from './Widgets.module.css';

type ModalProps = {
  value: number;
  changeHandler: (e: Event) => void;
  changeEditModeHandler: (value: boolean) => void;
};

const InputModal: React.FC<ModalProps> = ({
  value,
  changeHandler,
  changeEditModeHandler,
}) => {
  const modalRef = useRef();
  const inputRef = useRef();

  const blurHandler = (e: MouseEvent) => {
    if (!modalRef.current.contains(e.target)) {
      changeEditModeHandler(false);
    }
  };

  const toggleListeners = (isActivate: boolean) => {
    if (isActivate) {
      document.addEventListener('click', blurHandler);
      inputRef.current.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') changeEditModeHandler(false);
      });
    } else {
      document.removeEventListener('click', blurHandler);
      inputRef.current.removeEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') changeEditModeHandler(false);
      });
    }
  };

  useEffect(() => {
    toggleListeners(true);
    return () => toggleListeners(false);
  }, [toggleListeners]);

  return (
    <div className={styles.inputModal} ref={modalRef}>
      <input
        type="number"
        className={styles.input}
        value={value}
        onChange={changeHandler}
        ref={inputRef}
      />
    </div>
  );
};

type Props = {
  currency: string;
  quantity: number;
  onChange: (currency: string, quantity: number) => void;
  main?: boolean;
};

const ExchangeField: React.FC<Props> = ({ currency, quantity, onChange }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<number>(quantity);

  const changeEditModeHandler = (newIsEdit: boolean) => {
    setIsEdit(newIsEdit);
  };

  useEffect(() => {
    if (!isEdit) onChange(currency, value);
  }, [isEdit]);

  return isEdit ? (
    <InputModal
      value={value}
      changeHandler={(e: Event) => setValue(parseFloat(e.target.value))}
      changeEditModeHandler={changeEditModeHandler}
    />
  ) : (
    <div>
      <span>{currency} :</span>
      <span>{quantity}</span>
    </div>
  );
};
export default ExchangeField;
