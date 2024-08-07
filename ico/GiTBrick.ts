import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TBrick icon from Game Icons
 * @module
 */
export function GiTBrick(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M93 141a9.5 9.5 0 0 0-9.5 9.5v96A9.5 9.5 0 0 0 93 256h96a9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0-9.5 9.5v96a9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0 9.5 9.5h96a9.5 9.5 0 0 0 9.5-9.5v-96a9.5 9.5 0 0 0-9.5-9.5h-96a9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0-9.5-9.5h-96a9.5 9.5 0 0 0-9.5 9.5 9.5 9.5 0 0 0-9.5-9.5H93zm9.5 19h77v77h-77v-77zm115 0h77v77h-77v-77zm115 0h77v77h-77v-77zm-115 115h77v77h-77v-77z"}}]})(props);
}
export default GiTBrick;
