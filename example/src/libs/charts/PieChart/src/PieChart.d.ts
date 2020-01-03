import React from 'react';
import { TransitionTimingFunction, TransitionDuration, PieChartData } from '../../types/common';
interface PieChartProps {
    data: Array<PieChartData>;
    viewBoxSize?: number;
    expandOnHover?: boolean;
    expandSize?: number;
    shrinkOnTouchEnd?: boolean;
    strokeColor?: string;
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    strokeWidth?: number;
    transitionDuration?: TransitionDuration;
    transitionTimingFunction?: TransitionTimingFunction;
    onPieHover?(data: PieChartData, index: number, e: EventTarget): void;
}
declare const PieChart: React.FC<PieChartProps>;
export default PieChart;
