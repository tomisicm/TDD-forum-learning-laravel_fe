import { useEffect } from "react"

import authService from "./../../utils/services/auth-service"

const AppLogout = () => {
  useEffect(() => {
    authService.logout()
  }, [])

  return null
}

export default AppLogout
