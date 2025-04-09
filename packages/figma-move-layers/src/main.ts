import {
  emit,
  formatErrorMessage,
  formatSuccessMessage,
  loadSettingsAsync,
  once,
  pluralize,
  saveSettingsAsync,
  showUI
} from '@create-figma-plugin/utilities'

import { defaultSettings, settingsKey } from './utilities/settings.js'
import {
  CloseUIHandler,
  MoveNodesProps,
  SelectionChangedHandler,
  Settings,
  SubmitHandler
} from './utilities/types.js'

export default async function (): Promise<void> {
  if (figma.currentPage.selection.length === 0) {
    figma.closePlugin(formatErrorMessage('Select one or more layers'))
    return
  }
  const settings = await loadSettingsAsync(defaultSettings, settingsKey)
  once<CloseUIHandler>('CLOSE_UI', function () {
    figma.closePlugin()
  })
  once<SubmitHandler>('SUBMIT', async function (settings: Settings) {
    await saveSettingsAsync(settings, settingsKey)
    const { horizontalOffset, verticalOffset } = settings
    if (
      (horizontalOffset === 0 || horizontalOffset === null) &&
      (verticalOffset === 0 || verticalOffset === null)
    ) {
      figma.closePlugin()
      return
    }
    const selection = figma.currentPage.selection
    for (const node of selection) {
      if (horizontalOffset !== 0 && horizontalOffset !== null) {
        node.x += horizontalOffset
      }
      if (verticalOffset !== 0 && verticalOffset !== null) {
        node.y += verticalOffset
      }
    }
    figma.closePlugin(
      formatSuccessMessage(
        `Moved selected ${pluralize(selection.length, 'layer')}`
      )
    )
  })
  figma.on('selectionchange', function () {
    emit<SelectionChangedHandler>(
      'SELECTION_CHANGED',
      figma.currentPage.selection.length > 0
    )
  })
  showUI<MoveNodesProps>(
    { height: 113, width: 240 },
    { ...settings, hasSelection: true }
  )
}
