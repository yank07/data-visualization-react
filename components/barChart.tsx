import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryLine, VictoryLabel  } from 'victory';


const tickStyle = {
    axis: {
      stroke: 'black',
      strokeOpacity: 1
    },
    ticks: {
      size: 2,
      stroke: 'black',
      strokeOpacity: 0.1
    },
    grid: {
      stroke: 'rgba(0, 0, 0, 0.1)',
      strokeWidth: 0,
      strokeDasharray: '6, 6',
    },
    labels: { fill: "white" },
    tickLabels: {
      fontSize: '3px',
      fontFamily: 'inherit',
      fillOpacity: 1,
      margin: 0,
      padding: 0
    },
    axisLabel: {
      fontsize: 13
    }
  };
  

  export default function BarChart({
    data
  }: {
    data: Array<any>
  }) {
  return(
    
            <VictoryChart
                theme={VictoryTheme.material} 
                domainPadding={20}
            >
                <VictoryAxis
                // tickFormat specifies how ticks should be displayed
                style={tickStyle}
                />
                <VictoryAxis
                dependentAxis
                // tickFormat specifies how ticks should be displayed
                tickFormat={(x) => (`$${x / 1000}k`)}
                style={tickStyle}
                />
                <VictoryBar
                    animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                    }}
                    style={{
                    data: { strokeWidth: 1 },
                    parent: { border: "1px solid #ccc"},
                    
                    }}
                    data={data}
                    y="median_hh_inc_placeofresidence_ia"
                    x="residence_geo"
                    
                />
            </VictoryChart>
  )

    }