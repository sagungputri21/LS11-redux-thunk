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
        </h2>
        <h2 className="text-lg mt-2">from JSONPlaceholder API</h2>
        <button 
          className="flex mx-auto bg-indigo-500 py-3 px-5 my-8 text-white w-fit rounded-md font-bold"
          onClick={fetchData}
        >
          Get Data
        </button>
        <section className="flex justify-center mx-auto">
          <table className={`max-w-fit md:mx-10 mx-7 mb-10 ${fetchData === null ? "hidden" : ""}`}>
            <thead className="max-w-fit">
              <tr className="bg-indigo-800 text-white">
                <th className="p-2 px-5 text-center py-5">ID</th>
                <th className="p-2">todos</th>
                <th className="p-2 px-5 text-center">Completed</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {todos.map((todo => (
                <tr key={todo.id} className="px-2 py-3 even:bg-gray-200">
                  <td className="p-2">{todo.id}</td>
                  <td className="px-5 py-3">{todo.title}</td>
                  <td className="flex justify-end mr-1 items-center p-2">
                    <p className={`text-white rounded-md py-1 w-24 md:scale-100 scale-95 ${todo.completed === true ? 'bg-green-800' : 'bg-red-700'}`}>
                      {`${todo.completed}`}
                    </p>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </section>
     </div>
  );
};

export default TodosList;
