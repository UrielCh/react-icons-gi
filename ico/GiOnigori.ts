import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Onigori icon from Game Icons
 * @module
 */
export function GiOnigori(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 64c64 0 224 224 224 352 0 31.3-47.7 52.4-112 63.3-.3-100-5.8-143.3-112-143.3s-111.7 43.3-112 143.3c-64.3-10.9-112-32-112-63.3C32 288 192 64 256 64z"}}]})(props);
}
export default GiOnigori;
