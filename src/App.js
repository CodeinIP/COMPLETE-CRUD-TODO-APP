import "./App.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import UserProfile from "./Components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTasksList } from "./Redux/AppReducer/action";
import TodoCalender from "./Components/TodoCalender";

function App() {
  // const allTasks = useSelector((store) => store.appReducer.allTasks);
  // const isLoading = useSelector((store) => store.appReducer.isLoading);
  // const isError = useSelector((store) => store.appReducer.errorMessage);
  // const errorMessage = useSelector((store) => store.appReducer.error);
  const store = useSelector((store) => store.appReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasksList());
  }, []);
  return (
    <div className="App">
      <div className="mainGrid">
        <div className="user-profile">
          <UserProfile />
        </div>
        <div className="user-task-table">
          <TodoCalender store={store} />
        </div>
      </div>
    </div>
  );
}

export default App;
