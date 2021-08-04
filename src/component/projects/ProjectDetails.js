import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (Props) => {
    const { project } = props;
    if (project) {
        return (
           <div class="container section project-details">
               <div className="card z-depth-o">
                  <div className="card-content">
                    <span className="card-title"></span>
                        <p>Lorem ipsum dolor sit amet consectrtur adiposicing elit</p>
                   </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by The Net Ninja</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        <div className="container center">
            <p>Loading project...</p>
        </div>
    }
}

const mapStateToProps = (State, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const projects = state.firestore.date.projects;
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}
    ])
)(ProjectDetails);
