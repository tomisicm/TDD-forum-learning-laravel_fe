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
        <div>{JSON.stringify(profile)}</div>
        <div>{JSON.stringify(activities)}</div>
      </div>
    )
  }
}

export default Profile
