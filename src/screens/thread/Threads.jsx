import React, { Component } from "react"
import { Link } from "react-router-dom"

import threadService from "../../utils/services/thread-service"

class Threads extends Component {
  state = {
    threads: []
  }

  componentDidMount() {
    threadService
      .getThreads(window.location.pathname.replace("/channel", ""))
      .then(({ data }) => this.setState({ threads: data }))
  }

  render() {
    const { threads } = this.state

    return (
      <div className="container-fluid my-3">
        {threads &&
          threads.map(item => (
            <div className="card my-2" key={item.id}>
              <div className="card-header">
                <div className="row justify-content">
                  <div className="col-md-8">
                    <Link to={`/threads/${item.id}`}>{item.title}</Link>
                  </div>
                  <div className="col">
                    <Link to={`/profiles/${item.creator.name}`}>
                      {item.creator.name}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ padding: "0.5rem" }}>
                <div className="card-text">{item.body}</div>
                <div className="row">
                  <div className="col">Replies: {item.replies_count}</div>
                  <div className="col">Updated At: {item.updated_at}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    )
  }
}

export default Threads
