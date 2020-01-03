import { PieChartData } from '../../types/common';
export declare const transformPiesData: (data: PieChartData[], expandOnHover: boolean, hoveredIndex: number) => PieChartData[];
export declare const getPath: ({ total, radius, value, center, decimals, }: {
    total: number;
    radius: number;
    value: number;
    center: number;
    decimals: number;
}) => string;
