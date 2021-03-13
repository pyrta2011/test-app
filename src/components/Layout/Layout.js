import style from './style.module.css';

const Layout = ({title, urlBg, colorBg, children}) => {
    const urlBackground ={
        backgroundImage: `url(${urlBg})`,
        backgroundPosition: 'center center',
    };
    const colorBackground = {
        backgroundColor: colorBg
    };
    return (
        <section className={ style.root } style={{...urlBackground, ...colorBackground}}>
            <div className={ style.wrapper }>
                <article>
                    <div className={ style.title }>
                        { title ? <h3>{ title }</h3> : null }
                        <span className={ style.separator }></span>
                    </div>
                    <div className={ `${style.desc} ${style.full}` } >
                        { children ? <p>{ children }</p> : null }
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;