import { useEffect, useState } from "react";
import SubView from "../components/SubView";
import MainPage from "../components/MainPage";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

function OneBox() {
  const Navigate = useNavigate();
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const token = queryParams.get("token");
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYW5pa2V0a2VzYXJpMDA3QGdtYWlsLmNvbSIsImlkIjoxODgsImZpcnN0TmFtZSI6IkFuaWtldCIsImxhc3ROYW1lIjoia2VzYXJ3YW5pIn0sImlhdCI6MTcyMTY5NDE5OCwiZXhwIjoxNzUzMjMwMTk4fQ.KhauZZ7gEkMkJmbqDvLvVphdbE44oLl_a7izDWnxRm0";

  useEffect(() => {
    if (!token) {
      Navigate("/login");
    }
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
    }
  }, [Navigate, token]);

  const [selectedComponent, setSelectedComponent] = useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMenuItemClick = (path: any) => {
    setSelectedComponent(path);
  };

  if (selectedComponent === null) {
    return (
      <div className="h-screen w-screen dark:bg-black bg-white pl-14">
        <SideBar onMenuItemClick={handleMenuItemClick} />
        <TopBar />
        <SubView />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBar onMenuItemClick={handleMenuItemClick} />
      <TopBar />
      <div>
        {selectedComponent === "/" && <SubView />}
        {selectedComponent === "/search" && <SubView />}
        {selectedComponent === "/mail" && <SubView />}
        {selectedComponent === "/send" && <SubView />}
        {selectedComponent === "/stack" && <SubView />}
        {selectedComponent === "/inbox" && <MainPage />}
        {selectedComponent === "/stacks" && <SubView />}
      </div>
    </div>
  );
}

export default OneBox;
