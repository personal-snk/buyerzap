// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bar
import { ResponsiveBar } from '@nivo/bar'
import { linearGradientDef } from '@nivo/core'
// import { Stream } from '@nivo/stream'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const const_data=[
  {
    "Service Provider": "Amazon Fresh",
    "quality": 4,
    "color":""
  },
  {
    "Service Provider": "Swiggy Mart",
    "quality": 3.8,
  },
  {
    "Service Provider": "BigBasket",
    "quality": 3.2,
  },
  {
    "Service Provider": "Blinkit",
    "quality": 3,
  },
  {
    "Service Provider": "JioMart",
    "quality": 4.3,
  },
  {
    "Service Provider": "Zepto",
    "quality": 4.8,
  },
  {
    "Service Provider": "Dunzo",
    "quality": 2,
  }
]

const BarChart = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={const_data}
        keys={[
            'quality',
        ]}
        indexBy="Service Provider"
        layout='horizontal'
        margin={{ top: 10, right: 20, bottom: 50, left: 90 }}
        padding={0.4}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          linearGradientDef('gradientB', [
              // { offset: 100, color: '#CECECE' },
              // { offset: 0, color: '#CECECE' },
              { offset: 100, color: '#CECECE' },
              { offset: 0, color: '#B4B4B4' },
              { offset: 100, color: '#B4B4B4' },
          ],
          {
              gradientTransform: 'rotate(90 1 1)'
          }),
      ]}
      // 2. defining rules to apply those gradients
      fill={[
          { match: '*', id: 'gradientB' },
      ]}
      borderRadius={10}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    1.6
                ]
            ]
        }}
        axisTop={null}
        axisRight={null}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    4
                ]
            ]
        }}
    />
)
export default BarChart;