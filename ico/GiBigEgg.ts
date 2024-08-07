import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BigEgg icon from Game Icons
 * @module
 */
export function GiBigEgg(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 16C166 16 76 196 76 316c0 90 60 180 180 180s180-90 180-180c0-120-90-300-180-300z"}}]})(props);
}
export default GiBigEgg;
