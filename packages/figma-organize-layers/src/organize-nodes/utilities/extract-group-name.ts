import { GroupDefinition } from '../../utilities/types.js'

export function extractGroupName(
  layerName: string,
  groupDefinition: GroupDefinition
): string {
  if (layerName === '/') {
    return '/'
  }
  const split = splitBySlash(layerName)
  if (split.length === 1) {
    return layerName
  }
  if (split.length <= groupDefinition) {
    return split.slice(0, split.length - 1).join('/')
  }
  return split.slice(0, groupDefinition).join('/')
}

const slashRegex = /\//

function splitBySlash(string: string): Array<string> {
  const trimmed =
    string[string.length - 1] === '/'
      ? string.substring(0, string.length - 1)
      : string
  return trimmed.split(slashRegex)
}
