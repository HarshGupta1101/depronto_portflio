import React, { useState } from 'react'
import mock_data from "../static/data.json"

const Table = () => {

    const [data, setdata] = useState(mock_data)
    const [order, setorder] = useState("ASC")

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) => (
                a[col].toString().toLowerCase() > b[col].toString().toLowerCase() ? 1 : -1
            ))
            setdata(sorted)
            setorder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) => (
                a[col].toString().toLowerCase() < b[col].toString().toLowerCase() ? 1 : -1
            ))
            setdata(sorted)
            setorder("ASC")
        }
    }

    return (
        <div style={{ height: "40rem", padding: "8rem" }}>
            <p className="h1 fw-bold display-1 mb-5 mt-5">Projects</p>
            <table className="table table-striped border">
                <thead>
                    <tr>
                        <th onClick={() => (sorting("Id"))} style={{ cursor: "pointer" }} scope="col">
                            No.
                        </th>
                        <th onClick={() => (sorting("project"))} style={{ cursor: "pointer" }} scope="col">
                            FN
                            <svg style={{ width: "2rem", height: "2rem" }}>
                                <use href="/icons/symbol-defs.svg#icon-sort"></use>
                            </svg>
                        </th>
                        <th onClick={() => (sorting("objective"))} style={{ cursor: "pointer" }} scope="col">
                            Aim
                            <svg style={{ width: "2rem", height: "2rem" }}>
                                <use href="/icons/symbol-defs.svg#icon-sort"></use>
                            </svg>
                        </th>
                        <th onClick={() => (sorting("tech stack"))} style={{ cursor: "pointer" }} scope="col">
                            Tech
                            <svg style={{ width: "2rem", height: "2rem" }}>
                                <use href="/icons/symbol-defs.svg#icon-sort"></use>
                            </svg>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((t) => (
                        <tr>
                            <th scope="row">{t.id}</th>
                            <td>{t.project}</td>
                            <td> {t.objective} </td>
                            <td>{t['tech stack']}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}


export default Table