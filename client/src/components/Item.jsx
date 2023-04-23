import React, { useRef, useState } from "react";

import arrowIcon from "../assets/arrow.png";
import editIcon from "../assets/edit.png";
import saveIcon from "../assets/save.png";
import closeIcon from "../assets/close.png";
import deleteIcon from "../assets/delete.png";

const Item = ({
    id,
    name,
    status,
    handleRemove,
    handleChangeStatus,
    handleChangeName,
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currName, setCurrName] = useState(name);

    const scaleOnHover = "hover:scale-125 ease-in duration-300";

    const nameRef = useRef();
    const handleClickChangeStatus = (e) => {
        e.preventDefault();
        handleChangeStatus(id);
    };

    const handleClickChangeName = (e) => {
        e.preventDefault();

        handleChangeName(id, currName);
        setIsEditing(false);
    };

    const handleClickRemove = (e) => {
        e.preventDefault();
        handleRemove(id);
    };

    const editingItem = isEditing ? (
        <>
            <input
                type='text'
                value={currName}
                onChange={(e) => setCurrName(e.target.value)}
                className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-900'
            />
            <img
                className={`flex-shrink-0 mr-2 cursor-pointer ${scaleOnHover}`}
                src={saveIcon}
                alt='save todo'
                width={20}
                height={20}
                onClick={handleClickChangeName}
            />

            <img
                onClick={() => setIsEditing(false)}
                className={`flex-shrink-0 ml-2 mr-2 cursor-pointer ${scaleOnHover}`}
                src={closeIcon}
                alt='cancel'
                width={20}
                height={20}
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
                className={`flex-shrink-0 mr-2 cursor-pointer ${scaleOnHover}`}
                src={editIcon}
                alt='edit todo'
                width={20}
                height={20}
            />
            {status !== "done" && (
                <img
                    onClick={handleClickChangeStatus}
                    className={`flex-shrink-0 mr-2 cursor-pointer ${scaleOnHover}`}
                    src={arrowIcon}
                    alt='move to next status'
                    width={20}
                    height={20}
                />
            )}

            <img
                onClick={handleClickRemove}
                className={`flex-shrink-0 cursor-pointer ${scaleOnHover}`}
                src={deleteIcon}
                alt='delete toto'
                width={20}
                height={20}
            />
        </>
    );

    return (
        <div className='flex my-4 items-center bg-white p-3 rounded'>
            {editingItem}
        </div>
    );
};

export default Item;
