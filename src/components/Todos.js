import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getAllTOdos } from './../services/actions/ToDosActions';

const Todos = () => {
        const dispatch=useDispatch();
    const {isLoading,error,toDos}=useSelector(state=>state);
    useEffect(()=>{
        dispatch(getAllTOdos())
    },[])
    return (
        <div>
            <h2>to dos</h2>
            {isLoading&& <h3>
                Loading....
                </h3>}
                
            {error&& <h3>
                {error.message}
                </h3>}
                <section>
                    {toDos&& toDos.map(todo=>{
                    return <article key={todo.id}>
                        <h4>{todo.id}</h4>
                        <h4>{todo.title}</h4>
                    </article>
                    })}
                </section>

        </div>
    );
};

export default Todos;