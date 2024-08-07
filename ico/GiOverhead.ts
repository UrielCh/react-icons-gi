import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Overhead icon from Game Icons
 * @module
 */
export function GiOverhead(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M37.368 144.56c97.187 0 101.127 1.314 101.127 1.314C263.844-57.842 363.082 219.342 375.947 319.62l-36.72.16 71.834 125.393 68.982-125.01-35.724-1.472c-82.41-287.54-303.28-300.208-406.95-174.13z"}}]})(props);
}
export default GiOverhead;
