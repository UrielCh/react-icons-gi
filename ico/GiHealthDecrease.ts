import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HealthDecrease icon from Game Icons
 * @module
 */
export function GiHealthDecrease(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M196 16c-16.62 0-30 13.38-30 30v120H46c-16.62 0-30 13.38-30 30v120c0 16.62 13.38 30 30 30h120v120c0 16.62 13.38 30 30 30h120c16.62 0 30-13.38 30-30V346h120c16.62 0 30-13.38 30-30V196c0-16.62-13.38-30-30-30H346V46c0-16.62-13.38-30-30-30zm0 135h120l-60 60zm0 75h120l-60 60zm0 75h120l-60 60z"}}]})(props);
}
export default GiHealthDecrease;
