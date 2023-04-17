import React, {useEffect} from 'react';
import { Pagination } from '@mui/material';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {PaginationItem} from '@mui/material';
import {getUsers} from "../actions/users.js";

const Paginate = ({page}) => {
    const {numberOfPages} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    //?getPosts
    useEffect(() => {
        if (page) {
            dispatch(getUsers(page));
        }
    }, [dispatch, page]);
    return (
        <>
            <Pagination
                className={""}
                count={numberOfPages}
                page={Number(page) || 1}
                variant={"outlined"}
                color={"primary"}
                renderItem={(item) => (
                    <PaginationItem {...item} component={Link} to={`/user?page=${item.page}`}
                    />
                )}
            />
        </>
    );
};

export default Paginate;