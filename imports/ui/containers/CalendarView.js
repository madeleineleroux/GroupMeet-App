import React from 'react';
import { connect } from 'react-redux'
import Week from '../components/Week'

const mapStateToProps = state => ({
    WeekReducer: state.WeekReducer
})

export default connect(mapStateToProps)(Week)
