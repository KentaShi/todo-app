import React, { useEffect, useState } from "react";
import Item from "./Item";

const BASE_URL = "http://localhost:5000/api";

const CardContent = ({
    listTodos,
    status,
    handleRemove,
    handleChangeStatus,
}) => {
    return (
        <div className='row-start-1 row-end-4 bg-teal-100 p-4 rounded m-4 text-teal-950'>
            <div className='flex bg-teal-700 items-center justify-center rounded py-2'>
                <p className='uppercase text-white font-semibold'>{status}</p>
            </div>
            {listTodos.map((item, index) => (
                <Item
                    key={index}
                    id={item._id}
                    name={item.name}
                    status={item.status}
                    handleRemove={handleRemove}
                    handleChangeStatus={handleChangeStatus}
                />
            ))}
        </div>
    );
};

export default CardContent;
