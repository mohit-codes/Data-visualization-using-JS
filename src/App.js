import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Papa from "papaparse";
import { useState } from "react";

function App() {
  const [dat, setDat] = useState([]);
  const options = {
    series: [
      {
        name: "Profit",
        data: dat,
      },
    ],
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function (results) {
        console.log(results.data[0]);
        setDat(results.data);
      },
    });
  };
  return (
    <div className="App">
      <div>
        {" "}
        <input type="file" onChange={handleFileUpload}></input>{" "}
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />{" "}
    </div>
  );
}

export default App;
