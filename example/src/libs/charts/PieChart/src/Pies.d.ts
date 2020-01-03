import React from 'react';
import { TransitionTimingFunction, TransitionDuration, PieChartData } from '../../types/common';
interface PiesPorps {
    center: number;
    data: Array<PieChartData>;
    onHover(data: PieChartData, index: number, e: any): void;
    expandSize?: number;
    strokeColor?: string;
    strokeLinejoin?: 'miter' | 'round' | 'bevel' | 'inherit';
    strokeWidth?: number;
    transitionDuration?: TransitionDuration;
    transitionTimingFunction?: TransitionTimingFunction;
}
declare const Pies: React.FC<PiesPorps>;
export default Pies;
