import React from 'react';
// 该函数为自定义hooks函数
import UseWinSize from '../components/windowSize/UseWinSize';

import UseCallback from '../components/windowSize/UseCallback';
import '../css/resizeWin.css';
const GetWindowSize = () => {
    const size = UseWinSize();
    return ( <div className="resize-window">
       <div>
           <h5> 页面size:{size.width}x{size.height}</h5>
       </div>
       <div>
           <h5>
               UseCallback 用于父子组件中
               </h5>
               <UseCallback></UseCallback>
        
       </div>
    </div> );
}
 
export default GetWindowSize;