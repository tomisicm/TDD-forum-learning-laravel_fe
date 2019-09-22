import React, { Component } from "react"

import profileService from "../../utils/services/profile-service"

class Profile extends Component {
  state = {
    profile: {},
    activities: {}
  }

  componentDidMount() {
    profileService
      .getUserProfile(
        window.location.pathname.replace("/channel", "") +
          window.location.search
      )
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
          <div>
            {activities &&
              Object.keys(activities).map(entry => (
                <div>
                  {activities[entry].map(item => (
                    <div>{item.type}</div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
