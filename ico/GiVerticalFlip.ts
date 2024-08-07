import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VerticalFlip icon from Game Icons
 * @module
 */
export function GiVerticalFlip(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M233.373 387.02H165.49L256 477.53l90.51-90.51h-67.883V124.98h67.883L256 34.47l-90.51 90.51h67.883v262.04z"}}]})(props);
}
export default GiVerticalFlip;
