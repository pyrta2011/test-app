import style from './style.module.css';

const Layout = ({title, desc, urlBg, colorBg}) => {
    const urlBackground ={
        backgroundImage: `url(${urlBg})`,
        backgroundPosition: 'center center',
    };
    const colorBackground = {
        backgroundColor: colorBg
    };
    return (
        <section className={ style.root } style={urlBg ? urlBackground : colorBackground}>
            <div className={ style.wrapper }>
                <article>
                    <div className={ style.title }>
                        { title ? <h3>{ title }</h3> : null }
                        <span className={ style.separator }></span>
                    </div>
                    <div className={ `${style.desc} ${style.full}` } >
                        { desc ? <p>{ desc }</p> : null }
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Layout;