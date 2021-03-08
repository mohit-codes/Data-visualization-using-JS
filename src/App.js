import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  series: [
    {
      name: "Profit",
      data: [100, 200, 30, 100, 50, 30],
    },
  ],
};

function App() {
  return (
    <div className="App">
      {" "}
      <HighchartsReact highcharts={Highcharts} options={options} />{" "}
    </div>
  );
}

export default App;
