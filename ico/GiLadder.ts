import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Ladder icon from Game Icons
 * @module
 */
export function GiLadder(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M121 17v30h270V17H121zm16 48v46h30V65h-30zm208 0v46h30V65h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121zm16 48v46h30v-46h-30zm208 0v46h30v-46h-30zm-224 64v30h270v-30H121z"}}]})(props);
}
export default GiLadder;
