import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Factory icon from Game Icons
 * @module
 */
export function GiFactory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M384 64l.387 256H368l-96-128-16 128-96-128-16 128-96-128-16 128v160h448V64h-32v256h-32V64h-32zM64 352h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zM64 416h48v32H64v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32zm80 0h48v32h-48v-32z"}}]})(props);
}
export default GiFactory;
