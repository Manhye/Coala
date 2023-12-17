import React from 'react';
import { Link } from 'react-router-dom'
import './_index.css'

class Load extends React.Component {

    componentDidMount(){
        document.body.style.overflow = 'hidden';
        document.body.style.touchAction = 'none';
    }
    render() {

        return(
            <Link to = "/Home">
            <div className="load-page">
                <span className="text1">Coding Universe</span>
                <img src="/images/clarity_computer-line.png" alt="" className="load-img"/>
                <span className="text2">COALA</span>
            </div>
            </Link>

        )
    }
}

export default Load