import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Table icon from Game Icons
 * @module
 */
export function GiTable(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M41 265v30h430v-30H41zm39 48v158.066h32V313H80zm320 0v158.066h32V313h-32z"}}]})(props);
}
export default GiTable;
