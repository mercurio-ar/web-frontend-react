import { IStoreState } from "../reducers/rootReducer";

import { ISerie } from "../models";

export type ISerieDisplayNameGetter = (serie: ISerie) => string;

export function makeGetSerieDisplayName(state: IStoreState): ISerieDisplayNameGetter {
    return (serie: ISerie) => serie.displayName;
}
