import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function GiSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M23.05 23.05V488.9H488.9V23.05zm17.9 17.9H471.1V471.1H40.95z"}}]})(props);
}
export default GiSquare;
