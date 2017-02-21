import React, { Component } from 'react';
import PCRow from './PCRow';

class PCTable extends Component {
  constructor(props){
    super(props);
    this.state = {sites: []};
    this.update = this.update.bind(this);
  }

  render() {    
    let data = this.state.sites.filter(a=> a.name.substring(0,1) !== "_").map(a => <PCRow name={a.name} key={a.id} count={a.locations.map(b => b.resources.filter(c => c.state=== "AVAILABLE").length).reduce((a,b) => a + b)} />);
    return (
      <div className="PCTable">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Location</th>
              <th>Available PCs</th>
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    );
  }

  componentDidMount() {  
    this.update();
    setInterval(this.update, 1000);
  }

  update()
  {
    let _this = this;
    let address = document.getElementById('dataUrl').innerText + "?page=getResourceStatesAPI&timestamp=" + new Date();    
    fetch(address, { credentials: "same-origin"}).then(response => response.json().then(data => _this.setState({sites: data}) )); 

  }
}

export default PCTable;
