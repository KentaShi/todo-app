import React, { useState } from "react";

import arrowIcon from "../assets/arrow-64.png";
import editIcon from "../assets/edit.png";
import saveIcon from "../assets/save.png";

const Item = ({ id, name, status, handleRemove, handleChangeStatus }) => {
    const [isEditing, setIsEditing] = useState(false);
    const handleClickChangeStatus = (e) => {
        e.preventDefault();
        handleChangeStatus(id);
    };

    const handleClickRemove = (e) => {
        e.preventDefault();
        handleRemove(id);
    };

    const editingItem = isEditing ? (
        <>
            <input
                type='text'
                value={name}
                className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900'
            />
            <img
                onClick={() => setIsEditing(false)}
                className='flex-shrink-0 mr-2 cursor-pointer'
                src={saveIcon}
                alt='save todo'
                width={30}
                height={30}
            />
        </>
    ) : (
        <>
            <p
                className={`w-full ${
                    status === "done"
                        ? "line-through text-green-600"
                        : "text-gray-900"
                }`}
            >
                {name}
            </p>
            <img
                onClick={() => setIsEditing(true)}
                className='flex-shrink-0 mr-2 cursor-pointer'
                src={editIcon}
                alt='edit todo'
                width={30}
                height={30}
            />
        </>
    );

    return (
        <div className='flex my-4 items-center bg-white p-3 rounded'>
            {editingItem}
            {status !== "done" && (
                <img
                    onClick={handleClickChangeStatus}
                    className='flex-shrink-0 mr-2 cursor-pointer'
                    src={arrowIcon}
                    alt='move to next status'
                    width={32}
                    height={32}
                />
            )}

            <button
                onClick={handleClickRemove}
                className='flex-shrink-0 px-2 py-1 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500'
            >
                Remove
            </button>
        </div>
    );
};

export default Item;
