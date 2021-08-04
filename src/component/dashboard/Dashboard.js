import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import {connect} from 'react-dom'
import { firestoreConnect } from 'reacte-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
    render() {
        //console.log(this.props);
        const { projects } = this.props;
        return(
            <div className="dashboard container">
                <div class="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const maStateToProps= (state) => {
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(maStateToProps),    
    firestoreConnect([
        { collection: 'projects' }
    ])
    )(Dashboard);
