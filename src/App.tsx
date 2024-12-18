import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "@/pages/home";
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import BoardList from '@/pages/board/list';
import RegisterBoard from '@/pages/board/register';
import EditBoard from '@/pages/board/edit';
import BoardDetail from '@/pages/board/detail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/boards">
          <Route index element={<BoardList />} />
          <Route path="new" element={<RegisterBoard />} />
          <Route path=":boardId" element={<BoardDetail />} />
          <Route path=":boardId/edit" element={<EditBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
