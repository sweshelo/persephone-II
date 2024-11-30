import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { SkiaRenderer, SkiaChart } from '@wuba/react-native-echarts';
import { View } from 'react-native';

echarts.use([SkiaRenderer, LineChart, GridComponent]);

export const PointsGraph = () => {
  const skiaRef = useRef<any>(null);
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
        renderer: 'skia',
        width: 400,
        height: 400,
      });
      chart.setOption(option);
    }
    return () => chart?.dispose();
  }, []);

  return (
    <View className='bg-white rounded-lg shadow'>
      <SkiaChart ref={skiaRef} />
    </View>
  );
}