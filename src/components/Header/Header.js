import style from './style.module.css';

const Header = ({title, desc}) => {
    return (
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                { title ? <h1>{ title }</h1> : null }
                { desc ? <p>{ desc }</p> : null }
            </div>
        </header>
    );
}

export default Header;