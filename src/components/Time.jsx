
    let Time = () => {
        let now=new Date();

        return(
            <p className='todo-container'>Now time is : {now.toLocaleDateString()}-{now.toLocaleTimeString()} </p>
        ) 
    };


export  default Time;