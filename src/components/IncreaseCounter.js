import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {increaseCounter} from "../redux/actions/counterActions"
import {connect} from "react-redux"

class IncreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(increaseCounter())
                }}><strong>+1</strong></button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {actions:bindActionCreators(increaseCounter, dispatch)}
}
export default connect(mapDispatchToProps)(IncreaseCounter);