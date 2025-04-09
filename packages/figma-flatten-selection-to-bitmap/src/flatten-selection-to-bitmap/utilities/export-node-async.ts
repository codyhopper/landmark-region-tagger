import { Resolution } from '../../utilities/types.js'

export async function exportGroupNodeAsync(
  node: GroupNode,
  resolution: Resolution
): Promise<Uint8Array> {
  const exportSettings: ExportSettingsImage = {
    constraint: {
      type: 'SCALE',
      value: resolution
    },
    format: 'PNG'
  }
  return node.exportAsync(exportSettings)
}
