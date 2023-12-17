import React from 'react';

class ChatList_s extends React.Component {
    render() {
        return(
            <div>
                <body>
                    <div className="teacher-contaienr">
                        <div className="one-teacher">
                            <img src="/images/mdi_face-man.png" alt="" />
                            <div className="middle-text">
                                <div><span className="middle-text-1">김전문 선생님</span></div>
                                <div style="width: 150px">
                                    <span
                                        style="font-size: 13px; color: #39393986"
                                        className="middle-text-1">다음주 24일에 수업해요~</span>
                                </div>
                            </div>
                        </div>
                        <div className="end-text">
                            오후 7시 10분
                        </div>
                    </div>

                </body>
            </div>

        )
    }
}

export default ChatList_s
