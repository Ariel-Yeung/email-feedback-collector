// SurveyNew shows SurveyForm and SurveyReview

import React, { Component} from 'react';
import SurveyForm from './SurveyForm';
// import { Link } from 'react-router-dom';

class SurveyNew extends Component {
    render() {
        return (
            <div>
                <SurveyForm/>
            </div>
        );
    }
}

export default SurveyNew;