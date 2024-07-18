import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Crush icon from Game Icons
 * @module
 */
export function GiCrush(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M46 16c-15 0-30 15-30 30v240h60l60 60 60-60 60 60 60-60 60 60 60-60h60V46c0-15-15-30-30-30H46zm211.75 360.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z"}}]})(props);
}
export default GiCrush;
