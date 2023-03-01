import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './ProgressBar.style.scss';

/** @namespace ScandiwebTest/Component/ProgressBar/Component */
export class ProgressBarComponent extends Component {
    render() {
        const { steps, progress } = this.props;

        const lineStyle = {
            animation: 'barProgress 1s forwards',
        };

        const stepStyle = {
            animation: 'stepProgress .3s forwards',
            animationDelay: '.9s',
        };

        const headingStyle = {
            animation: 'headingProgress .3s forwards',
            animationDelay: '.9s',
        };

        const mappedData = steps.map((step, index) => {
            const actualStepId = index + 1;

            return (
                index !== steps.length - 1
                && (
                <div className="container" key={ index }>
                    <div className="step-container">
                        <div className="step-counter" style={ actualStepId <= progress ? stepStyle : null }>
                            { progress > actualStepId ? <p>&#10004;</p> : <p>{ actualStepId }</p> }
                        </div>
                        <div className="step-heading" style={ actualStepId <= progress ? headingStyle : null }>
                            <p>{ step.url.charAt(1).toUpperCase() + step.url.slice(2)}</p>
                        </div>
                    </div>
                </div>
                )
            );
        });

        const elements = mappedData.reduce((acc, step) => acc.concat(
            step,
            <div key={ acc } className="line-between">
                <div className="line-between-filled" style={ progress - 1 > step.key ? lineStyle : null } />
            </div>
        ), [],);

        return (
            <section className="progress-bar-container">
                <div className="progress-line">
                    <div className="progress-line-filled" style={ lineStyle } />
                </div>
                { elements.slice(0, -2) }
                <div classname="progress-line">
                    <div
                      className="progress-line-filled"
                      style={ progress >= elements.slice(0, -steps.length).length ? lineStyle : null }
                    />
                </div>
            </section>
        );
    }
}

ProgressBarComponent.propTypes = {
    steps: PropTypes.object,
    progress: PropTypes.number
};
export default ProgressBarComponent;
