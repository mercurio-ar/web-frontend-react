import { ISerie } from './Serie';

export interface IVisualization {
    id: number;
    name: string;
    series: ISerie[];
}
