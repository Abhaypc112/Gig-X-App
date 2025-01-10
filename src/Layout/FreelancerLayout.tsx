import { LayoutRouteProps } from "react-router-dom"
import FreelancerNav from "../components/freelancer/FreelancerNav"

const FreelancerLayout:React.FC<LayoutRouteProps> = ({children}) => {
  return (
    <div className="layout">
      <FreelancerNav />
        <div className="content">{children}</div>
    </div>
  )
}

export default FreelancerLayout
