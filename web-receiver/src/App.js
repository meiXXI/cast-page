import React from 'react';

class App extends React.Component {

    /**
     * Custom constructor.
     * @param {*} props 
     */
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    /**
     * ReactJS: Method is called before the render method is executed.
     */
    componentDidMount() {

    }

    /**
     * Return HTML snippet
     */
    render() {

        // render output
        return (
            <div>
                <cast-media-player></cast-media-player>
                <script>
                    cast.framework.CastReceiverContext.getInstance().start();
                </script>
            </div>
        );
    }
}

export default App;
