import React from 'react';
import Layout from './Layout';
import { fetchGrades } from '../../actions/grades_index';
import { connect } from 'react-redux'
import { API_ROOT } from '../../api-config';

class Grades extends React.Component {

    componentDidMount() {
        this.props.fetchGrades();
    }

    render() {
        const links = this.props.grades.map((data) => {
            return (
                <li key={data.id}> <a href={`${API_ROOT}/api/v1/grades/${data.id}/download`}>{data.date}</a> </li>
            )
        })
        return (!this.props.fething ?
            <Layout>
                <div style={{ marginTop: '6.5%' }}>
                    <h1>GRADE EXPORT REPORTS</h1>
                    <ul>
                        {links}
                    </ul>
                </div>
            </Layout>
            :
            <Layout>
                <div style={{ marginTop: '6.5%' }}>
                    <h1>GRADE EXPORT REPORTS</h1>
                    <div style={{textAlign: 'center' }} > loading....</div> 
                </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return {
        grades: state.grades.grades,
        fetching: state.grades.fetching,
        error: state.grades.error
    }
}

export default connect(mapStateToProps, { fetchGrades })(Grades)

