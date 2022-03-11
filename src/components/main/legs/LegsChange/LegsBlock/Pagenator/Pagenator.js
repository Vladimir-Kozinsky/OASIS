import s from './Pagenator.module.css'
import classNames from 'classnames';
import React from 'react';

class Pagenator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    pages() {

        let pagesArr = []
        for (let index = 0; index < this.props.totalPages; index++) {
            pagesArr.push(index + 1)
        }
        return pagesArr.map((p) => {
            return (
                <span key={p} className={classNames({
                    [s.selectedPage]: +this.props.selectedPage === p
                }, s.pageNumber)} onClick={() => {
                    this.props.pageRequest(p)
                }} >{p}</span>
            )
        })
    }

    render() {
        return (
            <div className={s.pagenator} >
                <div className={s.pageWrapper}>
                    <div className={s.button_wrapper}>
                        <button className={classNames(s.button, s.prev)} onClick={() => {
                            this.props.pageRequest(+this.props.selectedPage - 1)
                        }} disabled={+this.props.selectedPage === 1}>Prev</button>
                    </div>

                    {this.pages()}
                    <div className={s.button_wrapper}>
                        <button className={classNames(s.button, s.next)} onClick={() => {
                            this.props.pageRequest(+this.props.selectedPage + 1)
                        }} disabled={+this.props.selectedPage === this.props.totalPages}>Next</button>
                    </div>
                </div>
            </div>
        )
    }


}

export default Pagenator