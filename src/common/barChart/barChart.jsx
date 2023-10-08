// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
import { linearGradientDef } from "@nivo/core";
import { useEffect, useState } from "react";
// import { Stream } from '@nivo/stream'

export default function BarChart({ data /* see data tab */ }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(data);
  }, [data]);

  return (
    <ResponsiveBar
      data={chartData}
      keys={["negative", "neutral", "positive"]}
      indexBy="Service Provider"
      groupMode="stacked"
      layout="horizontal"
      margin={{ top: 10, right: 20, bottom: 50, left: 90 }}
      padding={0.4}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={["#FA6255", "#F8C77F", "#76BB88"]}
      labelFormat={(value, id, data) => value + "asdasdasdsad"}
      // colors={{ scheme: "nivo" }}
      //   defs={[
      //     linearGradientDef('gradientB', [
      //         // { offset: 100, color: '#CECECE' },
      //         // { offset: 0, color: '#CECECE' },
      //         { offset: 100, color: '#CECECE' },
      //         { offset: 0, color: '#B4B4B4' },
      //         { offset: 100, color: '#B4B4B4' },
      //     ],
      //     {
      //         gradientTransform: 'rotate(90 1 1)'
      //     }),
      // ]}
      // 2. defining rules to apply those gradients
      // fill={[{ match: "*", id: "gradientB" }]}
      // borderRadius={10}
      // borderColor={{
      //   from: "color",
      //   modifiers: [["darker", 1.6]],
      // }}
      axisTop={null}
      axisRight={null}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 4]],
      }}
    />
  );
}
