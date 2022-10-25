import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UploadFiles from "./components/UploadFiles.js";
function App() {
  return (
    <div className="container">
      <h4> 使用 React 搭建文件上传 Demo</h4>
      <div className="content">
        <UploadFiles />
      </div>
    </div>
  );
}

export default App;
