import React,{useState} from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
// import AddIcon from '@material-ui/icons/Add';
import './Makenote.css';

const MakeNote = (props) => {

    const[expand,setExpand] = useState(false);

    const[note,setNote] = useState({
        title:"",
        content:"",
    });

    const InputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;

        const{name,value} = event.target;
        setNote((prevData) => {
            return{
                ...prevData,
                [name]:value,
            };
        });
        console.log(note);
    }

    const addEvent = () =>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        });
    }

    const expandItem = () => {
        setExpand(true);
    }

    const contractItem = () => {
        setExpand(false);
    }

    return <>
        
        <div className="col-md-6 mx-auto offset-md-3 mt-3">
            <form className="shadow pb-2" >
                
                <div className="form-group mt-3 mb-1 "  >
                {expand ? 
                    <input type="text" name="title" value={note.title} className="focus" onChange={InputEvent}   autoComplete="off" style={{border: 'none'}} id="title" placeholder="Add Title"/>
                    : null }
                </div> 
                <div className="form-group mt-0  ">
                    <textarea name="content" value={note.content} className="focus" onChange={InputEvent} onClick={expandItem} onDoubleClick={contractItem} id="makeMesg" style={{border: 'none'}} rows="3" placeholder="Write Description"></textarea>
                </div>
                {expand? 
                <button onClick={addEvent} type="button" className="btn button mr-2"  ><h1>+</h1></button>
                // <Button  className="btn btn-warning float-right button" style={{borderRadius: '50%', marginBottom: '0px'}}><AddIcon /></Button>
                : null}
                
                </form>
            </div>
        
    </>;
};
export default MakeNote;