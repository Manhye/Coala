import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // 라우팅을 위한 라이브러리

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <label>
                        <input type="text" placeholder="user@example.id" name="username" />
                    </label>
                    <br />
                    <label>
                        <input type="password" placeholder="비밀번호" name="password" />
                    </label>
                    <br /><br />
                    <button type="submit" value="login">로그인</button>
                </form>
                <label htmlFor="remember-check">
                    로그인 유지<input type="checkbox" id="remember-check" />           <Link to="/Find">아이디/비밀번호 찾기</Link>
                </label>
                <p>
                    <b>COALA</b>에 처음이신가요? <Link to="/Signup">회원가입</Link>
                </p>
            </div>
        );
    }
}
export default Login