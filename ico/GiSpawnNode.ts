import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SpawnNode icon from Game Icons
 * @module
 */
export function GiSpawnNode(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M136 16v30h240V16H136zm0 60v60h240V76H136zm0 90v90h240v-90H136zm0 120v120h240V286H136zm-30 150c-15 0-30 15-30 30v30h360v-30c0-15-15-30-30-30H106z"}}]})(props);
}
export default GiSpawnNode;
