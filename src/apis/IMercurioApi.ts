import { IVisualization } from "../models/Visualization";


export default interface IMercurioApi {
    fetchVisualizations: () => Promise<IVisualization[]>
}