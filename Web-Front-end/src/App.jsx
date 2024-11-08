import "./App.css";
import Header from "./components/Header";
import Workspace from "./pages/Workspace";
import { Routes, Route } from "react-router-dom";
import Calendar from "./pages/Calendar";
import Dashboard from "./pages/Dashboard/Dashboard";
import AppBar from "./pages/Dashboard/Components/Appbar";
import Meeting from "./pages/Meeting/Meeting";
import FileManager from "./pages/FileManager/FileManager";
import LoginForm from "./pages/Login/LoginForm";
import SignupForm from "./pages/Login/SignupForm";

function App() {
  const projectName = "Project Name";

  const deadline = [
    {
      isHaveDeadline: true,
      time: "29-10-2024",
      name: "Lap trinh truc quan",
    },
    {
      isHaveDeadline: true,
      time: "28-10-2024",
      name: "Dennis Robin(1) Dennis Robin(2) Dennis Robin(3)",
    },
    {
      isHaveDeadline: true,
      time: "01-12-2024",
      name: "Nhập môn mạng",
    },
    {
      isHaveDeadline: false,
      name: "Trường đại học công nghệ thông tin - Đại học quốc gia thành phố Hồ Chí Minh",
    },
    {
      isHaveDeadline: false,
      name: "Khoa Công nghệ phần mềm - Trường đại học công nghệ thông tin",
    },
    {
      isHaveDeadline: true,
      time: "01-12-2024",
      name: "Khoa Hệ thống thông tin - Trường đại học công nghệ thông tin",
    },
    {
      isHaveDeadline: true,
      time: "20-11-2024",
      name: "Khoa Mạng máy tính và truyền thông - Trường đại học công nghệ thông tin",
    },
  ];
  const users = [
    {
      id: "001",
      name: "Alex",
      avatar: "../images/alex.jpg",
      color: "",
    },

    {
      id: "002",
      name: "Anna",
      avatar: "../images/anna.jpg",
      color: "",
    },
    {
      id: "003",
      name: "Thomas",
      avatar: "../images/thomas.jpg",
      color: "",
    },
    {
      id: "004",
      name: "Katty",
      avatar: "../images/katty.jpg",
      color: "",
    },
  ];

  const boards = [
    {
      id: 1,
      title: "Board 1",
      columns: [
        {
          id: 0,
          title: "TO DO board 1",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 1,
          title: "DOING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 2,
          title: "DONE",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 3,
          title: "PLANNING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 4,
          title: "OTHERS",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Board 2",
      columns: [
        {
          id: 0,
          title: "TO DO board 2",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 1,
          title: "DOING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 2,
          title: "DONE",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 3,
          title: "PLANNING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 4,
          title: "OTHERS",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Board 3",
      columns: [
        {
          id: 0,
          title: "TO DO board 3",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 1,
          title: "DOING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 2,
          title: "DONE",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 3,
          title: "PLANNING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 4,
          title: "OTHERS",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Board 4",
      columns: [
        {
          id: 0,
          title: "board 4 TO DO",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 1,
          title: "DOING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 2,
          title: "DONE",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 3,
          title: "PLANNING",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
        {
          id: 4,
          title: "OTHERS",
          tasks: [
            {
              id: 0,
              title: "Learn JS",
            },
            {
              id: 1,
              title: "Learn C#",
            },
            {
              id: 2,
              title: "Learn PHP",
            },
          ],
        },
      ],
    },
  ];

  const files = [
    {
      id: 0,
      name: "File word",
    },
    {
      id: 1,
      name: "File pdf",
    },
    {
      id: 2,
      name: "File ppt",
    },
    {
      id: 3,
      name: "File png",
    },
    {
      id: 4,
      name: "File mp3",
    },
    {
      id: 5,
      name: "File mp4",
    },
  ];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Workspace list={deadline} />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/projectname"
          element={
            <>
              <AppBar projectName={projectName} users={users} />
              <Dashboard
                projectName={projectName}
                boards={boards}
                files={files}
              ></Dashboard>
              <Routes>
                <Route path="/meeting" element={<Meeting />}></Route>
                <Route
                  path="/filemanager"
                  element={<FileManager files={files} />}
                ></Route>
              </Routes>
            </>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </>
  );
}

export default App;
