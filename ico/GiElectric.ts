import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Electric icon from Game Icons
 * @module
 */
export function GiElectric(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M376 211H256V16L136 301h120v195z"}}]})(props);
}
export default GiElectric;
