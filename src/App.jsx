import './App.css'
import Topnav from './components/Topnav'
import Sidebar from "./components/Sidebar"
import ChatSection from "./components/ChatSection"
import RunSettings from "./components/RunSettings"
import MostRight from "./components/MostRight"

function App() {
  

  return (
    <>
    <div className="flex bg-black text-white min-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Topnav />
        <div className="flex flex-1 overflow-hidden">
          <ChatSection />
          <RunSettings />
          <MostRight/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
