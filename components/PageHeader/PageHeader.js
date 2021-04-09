
import Link from "next/link";



const pageHeader = (props)=>{
    
    
    
    return(
        <nav>
            {props.pages.map((page, index) => (
                <Link href={`/${page.slug}`}>
                    {page.title}
                </Link>

            ))}
        

        </nav>
        
    );
    
    
}

export default pageHeader;