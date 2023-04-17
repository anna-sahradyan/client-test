import React from 'react';
import {Container, Wrapper, RightWrapper, H, Title, Button, TableContainer} from "./tableStyled";
import {Paper} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import Pagination from "./Pagination";
import TablePage from "./table/TablePage";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Total = () => {
    const query = useQuery();
    const page = query.get("page") || 1;
    return (
        <>

            <Container>
                <Title>
                    <H>Total Contacts</H>

                    <Link to={"/auth"}><Button>Add +</Button></Link>
                </Title>
                <Wrapper>
                    <TableContainer>
                    <TablePage/>
                        <RightWrapper>
                            <Paper elevation={6}>
                                <Pagination page={page}/>
                            </Paper>
                        </RightWrapper>

                    </TableContainer>

                </Wrapper>

            </Container>

        </>
    );
};

export default Total;