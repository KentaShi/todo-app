import React from "react";
import CardContent from "./CardContent";

const Content = ({ listTodos, handleRemove, handleChangeStatus }) => {
    const comingList = listTodos.filter((item) => item.status === "coming");
    const doingList = listTodos.filter((item) => item.status === "doing");
    const doneList = listTodos.filter((item) => item.status === "done");

    return (
        <div className='h-[100%]'>
            <div className='grid grid-rows-3 grid-flow-col bg-teal-300 h-auto'>
                <CardContent
                    status='coming'
                    listTodos={comingList}
                    handleRemove={handleRemove}
                    handleChangeStatus={handleChangeStatus}
                />
                <CardContent
                    status='doing'
                    listTodos={doingList}
                    handleRemove={handleRemove}
                    handleChangeStatus={handleChangeStatus}
                />
                <CardContent
                    status='done'
                    listTodos={doneList}
                    handleRemove={handleRemove}
                    handleChangeStatus={handleChangeStatus}
                />
            </div>
        </div>
    );
};

export default Content;
