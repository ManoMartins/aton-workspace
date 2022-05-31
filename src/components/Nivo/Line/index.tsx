import { Box } from '@chakra-ui/react';
import { ResponsiveLine } from '@nivo/line';

const Line = () => {
  return (
    <Box w="full" h="full" color="blackAlpha.900">
      <ResponsiveLine
        data={[
          {
            id: 'action',
            color: 'hsl(87, 70%, 50%)',
            data: [
              {
                x: '2022-01-01',
                y: 200,
              },
              {
                x: '2022-02-01',
                y: 60,
              },
              {
                x: '2022-03-01',
                y: 280,
              },
              {
                x: '2022-04-01',
                y: 130,
              },
              {
                x: '2022-05-01',
                y: 180,
              },
            ],
          },
          {
            id: 'racing',
            color: 'hsl(287, 70%, 50%)',
            data: [
              {
                x: '2022-01-01',
                y: 240,
              },
              {
                x: '2022-02-01',
                y: 60,
              },
              {
                x: '2022-03-01',
                y: 280,
              },
              {
                x: '2022-04-01',
                y: 130,
              },
              {
                x: '2022-05-01',
                y: 180,
              },
            ],
          },
        ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Line;
