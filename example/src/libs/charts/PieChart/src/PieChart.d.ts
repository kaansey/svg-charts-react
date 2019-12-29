import React from 'react';
import { TransitionTimingFunction, TransitionDuration } from '../../types/transition';
interface PieChartProps {
    data: Array<any>;
    viewBoxSize?: number;
    expandOnHover?: boolean;
    expandSize?: number;
    shrinkOnTouchEnd?: boolean;
    strokeColor?: string;
    strokeLinejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
    strokeWidth?: number;
    transitionDuration?: TransitionDuration;
    transitionTimingFunction?: TransitionTimingFunction;
    onPieHover?(data: Array<any>, index: number, e: any): void;
}
declare const PieChart: React.SFC<PieChartProps>;
export default PieChart;
