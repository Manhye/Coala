import React from 'react';
import { Link } from 'react-router-dom'
import './homestyles.css';

class Home extends React.Component {

    componentDidMount(){
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }

    render() {

        return(
            <div>
                <div className="main-font">
                    <p style={{fontSize: '10px'}}>안녕하세요! COALA입니다.</p>
                    <p style={{fontSize: '20px'}}>어떤 유형의 사용자인가요?</p>
                </div>
                <div className="box-container">
                    <Link to="/TeacherSignUp" className="link-style">
                    <div className="border-box">
                        <div className="text-container">
                            <img src = "/images/login.png"
                                 alt = "login image"
                                 className = "img-style"
                            />
                            <div className="text-in-box">
                                <p style={{fontSize: '30px'}}>선생님</p>
                            </div>
                        </div>
                    </div></Link>
                    <Link to="/StudentSignUp" className="link-style">
                    <div className="border-box">
                        <div className="text-container">
                            <img src = "/images/login.png"
                                alt = "login image"
                                className = "img-style"
                            />
                            <div className="text-in-box">
                                <p style={{fontSize: '30px'}}>학생</p>
                            </div>
                        </div>
                    </div></Link>
                </div>
                <div className="main-bottom">
                    <p>이미 계정이 있으신가요?</p>
                    <Link to = '/login' className="linkOpt"><button type="submit" className="login-box">로그인</button></ Link>
                </div>
            </div>

        )
    }
}

export default Home