import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Triforce icon from Game Icons
 * @module
 */
export function GiTriforce(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 59.72L142.687 256h226.625L256 59.72zM369.313 256L256 452.28h226.625L369.312 256zM256 452.28L142.687 256 29.376 452.28H256z"}}]})(props);
}
export default GiTriforce;
