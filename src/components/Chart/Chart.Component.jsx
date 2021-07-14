import React from 'react';
import './Chart.Style.css'
import ChartBar from "./ChartBar/ChartBar.Component";
const Chart = (props) => {
    const dataPointvalues = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPointvalues)
    return (
        <div className="chart">
            {props.dataPoints.map(datapoint=> <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMaximum} label={datapoint.label}/>)}
        </div>
    );
};

export default Chart;