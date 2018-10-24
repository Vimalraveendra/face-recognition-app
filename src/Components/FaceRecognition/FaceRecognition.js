import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl,box}) =>{

	const faces = box.map((box,index) => <div key={index}className='bounding-box' 
		  style={{left:box.leftCol,top:box.topRow, right:box.rightCol,bottom:box.bottomRow}}>
	     </div>
	)
	return(
         <div className='center ma'>
          <div className='absolute mt2'>
         <img id='inputImage' alt='' src={imageUrl}
	       width='500px' height='auto'/>
	       {faces}
	       
	       </div>
		 </div>
				
         	
		)
};

export default FaceRecognition;