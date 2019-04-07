import { Ticon } from '../../tasks/types';

/**
 * The string name of an icon that is used in this project.
 */
export type TiconName = Ticon;


export interface IconsShape {
  names: TiconName[];
}
