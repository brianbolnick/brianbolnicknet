import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return this.props.children
    }
}

ReactDOM.render((
        <Router>
            <ScrollToTop>
                <div>
                    <App />
                </div>
            </ScrollToTop>
        </Router>
), document.getElementById('root'))
registerServiceWorker();
