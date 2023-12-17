import React from 'react';

class ChatList_s extends React.Component {
    render() {
        return(
            <div>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Document</title>
                    <link rel="stylesheet" href="./index.css" />
                    <style>
                        .one-teacher {
                        display: flex;
                        width: 420px;
                        margin: 0 auto;
                        justify-content: space-around;
                    }
                        .middle-text {
                        position: relative;
                        left: -50px;
                    }
                        .end-text img {
                        position: absolute;
                        bottom: 80px;
                    }
                        main {
                        margin-top: 15px;
                    }
                        .chatting-container {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                        .chatting {
                        /* display: inline; */

                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 22px;

                        border-radius: 10px;
                        text-align: left;
                        padding: 7px;
                    }
                        .student-chatting {
                        background-color: #e6e5eb;
                        color: #000;
                    }
                        .teacher-chatting {
                        background-color: #2657c1;
                        position: relative;
                        left: 70px;
                        color: #ffffff;
                    }
                        #robot {
                        margin: 0 auto;
                        display: inline-block;
                        width: 250px;
                        height: 50px;
                        background-color: black;
                        color: #ffffff;
                        text-align: center;

                        padding-top: 10px;
                        padding-bottom: 10px;
                        line-height: 25px;
                        border-radius: 10px;
                    }
                        footer {
                        position: relative;
                        top: 200px;
                        left: 20px;
                        margin: 0 auto;
                    }
                    </style>
                </head>
                <body>
                <header>
                    <div className="one-teacher" onClick="location.href='4.html'">
                        <img
                            style="
            width: 55px;
            height: 55px;
            position: relative;
            top: 10px;
            left: -10px;
          "
                            src="mdi_face-man.png"
                            alt=""
                        />
                        <div className="middle-text">
                            <div>
                                <span className="middle-text-1">김동국 학생</span>
                            </div>
                            <div>
            <span
                style="
                margin-top: 1px;
                margin-left: 0px;
                color: rgba(57, 57, 57, 0.6);
                font-size: 13px;
              "
                className="middle-text-2"
            >매주 수요일 오후7시</span
            >
                            </div>
                        </div>
                        <!-- <div class="end-text"></div> -->
                        <img src="../camera-icon.png" alt="" />
                    </div>
                </header>
                <main>
                    <div class="chatting-container">
                        <div class="chatting student-chatting">
                            선생님! 다음주 24일에 코딩테스트를 보게 될 것 같아요!
                        </div>
                        <div class="chatting teacher-chatting">
                            그래? 그러면 오늘 과외는 회사 유형을 좀 찾아보는걸로 하자
                        </div>
                        <div class="chatting teacher-chatting" style="width: 340px">
                            슬슬 수업시간 됐으니 미리 카메라 좀 켜둘게~
                        </div>
                        <div class="chatting student-chatting" style="width: 20px">넵!</div>
                        <div id="robot">COALA CAM <br />- 수업종료 -</div>
                        <div class="chatting teacher-chatting" style="width: 340px">
                            과제 곧 push해줄게요 다 해오세요~!
                        </div>
                    </div>
                </main>
                <footer>
                    <div>
                        <div onclick="location.href='3.html'">
                            <img src="basil_search-outline.png" alt="" /><span>과외문의</span>
                        </div>
                        <div onclick="location.href='4.html'">
                            <img src="mail.png" alt="" /><span>채팅</span>
                        </div>
                        <div onclick="location.href='4.html'">
                            <img src="favorite_border.png" alt="" /><span>내 과외</span>
                        </div>
                        <div><img src="account_circle.png" alt="" /><span>내 정보</span></div>
                    </div>
                </footer>
                </body>
            </div>

        )
    }
}

export default ChatList_s
