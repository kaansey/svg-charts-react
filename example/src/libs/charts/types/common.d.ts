export declare type PieChartData = {
    title?: string;
    value: number;
    color?: string;
    hovered?: boolean;
    percentage?: string;
};
export declare type TransitionDuration = string;
export declare type TransitionTimingFunction = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear' | 'step-start' | 'step-end';
export declare type StrokeLinejoin = 'miter' | 'round' | 'bevel' | 'inherit';
export declare type ColorTone = {
    color: 'blue' | 'red' | 'green' | 'yellow' | string;
    diffPercentage?: number;
};
export declare type CustomTooltipTemplateProps = {
    data: PieChartData;
};
