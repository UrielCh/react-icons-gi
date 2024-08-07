import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HadesSymbol icon from Game Icons
 * @module
 */
export function GiHadesSymbol(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M240 16 112 272l72.8 53 55-37.1L192 256zm32 0 48 240-144 96-64 48 144 96 144-96-64-48-8.2-5.4-56.5 41.2L288 400l-32 32-32-32 176-128z"}}]})(props);
}
export default GiHadesSymbol;
