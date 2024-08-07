import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * UpCard icon from Game Icons
 * @module
 */
export function GiUpCard(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 47L139.4 202.467l93.6-40.115V359h46V162.352l93.6 40.115L256 47zM144 256L32 480h448L368 256h-71v121h-82V256h-71z"}}]})(props);
}
export default GiUpCard;
