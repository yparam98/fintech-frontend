import React from 'react'

export const Header = () => {
    let Data = JSON.parse(localStorage.getItem('Data'))
    return (
        <h2>
            Welcome {Data.firstName}
        </h2>
    )
}
