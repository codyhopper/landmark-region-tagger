import {
  emit,
  formatErrorMessage,
  formatSuccessMessage,
  loadSettingsAsync,
  once,
  saveSettingsAsync,
  showUI
} from '@create-figma-plugin/utilities'

import { defaultSettings, settingsKey } from './settings.js'
import {
  CloseUIHandler,
  FormState,
  MainFactoryOptions,
  SelectionChangedHandler,
  Settings,
  SubmitHandler
} from './types.js'

export function mainFactory({
  direction,
  distributeNodes,
  title
}: MainFactoryOptions) {
  return async function (): Promise<void> {
    if (figma.currentPage.selection.length < 2) {
      figma.closePlugin(formatErrorMessage('Select two or more layers'))
      return
    }
    const settings = await loadSettingsAsync(defaultSettings, settingsKey)
    once<CloseUIHandler>('CLOSE_UI', function () {
      figma.closePlugin()
    })
    once<SubmitHandler>('SUBMIT', async function (settings: Settings) {
      await saveSettingsAsync(settings, settingsKey)
      const { space } = settings
      if (space === null) {
        figma.closePlugin()
        return
      }
      distributeNodes(figma.currentPage.selection.slice(), space)
      figma.closePlugin(formatSuccessMessage(`Distributed layers ${direction}`))
    })
    figma.on('selectionchange', function () {
      emit<SelectionChangedHandler>(
        'SELECTION_CHANGED',
        figma.currentPage.selection.length > 1
      )
    })
    showUI<FormState>(
      { height: 112, title, width: 240 },
      { ...settings, hasSelection: true }
    )
  }
}
