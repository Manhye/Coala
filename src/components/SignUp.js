import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // 라우팅을 위한 라이브러리

class SignUp extends Component {
    render() {
        return(
            <div>
                <h1>Sign Up Page</h1>
                <form>
                    <label>
                        회원정보를 입력해주세요
                    </label>
                    <br />
                    <label>
                        <input type="text" placeholder="user@example.id" name="id" />
                    </label>
                    <br />
                    <label>
                        <input type="password" placeholder="비밀번호" name="password" />
                    </label>
                    <br />
                    <label>
                        <input type="password" placeholder="비밀번호 확인" name="passwordChk" />
                    </label>
                    <br />
                    <label>
                        <input type="text" placeholder="이름 (닉네임)" name="name" />
                    </label>
                    <br />
                    <label>
                        <input type="text" placeholder="직업" name="job" />
                    </label>
                    <br />
                    <label>
                        <inpute type="text" placeholder="휴대폰 번호" name="phoneNum" />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}

export default SignUp