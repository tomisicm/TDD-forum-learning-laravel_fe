import React, { Component } from "react"
import { Link } from "react-router-dom"

import profileService from "../../utils/services/profile-service"

import BaseAccordion from "../../components/common/BaseAccordion"

class Profile extends Component {
  state = {
    profile: {},
    activities: null
  }

  componentDidMount() {
    profileService
      .getUserProfile(this.props.match.params.profile)
      .then(({ data }) =>
        this.setState({ profile: data.user, activities: data.activities })
      )
  }

  render() {
    const { profile, activities } = this.state

    return (
      <div className="container-fluid my-3">
        <div className="card my-2">
          <div className="card-header">
            <div className="row ml-3">
              <div className="col">{profile.name}</div>
              <div className="col">{profile.email}</div>
            </div>
          </div>
          <div className="card-body ml-2">
            <div className="row">Activities:</div>
            {activities &&
              Object.keys(activities).map((entry, index) => (
                <div key={entry}>
                  <BaseAccordion
                    label={entry}
                    index={index}
                    content={activities[entry].map(item => (
                      <div className="ml-3" key={item.id}>
                        - {item.type}{" "}
                        {item.subject && (
                          <Link to={`/threads/${item.subject.id}`}>
                            {item.subject.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
