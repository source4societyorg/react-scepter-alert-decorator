# react-scepter-alert-decorator

Decorate a container so it can hook into the react-authapp-container messaging system

[![scepter-logo](http://res.cloudinary.com/source-4-society/image/upload/v1519221119/scepter_hzpcqt.png)](https://github.com/source4societyorg/SCEPTER-core)

[![redux-logo](https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png)](https://github.com/reactjs/redux)

[![react-boilerplate](https://github.com/react-boilerplate/brand/blob/master/assets/logo.png)](https://gihub.com/react-boilerplate)

[![airbnb-codestyle](https://camo.githubusercontent.com/1c5c800fbdabc79cfaca8c90dd47022a5b5c7486/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636f64652532307374796c652d616972626e622d627269676874677265656e2e7376673f7374796c653d666c61742d737175617265)](https://github.com/airbnb/javascript)

[![Build Status](https://travis-ci.org/source4societyorg/react-scepter-alert-decorator.svg?branch=master)](https://travis-ci.org/source4societyorg/react-scepter-alert-decorator)

[![codecov](https://codecov.io/gh/source4societyorg/react-scepter-alert-decorator/branch/master/graph/badge.svg)](https://codecov.io/gh/source4societyorg/react-scepter-alert-decorator)

# Installation

    npm install @source4society/react-scepter-alert-decorator

or

    yarn add @source4society/react-scepter-alert-decorator

# Usage

This decorator hooks a container into the [react-scepter-authapp-container](https://github.com/source4societyorg/react-scepter-authapp-container) message state, and adds a prop function called `renderMessage` that will display the message using the [react-alert-component](https://github.com/source4societyorg/react-alert-component). You will need to pass in a function to handle the message label translations in order to get the decorator. It looks something like this:

    const Component = (props) => <div>{props.renderMessage(props.message)}</div>; // A dummy component to wrap. This component just displays the message, but it could be anything.
    import alertDecorator from '@source4society/react-scepter-alert-decorator';
    const labels = (message) => message; // create your labels function. This example does not perform any translation of the messages
    const withAlert = alertDecorator(labels);
    export default compose(withAlert)(Component);
