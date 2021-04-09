
import PageHeader from "../PageHeader/PageHeader";

const layout =(props)=> {
    
    console.log("layoutprops",props)
    
    return(
        <div>
            <PageHeader pages={props.pages}/>
            {props.children}
        </div>
        )
    
    
}

export default layout;