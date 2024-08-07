import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * StarKey icon from Game Icons
 * @module
 */
export function GiStarKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M259.4 40.33l-93 60.37L64.03 58.34 92.67 165.4l-71.89 84.3 110.62 5.8 58.1 94.5 32.4-84.6 208.7 206.8 25.4-25.4-.1-.1 32.6-32.5-25.4-25.4-32.6 32.5-18.4-18.4 21.2-21.2-25.4-25.4-21.2 21.2-17-17 55.1-55.2-25.4-25.4-55.1 55.2-95.2-93.4 87.8-21.1-86.1-69.8 8.6-110.47z"}}]})(props);
}
export default GiStarKey;
