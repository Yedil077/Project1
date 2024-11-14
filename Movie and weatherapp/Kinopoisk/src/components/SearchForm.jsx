import PropTypes from "prop-types"
import css from "../styles/SearchInput.module.css"

export const Input = ({ onSubmit, onChange }) => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    className={css.input}
                    type='text'
                    autoComplete="off"
                    name="movie"
                    onChange={(e) => onChange(e.target.value)}
                />
                <button className={css.btn} type='submit'>Search</button>
            </form>
        </>
    )
}

Input.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func
}
