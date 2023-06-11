const classes = {
    div1: 'card__block',
    div2: 'card__img',
    div3: 'card__title',
    div4: 'card__desc',
    div5: 'card__button'
}

const Card = (props)=>{
    return (
        <div className={classes.div1}>
            <div className={classes.div2}><img src={props.img} alt=""/></div>
            <div className={classes.div3}><h2>{props.title}</h2></div>
            <div className={classes.div4}><p>{props.desc}</p></div>
            <div className={classes.div5}><button onClick={props.btn}>{props.nameBtn}</button></div>
        </div>
    )
}
export default Card

