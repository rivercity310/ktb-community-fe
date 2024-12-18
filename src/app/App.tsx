import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "@/pages/home";
import Login from '@/pages/login';
import Signup from '@/pages/signup';
import BoardList from '@/pages/board/list';
import RegisterBoard from '@/pages/board/register';
import EditBoard from '@/pages/board/edit';
import BoardDetail from '@/pages/board/detail';
import RedirectIfAuthenticated from '@/app/routes/RedirectIfAuthenticated.tsx';
import NotFound from '@/pages/notFound';
import ProtectedRoute from '@/app/routes/ProtectedRoute.tsx';
import UserEditPassword from '@/pages/user/edit/password';
import UserEdit from '@/pages/user/edit/info';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 페이지 진입시 이미 인증이 되어있다면 홈으로 바로 이동 */}
        <Route element={<RedirectIfAuthenticated to="/" />}>
          <Route path="/auth/login" element={<Login />} />
        </Route>

        <Route path="/" element={<Home />} />

        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/boards">
          <Route index element={<BoardList />} />
          <Route path="new" element={<RegisterBoard />} />
          <Route path=":boardId" element={<BoardDetail />} />
          <Route path=":boardId/edit" element={<EditBoard />} />
        </Route>

        <Route path="/users">
          <Route element={<ProtectedRoute to="/auth/login" />}>
            <Route path="edit" element={<UserEdit />} />
            <Route path="edit/password" element={<UserEditPassword />} />
          </Route>
        </Route>

        {/* 기본 경로 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
