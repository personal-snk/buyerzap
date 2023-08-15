// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from '@nivo/pie'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const const_data = [
    {
      "id": "javascript",
    //   "label": "javascript",
      "value": 279,
      "color": "#C20000"
    },
    {
      "id": "ruby",
    //   "label": "ruby",
      "value": 73,
      "color": "#00C2FF"
    },
    {
      "id": "python",
    //   "label": "python",
      "value": 252,
      "color": "#D60000"
    },
    {
      "id": "elixir",
    //   "label": "elixir",
      "value": 223,
      "color": "#A33C03"
    },
    {
      "id": "scala",
    //   "label": "scala",
      "value": 173,
      "color": "#0031DE"
    }
  ];

const PieChart = ({ data /* see data tab */ }) => (
    <ResponsivePie
        data={const_data}
        margin={{ top: 0, right: 40, bottom: 10, left: 40 }}
        innerRadius={0.6}
        padAngle={7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        colors={{ datum: 'data.color' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        // arcLinkLabelsSkipAngle={10}
        // arcLinkLabelsTextColor="#333333"
        // arcLinkLabelsThickness={2}
        // arcLinkLabelsColor={{ from: 'color' }}
        // arcLabelsSkipAngle={20}
        // arcLabelsTextColor={{
        //     from: 'color',
        //     modifiers: [
        //         [
        //             'darker',
        //             2
        //         ]
        //     ]
        // }}
        // defs={[
        //     {
        //         id: 'dots',
        //         type: 'patternDots',
        //         background: 'inherit',
        //         color: 'rgba(255, 255, 255, 0.3)',
        //         size: 4,
        //         padding: 1,
        //         stagger: true
        //     },
        //     {
        //         id: 'lines',
        //         type: 'patternLines',
        //         background: 'inherit',
        //         color: 'rgba(255, 255, 255, 0.3)',
        //         rotation: -45,
        //         lineWidth: 6,
        //         spacing: 10
        //     }
        // ]}
        // legends={[
        //     {
        //         anchor: 'bottom',
        //         direction: 'row',
        //         justify: false,
        //         translateX: 0,
        //         translateY: 56,
        //         itemsSpacing: 0,
        //         itemWidth: 100,
        //         itemHeight: 18,
        //         itemTextColor: '#999',
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 1,
        //         symbolSize: 18,
        //         symbolShape: 'circle',
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemTextColor: '#000'
        //                 }
        //             }
        //         ]
        //     }
        // ]}
    />
);

export default PieChart;