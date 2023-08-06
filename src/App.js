import "./App.css";
import { Header } from "./Components/Header";
import { Siderbar } from "./Components/Sidebar";

function App() {
  const arr = [
    { device: "mouse", count: 10 },
    { device: "keyboard" },
    { device: "printer", count: 20 },
    { device: "monitor" },
    { device: "headphone" },
  ];

  ///////

  const outputArr = arr.map((obj) =>
    obj.count ? { ...obj, count: obj.count + 1 } : { ...obj, count: 1 }
  );
  console.log(outputArr);

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <div className="sidebar">
          <Siderbar />
        </div>
        <div className="content-text">
          <p>content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
