/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styles from './Widgets.module.css';

type ModalProps = {
  value: number;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  changeEditModeHandler: (value: boolean) => void;
  isEdit: boolean;
};

const InputModal: React.FC<ModalProps> = ({
  value,
  changeHandler,
  changeEditModeHandler,
  isEdit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const blurHandler = (e: Event) => {
    if (
      e.target instanceof HTMLElement &&
      modalRef.current &&
      !modalRef.current.contains(e.target)
    ) {
      changeEditModeHandler(false);
    }
  };

  const toggleListeners = (isActivate: boolean) => {
    if (inputRef && inputRef.current) {
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
    }
  };

  useEffect(() => {
    toggleListeners(true);
    return () => toggleListeners(false);
  }, []);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.select();
    }
  }, [isEdit]);

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
  const fieldRef = useRef<HTMLDivElement>(null);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [value, setValue] = useState<number>(quantity);

  const clickHandler = () => {
    setIsEdit(true);
  };

  const changeEditModeHandler = (newIsEdit: boolean) => {
    setIsEdit(newIsEdit);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  };

  useEffect(() => {
    if (!isEdit) onChange(currency, value);
  }, [isEdit]);

  return (
    <div
      className={styles.ExchangeField}
      onKeyDown={() => null}
      tabIndex={0}
      role="button"
      ref={fieldRef}
      onClick={clickHandler}
    >
      {isEdit ? (
        <InputModal
          value={value}
          changeHandler={changeHandler}
          changeEditModeHandler={changeEditModeHandler}
          isEdit={isEdit}
        />
      ) : (
        <>
          <span>{currency}</span>
          <span>{quantity}</span>
        </>
      )}
    </div>
  );
};
export default ExchangeField;
