import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BlackBridge icon from Game Icons
 * @module
 */
export function GiBlackBridge(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 20a104 104 0 0 0-104 104 104 104 0 0 0 104 104 104 104 0 0 0 104-104A104 104 0 0 0 256 20zM16 256v240h48c64-160 320-160 384 0h48V256h-48v64h-60v-64h-48v64h-60v-64h-48v64h-60v-64h-48v64H64v-64H16z"}}]})(props);
}
export default GiBlackBridge;
