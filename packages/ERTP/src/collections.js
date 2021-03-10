// @ts-check

/**
 * TODO: move to https://github.com/Agoric/readonly-collections-shim ?
 *
 * @returns {Set<T>}
 * @template T
 */
export function makeFlexSet(iterable = undefined) {
  return new Set(iterable);
}
