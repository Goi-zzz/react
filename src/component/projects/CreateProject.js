import React, { Component } from 'react'
import { connect} from 'react-redux'
import { createProject} from '../../store/actions/projectActins'

class CreateProject extends Component {
    state = {
        title : '',
        content : '',
    }
    handleChange = (e) => {
        this.setState = ({
            [e.tarhet.id]: e.target.value
        })
    }
    handleChange = (e) => {
        e.preventDefault();
       // console.log(this.state)
       this.props.createProject(this.state)
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <lable htmlFor="title">Title</lable>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <lable htmlFor="content">Project Content</lable>
                        <textarea cols="content" rows="10" className="materialize-textarea"></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink light-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}
export default connect()(CreateProject)



