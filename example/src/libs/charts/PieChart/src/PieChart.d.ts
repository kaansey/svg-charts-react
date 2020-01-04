import React from 'react';
import { TransitionTimingFunction, TransitionDuration, PieChartData, StrokeLinejoin, ColorTone } from '../../types/common';
interface PieChartProps {
    data: Array<PieChartData>;
    viewBoxSize?: number;
    expandOnHover?: boolean;
    expandSize?: number;
    shrinkOnTouchEnd?: boolean;
    strokeColor?: string;
    strokeLinejoin?: StrokeLinejoin;
    strokeWidth?: number;
    transitionDuration?: TransitionDuration;
    transitionTimingFunction?: TransitionTimingFunction;
    onPieHover?(data: PieChartData, index: number, e: EventTarget): void;
    colorTone?: ColorTone;
}
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
