import { PixiComponent } from './utils/element'
import { render } from './render'
import Stage from './stage'
import { PixiFiber } from './reconciler'
import { Context as AppContext, AppProvider, AppConsumer, withPixiApp } from './stage/provider'
import { useTick, useApp } from './hooks'
import { withFilters } from './hoc'
import { eventHandlers } from './utils/pixi'
import { applyDefaultProps } from './utils/props'

/**
 * -------------------------------------------
 * Public API
 * -------------------------------------------
 */

export {
  render,
  Stage,
  withPixiApp,
  PixiComponent,
  PixiFiber,
  AppProvider,
  AppConsumer,
  AppContext,
  useTick,
  useApp,
  withFilters,
  applyDefaultProps,
  eventHandlers,
}
