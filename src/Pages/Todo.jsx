import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    });

    toast("Deleted successfully", {
      theme: "colored",
      type: "success",
      autoClose: 3000,
    });
  };
  const handleTrought = () => {
    dispatch({
      type: "TROUGH_TODO",
      payload: todo.id,
    });
    toast("Ustiga chizildi", {
      theme: "colored",
      type: "success",
      autoClose: 3000,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{todo.title}</span>
      <div className="actions d-flex gap-3">
        <button className="btn btn-info" onClick={handleTrought}>
          <i className="fa-solid fa-check"></i>
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
    </li>
  );
};

const TodoApp = () => {
  const dispatch = useDispatch();

  const todos = useSelector((store) => store.todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    if (!title)
      return toast("Input is required!", {
        theme: "colored",
        type: "error",
        autoClose: 3000,
      });
    if (title.length <= 3) {
      return toast("there must be at least 4 characters", {
        theme: "colored",
        type: "warning",
        autoClose: 3000,
      });
    }




    toast("Added successfully", {
      theme: "colored",
      type: "success",
      autoClose: 3000,
    });

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: crypto.randomUUID(),
        title,
        isCompleted: false,
      },
    });

    e.target.reset();
    if(todos.value === 0){
      <h1>Hali yoq</h1>
    }
  };

  return (
    <>
     
     
      <h1 className="text-center">Todo App</h1>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Write a todo..."
          />
          <button className="btn btn-success">Add</button>
        </div>
      </form>
      <ul className="list-group my-3">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
