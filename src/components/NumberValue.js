// noinspection JSAnnotator
import React from 'react'
import {connect} from 'react-redux'

const NumberValue  = ({CurrentValue}) => {
    return (
        <div>
            CurrentValue: {CurrentValue}
        </div>
    )
}

const mapStateToProps = state =>({
    CurrentValue: state.CurrentValue
})

const mapDispatchToProps = () => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberValue)