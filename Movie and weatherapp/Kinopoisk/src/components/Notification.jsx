import PropTypes from "prop-types"

export const Notification = ({notification}) => {
    return (
        <p
            style={{
                color: 'red',
            }}
        >
            {notification}
        </p>
    )
}

Notification.propTypes = {
    notification: PropTypes.string
}
