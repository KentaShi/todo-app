import React from "react";

import arrowIcon from "../assets/arrow-64.png";

const Item = ({ id, name, status, handleRemove, handleChangeStatus }) => {
    const handleClickChangeStatus = (e) => {
        e.preventDefault();
        handleChangeStatus(id);
    };

    const handleClickRemove = (e) => {
        e.preventDefault();
        handleRemove(id);
    };

    return (
        <div className='flex my-4 items-center bg-white p-3 rounded'>
            <p
                className={`w-full ${
                    status === "done"
                        ? "line-through text-green-600"
                        : "text-gray-900"
                }`}
            >
                {name}
            </p>
            {status !== "done" && (
                <img
                    onClick={handleClickChangeStatus}
                    className='flex-shrink-0 mr-1 cursor-pointer'
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
