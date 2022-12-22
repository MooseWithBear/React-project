import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <div>
      
      <div>Category</div>
      <MyStyledComponent></MyStyledComponent>
    </div>
  )
}

export default Category


const MyStyledComponent = styled.div`
  color: red;
  font-size: 18px;
`;