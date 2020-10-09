import React from 'react';
import {connect} from 'react-redux';
import Login from "./login/Login";
import NavPanel from "./navigation/navigation";
import Space from "./space/Space";
import '../static/styles/app.sass';


const App = (props) =>{
    const {isLogin} = props
    return(
        <React.Fragment>
          {
          !isLogin ?
                <Login/>
          :
            <div className="wrap">
                <NavPanel/>
                <Space/>
            </div>
          }  
        </React.Fragment>
    )
}

export default connect((state) => ({
    isLogin: state.isLogin
}), null) (App);
