// 原文链接 https://juejin.im/post/5d5a3a015188255d827cde4b?utm_source=gold_browser_extension#heading-0

import React, { useState } from 'react';
import Gif from '../components/drags/Gif';

import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
// sortableContainer 是所有可排序元素的容器；
const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>)
// sortableElement 是每个可渲染元素的容器
const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif}></Gif>)

const DragPic = () => {
    const [gifs, useGifs] = useState(['https://media.giphy.com/media/3ohhwoWSCtJzznXbuo/giphy.gif', 'https://media.giphy.com/media/l46CbZ7KWEhN1oci4/giphy.gif', 'https://media.giphy.com/media/3ohzgD1wRxpvpkDCSI/giphy.gif', 'https://media.giphy.com/media/xT1XGYy9NPhWRPp4pq/giphy.gif',])
    const [newGifs, setNewGifs] = useState([
        'https://media.giphy.com/media/xiOgHgY2ceKhm46cAj/giphy.gif',
        'https://media.giphy.com/media/3oKIPuMqYfRsyJTWfu/giphy.gif',
        'https://media.giphy.com/media/4ZgLPakqTajjVFOVqw/giphy.gif',
        'https://media.giphy.com/media/3o7btXIelzs8nBnznG/giphy.gif',
    ]);

    const onSortEnd = ({ oldIndex, newIndex, collection }) => {
        switch (collection) {
            case 'gifs':
                setNewGifs(arrayMove(gifs, oldIndex, newIndex))
                break;
            case 'newGifs':
                setNewGifs(arrayMove(newGifs, oldIndex, newIndex))
                break;
            default:
                break;
        }
    }

    return (<div className="box">
        <h2>Drag those GIFs around</h2>
        <h2>Set 1</h2>
        {gifs.map((gif, i) => <Gif collection="gifs" key={gif} gif={gif}></Gif>)}

        <h2>Set 2</h2>
        <SortableGifsContainer axis="x" onSortEnd={onSortEnd}>
            {newGifs.map((gif, i) => (
                <SortableGif
                    index={i}
                    key={gif}
                    gif={gif}
                    collection="newGifs"

                />
            ))}

        </SortableGifsContainer>
    </div>);
}

export default DragPic;