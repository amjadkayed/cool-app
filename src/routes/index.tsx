import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import TodoList from "../Apps/TodoList/TodoList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo-list" element={<TodoList />} />
    </Routes>
  );
};

export default AppRoutes;
