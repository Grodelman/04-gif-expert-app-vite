import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( { target } ) => {
        setInputValue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
        // setCategories( cats => [ inputValue, ...cats, ] );
        onNewCategory( inputValue.trim() );
        setInputValue('');

    }

    return (
        <form onSubmit={ onSubmit }>
            {/* <p> { inputValue } </p> */}
            <input 
                type="text"
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


// AddCategory.propTypes = {
//     setCategories: PropTypes.func.isRequired
// }
