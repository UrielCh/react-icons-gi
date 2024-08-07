import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * PlainSquare icon from Game Icons
 * @module
 */
export function GiPlainSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M23.05 23.05V488.9H488.9V23.05H23.05z"}}]})(props);
}
export default GiPlainSquare;
