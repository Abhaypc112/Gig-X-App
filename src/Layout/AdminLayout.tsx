import { LayoutRouteProps } from "react-router-dom";
import AdminNav from "../components/admin/AdminNav";
import AdminSideBar from "../components/admin/AdminSideBar";

const AdminLayout:React.FC<LayoutRouteProps> = ({children}) => {
  return (
    <div className="layout">
      <AdminNav />
      <div className="content-wrapper ">
        <AdminSideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
