import React from 'react';

function Upload (props) {
    return (
        <div>
            <form action='http://localhost:3000/' method='POST' encType='multipart/form-data'>
                {/* <input type='file' onChange={e=>{
                    e.persist();
                    // console.log(e.target.files);
                    props.addToState(e.target.files['0']);
                }}/>
                <input type='submit' onClick={(e)=> {
                    e.persist();
                    e.preventDefault();
                    props.remove();
                    }} value='Remove Last Picture'/>
                <input type='text' placeholder='Database URL' onChange={e=>{
                    props.input(e.target.value)
                }}/>
                <input type='submit' onClick={e=>{
                    e.preventDefault();
                    props.submit();
                }}/> */}
                <input name='image' type='file'></input>
                <input type='submit'></input>    
            </form>
        </div>
    )
}

export default Upload;