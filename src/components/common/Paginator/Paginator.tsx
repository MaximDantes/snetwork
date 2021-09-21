import Button from '../Button/Button'
import styled from 'styled-components'
import React from 'react'

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  span {
    line-height: 40px;
    margin: 0 3px;
    cursor: pointer;
  }

  button {
    margin: 3px;
    width: 40px;
  }
  
  .current {
    font-weight: 700;
  }
`

type TProps = {
    pagesCount: number
    currentPage: number
    changePage(page: number): void
}

const Paginator: React.FC<TProps> = ({currentPage, pagesCount, changePage}) => {

    const minPage = currentPage % 10 === 0 ? currentPage - 9 : currentPage - currentPage % 10 + 1

    const pages: number[] = []

    for (let i = minPage; i < minPage + 10 && i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <StyledDiv>
            <Button onClick={() => changePage(1)} text={'<<'}/>
            <Button onClick={() => changePage(currentPage - 1)} text={'<'}/>
            {
                pages.map((item) =>
                    <span key={item}
                          className={currentPage === item ? 'current' : undefined}
                          onClick={() => changePage(item)}>
                        {item}
                    </span>)
            }
            <Button onClick={() => changePage(currentPage + 1)} text={'>'}/>
            <Button onClick={() => changePage(pagesCount)} text={'>>'}/>
        </StyledDiv>
    )
}

export default Paginator