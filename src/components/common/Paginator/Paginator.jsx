import Button from '../Button/Button'
import styled from 'styled-components'

const Paginator = ({pagesCount, currentPage, changePage}) => {
    const styledSpan = styled.span`
      margin: 0 3px;
      cursor: pointer;
      .current {
        font-weight: 700;
      }
    `

    let pages = [1, '...']

    if (currentPage <= 3) pages.pop()

    if (currentPage < 5) pages.push(2, 3, 4)

    if (currentPage > pagesCount - 5) pages.push(pagesCount - 3, pagesCount - 2, pagesCount - 1)

    if (currentPage >= 5 && currentPage <= pagesCount - 5) {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
            pages.push(i)
        }
    }

    if (currentPage < pagesCount - 2) pages.push('...')
    pages.push(pagesCount)

    return (
        <div>
            <Button onClick={() => changePage(currentPage - 1)} text={'<'}/>
            {pages.map(item =>
                <styledSpan
                    className={currentPage === item && 'current'}
                    onClick={() => changePage(item)}
                >
                    {item}
                </styledSpan>)}
            <Button onClick={() => changePage(currentPage + 1)} text={'>'}/>
        </div>
    )
}

export default Paginator