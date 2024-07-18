import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SaveArrow icon from Game Icons
 * @module
 */
export function GiSaveArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M224 30v256h-64l96 128 96-128h-64V30h-64zM32 434v48h448v-48H32z"}}]})(props);
}
export default GiSaveArrow;
