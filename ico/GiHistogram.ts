import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Histogram icon from Game Icons
 * @module
 */
export function GiHistogram(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M23 23v466h466v-18h-40.893V256h-48v215h-31.675V159.33h-48V471h-31.227V320.242h-48V471H207.2V80.418h-48V471H128V192H80v279H41V23H23z"}}]})(props);
}
export default GiHistogram;
