import React from 'react';
import { Panel } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 'foo' };
  }

  render() {
    const style = {
      padding: '40px 20px',
    };

    return (
      <div style={style}>
        <Panel header="Hello World!">
          We are using node {process.versions.node},
          Chrome {process.versions.chrome},
          and Electron {process.versions.electron}.
        </Panel>
      </div>
    );
  }
}
