import React from 'react';
// 该函数为自定义hooks函数
import UseWinSize from '../components/windowSize/UseWinSize';

import UseCallback from '../components/windowSize/UseCallback';

const GetWindowSize = () => {
    const size = UseWinSize();
    return ( <div>
       <div>
           <h4> 页面size:{size.width}x{size.height}</h4>
       </div>
       <div>
           <h4>
               UseCallback 用于父子组件中
               <UseCallback></UseCallback>
           </h4>
       </div>
    </div> );
}
 
export default GetWindowSize;