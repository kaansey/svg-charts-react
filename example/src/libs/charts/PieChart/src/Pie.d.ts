import React, { ReactNode } from 'react';
import { TransitionTimingFunction, TransitionDuration } from '../../types/transition';
interface PieProps {
    fill: string;
    onTouchStart(): void;
    onTouchEnd(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    path?: string;
    strokeColor: string;
    strokeWidth: string;
    strokeLinejoin: string;
    title?: ReactNode;
    href?: string;
    transitionDuration: TransitionDuration;
    transitionTimingFunction: TransitionTimingFunction;
}
declare const Pie: React.SFC<PieProps>;
export default Pie;
