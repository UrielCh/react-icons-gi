import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Sideswipe icon from Game Icons
 * @module
 */
export function GiSideswipe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M422.52 404.55c0-92.006-1.243-95.736-1.243-95.736 204.583-58.483-212.586-77.202-252.76-71.863l-.15 34.762-118.71-68.004 118.346-65.303 1.394 33.82c303.74-5.71 371.256 83.987 253.124 232.325z"}}]})(props);
}
export default GiSideswipe;
