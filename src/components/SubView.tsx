import axios from "axios";
import img from "../assets/i.svg";
import { useEffect } from "react";

function SubView() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYW5pa2V0a2VzYXJpMDA3QGdtYWlsLmNvbSIsImlkIjoxODgsImZpcnN0TmFtZSI6IkFuaWtldCIsImxhc3ROYW1lIjoia2VzYXJ3YW5pIn0sImlhdCI6MTcyMTY5NDE5OCwiZXhwIjoxNzUzMjMwMTk4fQ.KhauZZ7gEkMkJmbqDvLvVphdbE44oLl_a7izDWnxRm0";

  useEffect(() => {
    async function call() {
      await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    call();
  }, []);


  return (
    <div className="dark:text-white text-[#5B5F66] bg-[#ECEFF3] dark:bg-black flex justify-center items-center h-screen flex-col">
      <div>
        <img src={img}></img>
      </div>
      <div className="text-2xl my-8">
        It’s the beginning of a legendary sales pipeline
      </div>
      <div className="dark:text-[#9E9E9E] text-[#5B5F66]">
        When you have inbound E-mails you’ll see them here
      </div>
    </div>
  );
}

export default SubView;
