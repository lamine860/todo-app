import React, { useState } from "react";
import "./AddTodo.css";
type Props = {
  saveTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};
const AddTodo: React.FC<Props> = function ({ saveTodo }) {
  type data = {
    name: string;
    description: string;
  };
  const defaultData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState<ITodo | data>(defaultData);
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name === "" || formData.description === "") return;
    saveTodo(e, formData);
    setFormData(defaultData);
  };
  return (
    <form className="form" onSubmit={handleSave}>
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleForm}
          className="form-input"
        />
      </div>
      <div className="form-field">
        <label htmlFor="name" className="form-label">
          Description
        </label>
        <input
          type="text"
          value={formData.description}
          id="description"
          onChange={handleForm}
          className="form-input"
        />
      </div>
      <div className="form-field">
        <button
          className="btn btn-primary form-btn"
          type="submit"
          disabled={formData === undefined ? true : false}
        >
          Add todo
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
