import "./App.css";
import { SimpleGrid, Box } from "@chakra-ui/react";
import UserProfile from "./Components/UserProfile";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  // const allTasks = useSelector((store) => store.appReducer.allTasks);
  // const isLoading = useSelector((store) => store.appReducer.isLoading);
  // const isError = useSelector((store) => store.appReducer.errorMessage);
  // const errorMessage = useSelector((store) => store.appReducer.error);

  return (
    <div className="App">
      <div className="mainGrid">
        <div className="user-profile">
          <UserProfile />
        </div>
        <div className="user-task-table">
          <AllRoutes/>
        </div>
      </div>
    </div>
  );
}

export default App;
