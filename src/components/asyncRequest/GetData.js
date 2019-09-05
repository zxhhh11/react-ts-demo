import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { validate } from '@babel/types';

const GetData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoad] = useState(false);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/planStatusList')
    const [isError, setIsError] = useState(false)
   
    useEffect(() => {
        let isCancelled = false;

        //方法一
        // axios.get(url)
        // .then(res=>{
        //     if(!isCancelled){
        //         setData(res.data)
        //         console.log(res)
        //     }
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
        //方法二
        getDataFunc(url)
        .then(res=>{
                 if(!isCancelled){
                setData(res.data)
                console.log(res)
            }
        })
        .catch(err=>{
            console.log(err)
        })
        // async function getData() {
        //     //给获取数据时页面设置loading
        //     setIsError(false)
        //     setLoad(true)
        //     // //错误处理机制
        //     try {
        //         if (!isCancelled) {
        //             const result =[{
        //                 "key": "2",
        //                 "name": "Joe Black",
        //                 "age": 42,
        //                 "address": "London No. 1 Lake Park",
        //                 "description": "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.",
        //                 "type": "YES",
        //                 "method": "NCB",
        //                 "value": 1
        //               }]
        //             //  await axios.get(url);
        //             setData(result)
        //         }

        //     } catch (error) {
        //         setIsError(true)
        //     }

        //     setLoad(false)
        // }
        // // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function
        // if (!isCancelled) {
        //     getData()
        // }
        return () => { isCancelled = true }
    }, [url])
    function changeIpt(event) {
        setQuery(event.target.value)
    }
    return (<div>
        <input type="text" value={query} onChange={changeIpt}></input>
        {/* planStatusList */}
        <button type="button" onClick={() => { query == 'a' ? setUrl('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/getData') : setUrl('https://www.easy-mock.com/mock/5d00b80272591921753cdf78/reactDemo01/') }}>转换</button>
        {isError && <div>捕捉到错误</div>}
        {
            loading ? <div>loading...</div>
                : <div>
                    <ul>
                        {
                            data.map((val, index) => {
                                return <li key={index}>{val.name}</li>

                            })
                        }
                    </ul>
                </div>
        }

    </div>);
}

export default GetData;

async function getDataFunc(url){
    let aJson =await  axios.get(url)
    return aJson
}


