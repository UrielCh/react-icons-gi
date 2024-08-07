import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TankTop icon from Game Icons
 * @module
 */
export function GiTankTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128 37l32-6c16 112 32 150 96 150s80-38 96-150l32 6s-16 160 32 208c0 96 0 112 16 224-112 16-240 16-352 0 16-112 16-128 16-224 48-48 32-208 32-208z"}}]})(props);
}
export default GiTankTop;
