import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom'; // 라우팅을 위한 라이브러리
import './signupstyles.css'

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            id: '',
            password: '',
            isStudent:false,
            isTeacher:false
        }
    }

    handleInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.id === "teacher"){
            this.setState({isTeacher: true});
        }
        if(this.state.id === "student"){
            this.setState({isStudent: true});
        }
    };
    render() {
        if(this.state.isTeacher){
            return <Navigate to="/main_t" />;
        }if(this.state.isStudent){
            return <Navigate to="/main_s" />;
        }

        return (
            <div>
                <div className="back"> <Link to="/home" className="link-style"> &lt; 뒤로가기</Link></div>
                <div className="sign-font">
                    <h2>로그인</h2><br/>

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type="text" placeholder="user@example.id" name="id" className="styled-input" value={this.state.id} onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <label>
                            <input type="password" placeholder="비밀번호" name="password" className="styled-input" value={this.state.password} onChange={this.handleInputChange}/>
                        </label>
                        <br />
                        <button type="submit" className="login-box">로그인</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login