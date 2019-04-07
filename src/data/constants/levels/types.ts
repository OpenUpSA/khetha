/**
 * The amount of Khetha points required to unlock a specific user achievement level.
 */
export type TpointsThreshold = number;

/**
 * An object that contains all the levels that users can reach (the names of the levels are listed
 * as keys in the object), as well as how many points are required to reach each specific level.
 */
export interface LevelsShape {
  'Honey Bee': TpointsThreshold;
  'Wild Hare': TpointsThreshold;
  'Warthog': TpointsThreshold;
  'Springbok': TpointsThreshold;
  'Zebra': TpointsThreshold;
  'Lion': TpointsThreshold;
  'Rhino': TpointsThreshold;
  'Elephant': TpointsThreshold;
}
