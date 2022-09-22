import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "./todos/TodoSlice";

const TodosList = () => {
  const todos = useSelector((state) => state.todos.entities);
  const dispatch = useDispatch();
  const fetchData = () => {
    dispatch(getTodos());
  };

  console.log("Data ==> ", todos);

  return (
     <div className="flex flex-col justify-center">
        <h2 className="text-center text-gray-700 font-semibold text-2xl mt-10">
          Hello!, This are todoslist of user Leanne Graham
        <h2>from JSONPlaceholder API</h2>
        </h2>
        <button 
          className="flex mx-auto bg-indigo-500 py-3 px-5 my-8 text-white w-fit rounded-md"
          onClick={fetchData}
        >
          Get Data
        </button>
        <table className="max-w-fit mx-auto">
          <thead>
            <tr className="bg-indigo-800 text-white">
              <th className="p-2">ID</th>
              <th className="p-2">todos</th>
              <th className="p-2">Completed</th>
            </tr>
          </thead>
          <tbody className="bg-gray-200">
            {todos.map((todo => {
              <tr key={todo.id} className="px-2 py-1">
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td className={`p-1 rounded-md ${todo.completed === true ? 'bg-green-700' : 'bg-red-600'}`}>
                  {`${todo.completed === true ? 'done' : 'pending'}`}</td>
              </tr>
            }))}
          </tbody>
        </table>
     </div>
  );
};

export default TodosList;
