import "./HeroImgStyles.css";

function HeroImg(props){
    return (<>
    <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />
    </div>

    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a> 
    </div>
    </>)
}

// function HeroImg() {
//     return(<>
//     <div className="hero">
//     <img alt="HerpImg" src="https://wallpapercave.com/wp/wp9549450.jpg" height="auto" width="auto"/>
//     </div>
//     </>)
// }


export default HeroImg;