import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Load from './components/Load';
import Home from './components/Home';
import Main_s from './components/Main_s';
import Main_t from './components/Main_t'
import MyPage from './components/MyPage';
import Login from './components/Login';
import TeacherSignUp from './components/TeacherSignUp';
import ChatList_s from './components/ChatList_s';
import StudentSignUp from './components/StudentSignUp';
import Chat from './components/Chat';
import './index.css';


function App() {
    return (
        <div className="App">
            <Router>
                <div className='Contents-wrapper'>
                    <Routes>
                        <Route path='/' element={<Load />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/main_s' element={<Main_s />} />
                        <Route path='/main_t' element={<Main_t />} />
                        <Route path='/mypage' element={<MyPage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/TeacherSignUp' element={<TeacherSignUp />} />
                        <Route path='/StudentSignUp' element={<StudentSignUp />} />
                        <Route path='/ChatList_s' element={<ChatList_s />} />
                        <Route path='/Chat' element={<Chat />} />

                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
