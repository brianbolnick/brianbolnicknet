import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './ApiTool.css';
import update from 'immutability-helper';
import { API_ROOT } from './api-config';

class Idea extends Component {
    handleClick = () => {
        this.props.onClick(this.props.idea.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.idea.id)
    }

    render() {
        return (
            <div className="tile">
                <h4 onClick={this.handleClick}>
                    {this.props.idea.title}
                </h4>
                <p onClick={this.handleClick}>
                    {this.props.idea.body}
                </p>
            </div>
        )
    }

}


class IdeaForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.idea.title,
            body: this.props.idea.body
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({ [e.target.name]: e.target.value })
    }

    handleBlur = () => {
        const idea = {
            title: this.state.title,
            body: this.state.body
        }

        axios.put(
            `${API_ROOT}/api/v1/ideas/${this.props.idea.id}`,
            {
                idea: idea
            })
            .then(response => {
                console.log(response)
                this.props.updateIdea(response.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="tile">
                <span className="deleteButton">
                    x
                </span>
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text"
                        name="title" placeholder='Enter a Title'
                        value={this.state.title} onChange={this.handleInput}
                        ref={this.props.titleRef} />
                    <textarea className='input' name="body"
                        placeholder='Describe your idea'
                        value={this.state.body} onChange={this.handleInput}>
                    </textarea>
                </form>
            </div>
        );
    }
}

class IdeasContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: [],
            editingIdeaId: null,
            notification: ''
        }
    }

    componentDidMount() {
        axios.get(`${API_ROOT}/api/v1/ideas.json`)
            .then(response => {
                console.log(response)
                this.setState({ ideas: response.data })
            })
            .catch(error => console.log(error))
    }

    addNewIdea = () => {
        axios.post(
            `${API_ROOT}/api/v1/ideas`,
            {
                idea:
                {
                    title: '',
                    body: ''
                }
            }
        )
            .then(response => {
                const ideas = update(this.state.ideas, {
                    $splice: [[0, 0, response.data]]
                })
                this.setState({
                    ideas: ideas,
                    editingIdeaId: response.data.id
                })
            })
            .catch(error => console.log(error))
    }


    updateIdea = (idea) => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
        const ideas = update(this.state.ideas, {
            [ideaIndex]: { $set: idea }
        })
        this.setState({ ideas: ideas, notification: 'All changes saved' })
    }

    resetNotification = () => {
        this.setState({ notification: '' })
    }

    enableEditing = (id) => {
        this.setState({ editingIdeaId: id },
            () => { this.title.focus() })
    }


    deleteIdea = (id) => {
        axios.delete(`${API_ROOT}/api/v1/ideas/${id}`)
            .then(response => {
                const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
                const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]] })
                this.setState({ ideas: ideas })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                <button className="newIdeaButton" onClick={this.addNewIdea}>
                    New Idea
                </button>
                <span className="notification">
                    {this.state.notification}
                </span>
                <br />
                {this.state.ideas.map((idea) => {
                    if (this.state.editingIdeaId === idea.id) {
                        return (<IdeaForm updateIdea={this.updateIdea} idea={idea} key={idea.id}
                            resetNotification={this.resetNotification} titleRef={input => this.title = input} />)
                    } else {
                        return (<Idea onDelete={this.deleteIdea} idea={idea} key={idea.id} onClick={this.enableEditing} />)
                    }
                })}
            </div>
        )
    }
}

class ApiPage extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>Idea Board</h1>
                </div>
                <IdeasContainer />
            </div>
        )
    }
}


export default ApiPage;