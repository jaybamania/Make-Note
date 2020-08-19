import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Makenote.css';
// import DeleteOutlineIcon from '@material-ui/icons/DeleteOutlineIcon';
const Note = (props) => {
  const deleteNote = () =>{
    props.deleteItem(props.id);
  }

  return <>
        <div className="col-auto col-sm-auto col-md-auto col-lg-auto  shadow mx-2  my-4">
            <h1>{props.title}</h1><hr/>
            <p>{props.content}</p>
            {/* <DeleteOutlineIcon /> */}
            <button className="btn float-right rounded-circle  button" onClick={deleteNote}><h3>x</h3></button>
        </div>
  </>;
};

export default Note;
