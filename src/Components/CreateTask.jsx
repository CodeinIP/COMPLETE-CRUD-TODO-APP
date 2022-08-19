import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../App.css";
import { getTasksList } from "../Redux/AppReducer/action";
const CreateTask = () => {
  const dispatch = useDispatch();
  const [vform, setVform] = useState(false);
  const date = new Date().toLocaleDateString();
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    status: "todo",
    subTasks: [],
    date,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const addTask = (e) => {
    e.preventDefault();
    console.log(form);
    axios
      .post("http://localhost:8080/tasks", form)
      .then((res) => dispatch(getTasksList()))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="date">{date}</div>
      <div className="addTaskBtn">
        <button onClick={() => setVform(true)}>CREATE NEW TASK</button>
      </div>
      <div className={vform ? "form" : "noform"}>
        <form onSubmit={(e) => addTask(e)}>
          <div>
            <label htmlFor="category">Category</label>
            <select
              name="category"
              onChange={handleInput}
              value={form.category}
            >
              <option value="Personal">Personal</option>
              <option value="Official">Official</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              required
              name="title"
              onChange={handleInput}
              value={form.title}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              required
              name="description"
              onChange={handleInput}
              value={form.description}
              rows="2"
            />
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
        <button onClick={() => setVform(false)} className="close-form-btn">
          X
        </button>
      </div>
    </>
  );
};

export default CreateTask;
