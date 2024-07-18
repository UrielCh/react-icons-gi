import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlainArrow icon from Game Icons
 * @module
 */
export function GiPlainArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M130.81 21.785v245.95H43.84L256 489.382l212.158-221.644H381.19V21.786H130.81z"}}]})(props);
}
export default GiPlainArrow;
