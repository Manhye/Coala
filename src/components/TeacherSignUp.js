import React, { Component } from 'react';
import './signupstyles.css';
import { Link } from 'react-router-dom'; // 라우팅을 위한 라이브러리

class TeacherSignUp extends Component {
    render() {
        return(
            <div>
                <div className="back"> <Link to="/home" className='link-style'> &lt; 뒤로가기</Link></div>
                <div className="sign-font">
                    <h2>선생님 정보를 입력해 주세요</h2><br/>

                    <form>
                        <label>
                            <input type="text" placeholder="user@example.id" name="id" className="styled-input"/>
                        </label>
                        <br />
                        <label>
                            <input type="password" placeholder="비밀번호" name="password" className="styled-input"/>
                        </label>
                        <br />
                        <label>
                            <input type="password" placeholder="비밀번호 확인" name="passwordChk" className="styled-input"/>
                        </label>
                        <br />
                        <label>
                            <input type="text" placeholder="이름 (닉네임)" name="name" className="styled-input"/>
                        </label>
                        <br />
                        <label>
                            <input type="text" placeholder="휴대폰 번호" name="phoneNum" className="styled-input"/>
                        </label>
                        <br />
                        <button type="submit" className="register-box">등록</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TeacherSignUp