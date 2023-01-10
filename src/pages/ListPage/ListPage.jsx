import React from 'react'
import { Link } from 'react-router-dom'

import TreeList, {
  Column,
  HeaderFilter,
  SearchPanel,
  Button,
  Editing,
} from 'devextreme-react/tree-list'

import './ListPage.css'

import { employees } from '../../data'

export default function ListPage() {
  let link = 'https://www.google.com'
  return (
    <div className='container'>
      <h1>Employee List Page</h1>
      <a href='/New'>New Record</a>
      <TreeList
        dataSource={employees}
        showBorders={true}
        columnAutoWidth={true}
        wordWrapEnabled={true}
        keyExpr='_id'
        id='list'
      >
        <SearchPanel visible={true} width={300} />
        <HeaderFilter visible={true} />
        <Column dataField='Name' />
        <Column dataField='Surname' caption='Surname'></Column>
        <Column dataField='Role' caption='Role' />
        <Column dataField='Status' caption='Status'></Column>
        <Column dataField='Work_Start' caption='Start Date' dataType='date' />
        <Column dataField='Work_End' caption='Work End' dataType='date' />

        <Column type='buttons'>
          <Button name='edit' />
          <Button name='delete' />
        </Column>
        <Editing
          mode='popup'
          allowUpdating={true}
          allowDeleting={true}
          allowAdding={true}
        />
      </TreeList>
    </div>
  )
}
