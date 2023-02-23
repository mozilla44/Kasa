import { useState} from "react"


function Collapse ({title , description}){
    
    const [open, setOpen] = useState(false)
    return (
        <div className="collapse">
            <div className="collapse-title" onClick={()=>setOpen(!open)}>{title}<i className="fas fa-chevron-down chevron"></i></div>
            {open && <div className="content"><div className="content-text">{description}</div></div>}
        </div>
    )
    
}

export default Collapse