import React, {Component} from 'react';

import  styles from './styleTest.module.css'

export default class Test extends Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClick() {
        const wrapper = this.wrapperRef.current;
        console.log(wrapper)
        wrapper.classList.toggle("is-nav-open")
        console.log(wrapper)
    }
    render() {
        return (
            <div ref={this.wrapperRef} className={styles.wrapper}>
                <div className={styles.nav}>
                    <span
                        className={styles.nav__icon}
                        
                        onClick={() => this.handleClick()}>878787</span>
                    <div className={styles.nav__body}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Beatae ducimus est laudantium libero nam optio repellat
                        sit unde voluptatum?
                    </div>
                </div>
            </div>
        );
    }
}