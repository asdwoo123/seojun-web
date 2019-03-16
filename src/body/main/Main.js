import React, {Component} from 'react';
import VideoCover from 'react-background-video-player';


class Main extends Component {

    render() {
        return (
            <div>
                <div style={{ display: "flex", width: '100%', height: 800, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                    <VideoCover
                       src="/test.mp4"
                       poster="SEOJUN ENG"
                       containerWidth="100%"
                       containerHeight={800}
                    />
                    <div style={{ zIndex: 10, position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h1 style={{ color: 'white', fontSize: 50 }}>Think in Global</h1>
                        <h1 style={{ color: 'white', opacity: 0.5 }}>SEOJUN ENG!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;