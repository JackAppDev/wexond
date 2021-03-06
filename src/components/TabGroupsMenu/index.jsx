import React from 'react'

import { observer } from 'mobx-react'

import Store from '../../stores/store'

import * as tabGroupsActions from '../../actions/tab-groups'

import TabGroupsMenuItem from '../TabGroupsMenuItem'

@observer
export default class TabGroupsMenu extends React.Component {
  render () {
    const onAddClick = () => {
      tabGroupsActions.addTabGroup()
      Store.app.tabGroupsMenu.refreshHeight()
      Store.editingTabGroup = -1
    }

    return (
      <div className='tab-groups-menu'>
        <div className='menu-items'>
          {Store.tabGroups.map((item, key) => {
            return <TabGroupsMenuItem tabGroup={item} key={key}></TabGroupsMenuItem>
          })}
        </div>
        <div className='add-group' onClick={onAddClick}>
          {Store.dictionary.tabGroups.addNewGroup}
        </div>
        <div style={{clear: 'both'}}></div>
      </div>
    )
  }
}