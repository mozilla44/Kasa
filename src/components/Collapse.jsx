import { useState} from "react"


function Collapse ({title , description, extraClass}){
    
    const [open, setOpen] = useState(false)
    return (
        <div className={`collapse ${extraClass}`}>
            <div className="collapse-title" onClick={()=>setOpen(!open)}>{title}<i className={`fas fa-chevron-down fa-lg chevron  ${(open)?"open":""}`}></i></div>
            {open && <div className="collapse-content"><div className="content-text">{description}</div></div>}
        </div>
    )
    
}

export default Collapse