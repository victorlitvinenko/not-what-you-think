/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Widgets.module.css';

type ModalProps = {
  value: number;
  changeHandler: () => void;
  changeEditModeHandler: (value: boolean) => void;
};

const InputModal: React.FC<ModalProps> = ({
  value,
  changeHandler,
  changeEditModeHandler,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const blurHandler = useCallback(
    (e: React.MouseEvent<HTMLDocument>) => {
      if (
        modalRef &&
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        changeEditModeHandler(false);
      }
    },
    [changeEditModeHandler]
  );

  const toggleListeners = useCallback(
    (isActivate: boolean) => {
      if (inputRef && inputRef.current) {
        if (isActivate) {
          document.addEventListener('click', blurHandler);
          inputRef.current.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Enter') changeEditModeHandler(false);
          });
        } else {
          document.removeEventListener('click', blurHandler);
          inputRef.current.removeEventListener(
            'keydown',
            (e: KeyboardEvent) => {
              if (e.key === 'Enter') changeEditModeHandler(false);
            }
          );
        }
      }
    },
    [blurHandler, changeEditModeHandler]
  );

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
