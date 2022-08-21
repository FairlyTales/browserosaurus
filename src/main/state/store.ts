import { app } from 'electron'

import { Channel } from '../../shared/state/channels'
import createStore from '../../shared/state/create-store'
import { defaultData } from '../../shared/state/reducer.data'
import { database } from '../database'
import { actionHubMiddleware } from './middleware.action-hub'
import { busMiddleware } from './middleware.bus'

const { dispatch, getState } = createStore(
  Channel.MAIN,
  [busMiddleware(), actionHubMiddleware()],
  {
    storage: database.getAll(),
    data: {
      ...defaultData,
      version: `${app.getVersion()}${app.isPackaged ? '' : ' DEV'}`,
      isDefaultProtocolClient: app.isDefaultProtocolClient('http'),
    },
  },
)

export { dispatch, getState }
