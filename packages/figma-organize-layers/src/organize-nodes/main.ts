import {
  emit,
  extractAttributes,
  formatErrorMessage,
  formatSuccessMessage,
  loadSettingsAsync,
  on,
  once,
  pluralize,
  saveSettingsAsync,
  setRelaunchButton,
  showUI
} from '@create-figma-plugin/utilities'

import { defaultSettings, settingsKey } from '../utilities/settings.js'
import { GroupDefinition, Settings } from '../utilities/types.js'
import { computeGroups } from './utilities/compute-groups.js'
import { computeMaximumGroupDefinition } from './utilities/compute-maximum-group-definition.js'
import { organizeNodes } from './utilities/organize-nodes.js'
import {
  CloseUIHandler,
  Group,
  NodePlainObject,
  OrganizeNodesProps,
  UpdateMainStateHandler,
  UpdateUIStateHandler
} from './utilities/types.js'

export default async function (): Promise<void> {
  const nodes = figma.currentPage.children.slice()
  if (nodes.length === 0) {
    figma.closePlugin(formatErrorMessage('No layers on page'))
    return
  }
  const settings = await loadSettingsAsync(defaultSettings, settingsKey)
  function updateUIState() {
    const nodes = figma.currentPage.children.slice()
    const { combineSingleLayerGroups, groupDefinition } = settings
    const groups = getGroups(nodes, {
      combineSingleLayerGroups,
      groupDefinition
    })
    const maximumGroupDefinition = computeMaximumGroupDefinition(nodes)
    emit<UpdateUIStateHandler>(
      'UPDATE_UI_STATE',
      groups,
      maximumGroupDefinition
    )
  }
  figma.on('selectionchange', updateUIState)
  once<CloseUIHandler>('CLOSE_UI', function () {
    figma.closePlugin()
  })
  once('SUBMIT', async function (settings: Settings) {
    await saveSettingsAsync(settings, settingsKey)
    const {
      combineSingleLayerGroups,
      groupDefinition,
      horizontalSpace,
      verticalSpace
    } = settings
    if (horizontalSpace === null || verticalSpace === null) {
      figma.closePlugin()
      return
    }
    const nodes = figma.currentPage.children.slice()
    organizeNodes(nodes, {
      combineSingleLayerGroups,
      groupDefinition,
      horizontalSpace,
      verticalSpace
    })
    figma.viewport.scrollAndZoomIntoView(nodes)
    setRelaunchButton(figma.currentPage, 'organizeLayers')
    figma.closePlugin(
      formatSuccessMessage(
        `Organized ${nodes.length} ${pluralize(nodes.length, 'layer')}`
      )
    )
  })
  on<UpdateMainStateHandler>(
    'UPDATE_MAIN_STATE',
    function (options: {
      combineSingleLayerGroups: boolean
      groupDefinition: GroupDefinition
    }) {
      settings.groupDefinition = options.groupDefinition
      settings.combineSingleLayerGroups = options.combineSingleLayerGroups
      updateUIState()
    }
  )
  const { combineSingleLayerGroups, groupDefinition } = settings
  const groups = getGroups(nodes, { combineSingleLayerGroups, groupDefinition })
  const maximumGroupDefinition = computeMaximumGroupDefinition(nodes)
  showUI<OrganizeNodesProps>(
    { height: 350, width: 240 },
    { ...settings, groups, maximumGroupDefinition }
  )
}

function getGroups(
  nodes: Array<SceneNode>,
  options: {
    combineSingleLayerGroups: boolean
    groupDefinition: GroupDefinition
  }
): Array<Group<NodePlainObject>> {
  return computeGroups(nodes, options).map(function (group: Group<SceneNode>) {
    return {
      ...group,
      nodes: extractAttributes(group.nodes, ['id', 'name'])
    }
  })
}
