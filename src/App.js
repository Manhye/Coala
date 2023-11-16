import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Community from './components/Community';
import MyPage from './components/MyPage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Find from './components/Find';

function App() {
    return (
        <div className="App">
            <Router>
                <div className='Menu-wrapper'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/community'>Community</Link></li>
                        <li><Link to='/mypage'>MyPage</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/SignUp'>Sign Up</Link></li>
                        <li><Link to='/Find'>Find</Link></li>
                    </ul>
                </div>
                <div className='Contents-wrapper'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/community' element={<Community />} />
                        <Route path='/mypage' element={<MyPage />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/SignUp' element={<SignUp />} />
                        <Route path='/Find' element={<Find />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
