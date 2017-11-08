import React, {Component}from 'react';
import Button from 'bee-button';
import Loading from 'bee-loading';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {
    /**
     * @title loading时的文字
     */
    loadingText: PropTypes.string,
    /**
     * @title
     */
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    show: PropTypes.bool,
    showBackDrop: PropTypes.bool,

}

const defaultProps = {
    show: false,
    clsPrefix: 'u-loading-state',
    loadingText: '',
    showBackDrop: true
}

class Loadingstate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickFlag: false,
            loadingText: this.props.children
        }
    }

    render() {
        let { className, clsPrefix, children, show, loadingText, showBackDrop, ...others} = this.props;

        let labelClass = classnames({[`${clsPrefix}-label`]: show});
        let loadingStateClass = classnames(clsPrefix, className);

        return (
            <Button
                className={loadingStateClass}
                disabled={show}
                {...others}>
                <Loading show={show} container={ this } showBackDrop={ showBackDrop }>
                    { loadingText }
                </Loading>
                <div className={labelClass}>{children}</div>
            </Button>
        )

    }
}
Loadingstate.propTypes = propTypes;
Loadingstate.defaultProps = defaultProps;

export default Loadingstate;