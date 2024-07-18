import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Join icon from Game Icons
 * @module
 */
export function GiJoin(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 23v18h215v110h-37.6l6.5 13 40.1 80.1 46.6-93.1H265V41h215V23zm224 244.9L209.4 361H247v110H32v18h448v-18H265V361h37.6z"}}]})(props);
}
export default GiJoin;
