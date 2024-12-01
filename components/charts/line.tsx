import React, { useRef, useEffect, useState } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { SkiaRenderer, SkiaChart } from '@wuba/react-native-echarts';
import { View } from 'react-native';

echarts.use([SkiaRenderer, LineChart, GridComponent]);

export const PointsGraph = () => {
  const skiaRef = useRef<any>(null);
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
    if (skiaRef.current) {
      chart = echarts.init(skiaRef.current, 'light', {
        // @ts-ignore
        renderer: 'skia',
        width: 400,
        height: 400,
      });
      chart.setOption(option);
      chartsRef.current = chart;
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
      <SkiaChart ref={skiaRef} />
    </View>
  );
}