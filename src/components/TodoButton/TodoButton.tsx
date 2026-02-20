import React from "react";

/**
 * TodoButton properties
 */
interface TodoButtonProps {
  /** The title for the todo button. */
  title: string
  /** Event OnClick. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TodoButton = ({ title, onClick }: TodoButtonProps) => {
  return <button type="button" onClick={onClick}>{title}</button>;
};

export default TodoButton;
