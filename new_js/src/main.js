import React, { useEffect, useRef, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import Layout from './component/layout/layout';
import Form from './form';
import ListComp from './listComp';


import './main.scss';







const App = (props) => {



    const [list, setList] = useState([])
    const inputRef = useRef(null);

    useEffect(() => {
        getLocalItems()
    }, []);

    useEffect(() => {
        setLocalItems()
    }, [list]);






    const setLocalItems = () => {
        localStorage.setItem('list', JSON.stringify(list));
    }


    const getLocalItems = () => {
        const listAsText = localStorage.getItem('list')
        if (listAsText) setList(JSON.parse(listAsText))

    }





    const removeHendler = (title, event) => {
        event.preventDefault();

        const newList = list.filter((item) => {
            return item.title !== title
        });
        setList(newList);
    }

    const coppyVald = (newItem) => {
        const addedItem = list.filter((item) => {
            return item.title === newItem
        })

        return addedItem.length > 0;
    }


    const AddHendler = (event) => {
        event.preventDefault();
        const newItem = { title: inputRef.current.value, isDone: false }

        if (coppyVald(newItem.title) > 0) {
            alert('Problem')
        } else {
            setList([...list, newItem])
            inputRef.current.value = '';
        }
    }


    const addIsDone = (title) => {
        const newList = list.map(item => {
            if (item.title === title) item.isDone = !item.isDone;
            return item
        })
        setList(newList);
    }

    const countDone = () => {
        let doneItemsCounter = list.filter(item => item.isDone).length;
        return doneItemsCounter;
    }






    return (
        <Layout allItemCount={list.length} countDone={countDone}>

            <ul className="list-group list-group-flush mb-5" id='list-container'>
                {list.map((item, index) => {
                    return <ListComp
                        addIsDone={addIsDone}
                        removeHandler={removeHendler}
                        data={item}
                        key={index} />
                })}
            </ul>

            {!list.length? <div className="text-center my-5 text-muted">You dont have any position</div>:""}
            <Form addHandler={AddHendler} inputRef={inputRef} />

            <button className="btn btn-danger" type="submit" id="delete_all_item">Delet List</button>
        </Layout>)

}

ReactDOM.render(<App />, roott);


































