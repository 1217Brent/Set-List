import './App.css';
import Chat from './components/Chat';
import UserList from './components/UserList';
import UserProfileCard from './components/UserProfileCard';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/userlist' element={<UserList />} />
        <Route path='/userprofilecard' element={<UserProfileCard />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
