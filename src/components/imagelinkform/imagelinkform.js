import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div className='ma4 mt0'>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try.'}
			</p>
			<div className='center w-100'>
			<div className='center form pa4 br3 shadow-5 w-100 divblock'>
				<input className='f4 pa2 w-100 center' type='text' onChange={onInputChange} />
				<button className='center buttonsize grow link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
			</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;