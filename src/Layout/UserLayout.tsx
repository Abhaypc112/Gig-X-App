import { LayoutRouteProps } from "react-router-dom"
import UserNav from "../components/user/UserNav"

const UserLayout:React.FC<LayoutRouteProps> = ({children}) => {
  return (
    <div className="layout">
      <UserNav/>
        <div className="content">{children}</div>
    </div>
  )
}

export default UserLayout
