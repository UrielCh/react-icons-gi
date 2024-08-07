import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CarBattery icon from Game Icons
 * @module
 */
export function GiCarBattery(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M73 81v46h46V81H73zm320 0v46h46V81h-46zM25 145v16h462v-16H25zm0 34v252h462V179H25zm382 21h18v23h23v18h-23v23h-18v-23h-23v-18h23v-23zM64 223h64v18H64v-18z"}}]})(props);
}
export default GiCarBattery;
