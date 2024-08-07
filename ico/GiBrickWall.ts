import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BrickWall icon from Game Icons
 * @module
 */
export function GiBrickWall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M494 18.02l-101 .103V119h101zm-119 .12l-238 .247V119h238zm-256 .266L18 18.51V119h101zM18 137v110h229V137zm247 0v110h229V137zM18 265v110h101V265zm119 0v110h238V265zm256 0v110h101V265zM18 393v100.98l229-.236V393zm247 0v100.727l229-.237V393z"}}]})(props);
}
export default GiBrickWall;
