import React from 'react';
import './_index.css';
import './homestyles.css';
import { Link } from 'react-router-dom'; // 라우팅을 위한 라이브러리


class Main_s extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <div className="topContainer">
                        <div className="textContainer">
                            <div className="textMain1">AI 기반 매칭으로 나에게 맞는 과외를 찾아줘요</div>
                            <div className="textMain2">나에게 맞는 선생님 찾기!</div>
                        </div>
                        <img src="/images/galaSearch0.png" alt="" className="headerImg"/>
                    </div>
                    <div id="search">
                        <img src="/images/basil_search-outline.png" alt="" />
                        <input type="text" placeholder="검색어를 입력해주세요" name="" id="" />
                    </div>
                </header>



                <main>
                    <div id="teacher-container">
                        <Link to="/ChatList_s" className="link-style">
                        <div className="one-teacher">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">pythonMaster</span></div>
                                <div><span className="middle-text-2">python/Java/C++</span></div>
                            </div>
                            <div className="end-text">
                                <span>#1:1과외&nbsp;&nbsp;</span>
                                <span>#일정조정 가능</span>
                                <span>#초심자 환영&nbsp;&nbsp;</span>
                                <span>#취업컨설팅</span>
                            </div>
                        </div>
                        </Link>
                        <div className="one-teacher" onClick="location.href='4.html'">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">pythonMaster</span></div>
                                <div><span className="middle-text-2">python/Java/C++</span></div>
                            </div>
                            <div className="end-text">
                                <span>#1:1과외&nbsp;&nbsp;</span>
                                <span>#일정조정 가능</span>
                                <span>#초심자 환영&nbsp;&nbsp;</span>
                                <span>#취업컨설팅</span>
                            </div>
                        </div>
                        <div className="one-teacher" onClick="location.href='4.html'">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">pythonMaster</span></div>
                                <div><span className="middle-text-2">python/Java/C++</span></div>
                            </div>
                            <div className="end-text">
                                <span>#1:1과외&nbsp;&nbsp;</span>
                                <span>#일정조정 가능</span>
                                <span>#초심자 환영&nbsp;&nbsp;</span>
                                <span>#취업컨설팅</span>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        <Link to="/main_s" className="link-style">
                        <div>
                            <img src="./images/basil_search-outline.png" alt="" /><span>과외찾기</span>
                        </div>
                        </Link>
                        <Link to="/ChatList_s" className="link-style">
                        <div>
                            <img src="./images/mail.png" alt="" /><span>채팅</span>
                        </div>
                        </Link>
                        <Link to="/MyClass_s" className="link-style">
                        <div>
                            <img src="./images/favorite_border.png" alt="" /><span>내 과외</span>
                        </div>
                        </Link>
                        <Link to="/MyPage_s" className="link-style">
                        <div>
                            <img src="./images/account_circle.png" alt="" /><span>내 정보</span>
                        </div>
                        </Link>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Main_s