import React from 'react';
import './_index.css';

class Main_t extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <div className="topContainer">
                        <div className="textContainer">
                            <div className="textMain2">안녕하세요! 김전문 선생님</div>
                            <div className="textMain1">현재 3건의 문의가 왔습니다.<br />다음 과외는 24일 19시 김동국학생 입니다.</div>
                        </div>
                    </div>
                </header>



                <main>
                    <div id="teacher-container">
                        <div className="one-teacher" onClick="location.href='4.html'">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">김동국 학생</span></div>
                                <div><span className="middle-text-2">python</span></div>
                            </div>
                            <div className="end-text">
                                <span>안녕하세요! 과외 문의 드립니다 배우고 싶은 언어는 Python이며...</span>
                            </div>
                        </div>
                        <div className="one-teacher" onClick="location.href='4.html'">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">이윤주 학생</span></div>
                                <div><span className="middle-text-2">JavaScript</span></div>
                            </div>
                            <div className="end-text">
                                <span>안녕하세요! 과외 문의 드립니다 배우고 싶은 언어는 Javascript이며...</span>
                            </div>
                        </div>
                        <div className="one-teacher" onClick="location.href='4.html'">
                            <img
                                src="/images/mdi_face-man.png"
                                alt=""
                                className="teachercontainerimg"
                            />
                            <div className="middle-text">
                                <div><span className="middle-text-1">정고은 학생</span></div>
                                <div><span className="middle-text-2">Java</span></div>
                            </div>
                            <div className="end-text">
                                <span>안녕하세요! 과외 문의 드립니다 배우고 싶은 언어는 Java이며...</span>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        <div onClick={() => { /* Handle click */ }}>
                            <img src="./images/basil_search-outline.png" alt="" /><span>과외문의</span>
                        </div>
                        <div onClick={() => { /* Handle click */ }}>
                            <img src="./images/mail.png" alt="" /><span>채팅</span>
                        </div>
                        <div onClick={() => { /* Handle click */ }}>
                            <img src="./images/favorite_border.png" alt="" /><span>내 과외</span>
                        </div>
                        <div onClick={() => { /* Handle click */ }}>
                            <img src="./images/account_circle.png" alt="" /><span>내 정보</span>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }
}

export default Main_t