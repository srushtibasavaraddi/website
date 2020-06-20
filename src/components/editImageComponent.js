import React from 'react';
import {startRemoveImg} from '../actions/gallery';
import {connect} from 'react-redux';

const ImageComponent = (props)=>(
    
    <div class="image-item">
        <img src={props.url}/>
        <p>{props.description}</p>
        {props.isAuth?<button class="btn btn-danger btn-md" onClick={()=>{
            props.dispatch(startRemoveImg({id:props.id,imgName:props.imgName}))
        }}>Delete</button>:(<div/>)}
        
    </div>
);

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth 
})

export default connect(mapStateToProps)(ImageComponent) ;
