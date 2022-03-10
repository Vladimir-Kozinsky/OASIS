import s from './Pagenator.module.css'
import classNames from 'classnames';

const Pagenator = ({ legs, onPageChanged, setSelectedPage, selectedPage, lastPage }) => {

    const numberOfPages = (legs.length % 10) !== 0
        ? Math.floor(legs.length / 10) + 1
        : Math.floor(legs.length / 10)

        

    const pages = () => {

        let pagesArr = []
        for (let index = 0; index < lastPage; index++) {
            pagesArr.push(index + 1)
        }
        return pagesArr.map((p) => {
            return (
                <span key={p} className={classNames({
                    [s.selectedPage]: selectedPage === p
                }, s.pageNumber)} onClick={() => onPageChanged(p)} >{p}</span>
            )
        })
    }


    return (
        <div className={s.pagenator}>
            <div className={s.pageWrapper}>
                <button onClick={() => setSelectedPage(selectedPage - 1)} disabled={selectedPage === 1}>Prev</button>
                {pages()}
                <button onClick={() => setSelectedPage(selectedPage + 1)} disabled={selectedPage === lastPage}>Next</button>
            </div>

        </div>
    )
}

export default Pagenator