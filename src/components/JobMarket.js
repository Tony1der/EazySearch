import React, { Component } from 'react'
import '../css/jobMarket.css'

function searchingFor(term) {
    return function(x) {
      return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }
  
  class JobMarket extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
        term: ''
      };
  
      this.searchHandler = this.searchHandler.bind(this);
    }
  
    searchHandler(event) {
      this.setState({ term: event.target.value })
    }
  
    componentDidMount() {
      fetch("https://api.hh.ru/vacancies/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

render() {
    const {error, isLoaded, items, term} = this.state;
    if (error) {
      return <p> Error {error.message} </p>
    } else if (!isLoaded) {
      return <p> Loading... </p>
    } else {
    return (
        <><div className="wrapper">
            <div className="header">
                <h1><span>eazy</span>Search</h1>
            </div>
            <div>
                <h3>Looking for a job</h3>
            </div>
            <div className="form">
                <div className="search">
                    <div>
                        <input className="input"
                         type="text" 
                         placeholder="Search..."
                         onChange={this.searchHandler}
                         value={term}
                         />
                    </div>    
                </div>
            </div>
        </div>
        <form>
        <div className="container">
        <ul>
          {items.filter(searchingFor(term)).map(job => (
            <><div className="list">
                <li key={job.id}>
                <span>Vacancy</span>: {job.name}
            </li>
              <p>
              <span>City</span>: {job.area.name}
              </p>
              <p>
                <span>Requirements</span>: {job.snippet.requirement}
              </p>
              <p>
                <span>Responsibility</span>: {job.snippet.responsibility}
              </p>
              <p>
              <span>Link</span>: <a href = {job.alternate_url} target="_blank" rel="noreferrer noopener">{job.alternate_url}</a>
              </p>
              </div>
            </>
          ))}
        </ul>
        </div>
        </form>
        </>
        
    )
}
  }
}

  export default JobMarket;

