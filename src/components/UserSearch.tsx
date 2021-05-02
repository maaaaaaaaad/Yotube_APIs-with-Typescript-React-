import React, { useRef } from "react";

interface UserSearchValue<T> {
  userTextValue: (userTextValue: T) => void;
}

type UserSearchValueType = UserSearchValue<string | number>;

const UserSearch: React.FC<UserSearchValueType> = ({ userTextValue }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const currentValue = inputRef.current!.value;
    currentValue && userTextValue(currentValue);
    formRef.current!.reset();
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input ref={inputRef} type="text" placeholder="Please you enter text" />
      <input type="submit" value="SIGN" />
    </form>
  );
};

export default UserSearch;
