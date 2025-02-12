import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { SVGRenderer, SvgChart } from '@wuba/react-native-echarts';
import { View } from 'react-native';

echarts.use([SVGRenderer, LineChart, GridComponent]);

export const PointsGraph = () => {
  const chartRef = useRef<any>(null);
  const chartsRef = useRef<any>(null);
  const [chartWidth, setChartWidth] = useState(0);

  const handleLayout = (e: any) => {
    const { width } = e.nativeEvent.layout;
    setChartWidth(width)
  }

  useEffect(() => {
    const option = {
      xAxis: {
        type: 'category',
        data: ['月', '火', '水', '木', '金', '土', '日'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };
    let chart: any;
    if (chartRef.current) {
      chart = echarts.init(chartRef.current, 'light', {
        renderer: 'svg',
        width: 400,
        height: 400,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  useEffect(() => {
    chartsRef.current?.resize({
      width: chartWidth,
    })
  }, [chartWidth]);

  return (
    <View className='bg-white rounded-lg shadow' onLayout={handleLayout}>
      <SvgChart ref={chartRef} />
    </View>
  );
}