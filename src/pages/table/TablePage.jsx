import React from 'react';
import {Span, STable, Input, STH, STR, TdInput, ThInput, STD, SThead, STbody} from "./tablePageStyled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useDispatch, useSelector} from "react-redux";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import {deleteUser} from "../../actions/users";
import {Link} from "react-router-dom";


const TablePage = () => {
    const {users} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    return (
        <>
            <STable>
                <SThead>
                    <STR><ThInput><Input type="checkbox"/></ThInput><STH>id <Span><ArrowDropDownIcon/></Span></STH>
                        <STH>name <Span><ArrowDropDownIcon/></Span></STH>
                        <STH>createdAt<Span><ArrowDropDownIcon/></Span></STH>
                        <STH>updatedAt <Span><ArrowDropDownIcon/></Span></STH>
                        <STH>email <Span><ArrowDropDownIcon/></Span></STH>
                        <STH>action </STH>
                    </STR>
                </SThead>
                <STbody>
                    {users?.map((item, index) => (
                        <STR key={`${item}_${index}`}><TdInput><Input type="checkbox"/></TdInput>
                            <STD>{item._id}</STD>
                            <STD>{item.name}</STD>
                            <STD>{item.createdAt.split('T')[0]}</STD>
                            <STD>{item.updatedAt.split('T')[0]}</STD>
                            <STD>{item.email}</STD>
                            <STD><Link style={{color:"red"}} to={"/auth"}><Span><BorderColorIcon/></Span></Link></STD>
                            <STD><Span onClick={() => dispatch(deleteUser(item._id))}><DeleteSweepIcon/></Span></STD>
                        </STR>
                    ))}

                </STbody>
            </STable>


        </>
    );
};


export default TablePage;
