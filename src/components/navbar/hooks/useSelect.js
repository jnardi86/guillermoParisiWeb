import React from 'react'

export const useSelect = () => {


    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'none',
            borderColor: 'transparent',
            borderRadius: '4px',
            padding: '1px',
            boxShadow: 'none',
            '&:hover': {
                borderColor: 'blue',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'blue' : '#A1C9D9',
            color: state.isSelected ? 'white' : 'black',
            '&:hover': {
                backgroundColor: 'lightblue',
            },
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: '4px',
            marginTop: '0',
            backgroundColor: '#A1C9D9'
        }),
    };

    return {
        customStyles
    }


}






