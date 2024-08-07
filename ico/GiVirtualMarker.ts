import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VirtualMarker icon from Game Icons
 * @module
 */
export function GiVirtualMarker(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32L32 224h128l96-80 96 80h128L256 32zm0 176l-52 39H32v18h172l52 39 52-39h172v-18H308l-52-39zM32 288l224 192 224-192H352l-96 80-96-80H32z"}}]})(props);
}
export default GiVirtualMarker;
