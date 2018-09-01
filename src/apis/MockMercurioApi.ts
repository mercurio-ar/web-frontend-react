import IMercurioApi from "./IMercurioApi";

import { ISerie } from "../models/Serie";


const series: ISerie[] = [
    {displayName: "serie1", points: [{x:0, y:1},{x:1, y:1},{x:3, y:1}]},
    {displayName: "serie2", points: [{x:0, y:1},{x:3, y:4}]},
    {displayName: "serie3", points: [{x:0, y:1},{x:1, y:4},{x:3, y:1}]},
    {displayName: "serie4", points: [{x:0, y:3},{x:1, y:1},{x:3, y:2}]},
];

export default class MockMercurioApi implements IMercurioApi {

    public fetchVisualizations() {
        return Promise.resolve([
            {id: 1, name: "Visualization01", series},
            {id: 2, name: "Visualization02", series: [series[0], series[1]]},
            {id: 3, name: "Visualization03", series: [series[0]]},
        ]);
    }
}