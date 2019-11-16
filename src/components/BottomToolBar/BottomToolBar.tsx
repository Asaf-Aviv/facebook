import React from 'react'
import styled from 'styled-components'
import ToolBarActions from 'components/ToolBarActions/ToolBarActions'

const BottomToolBar: React.FC = () => (
  <ToolBar>
    <ToolBarActions />
  </ToolBar>
)

const ToolBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #3c5a99;
`

export default BottomToolBar
