interface Ialert {
    alertType: string
}

// can pass more KV's to get alertMessage, alertClassName and more to reduce code and improve readability
const MyAlerts = ({alertType}: Ialert) => {
    return (<>
        {alertType === "success" && <div className="alert alert-success">
            <strong>Success!</strong> Indicates a successful or positive action.
        </div>}

        {alertType === "info" && <div className="alert alert-info">
            <strong>Info!</strong> Indicates a neutral informative change or action.
        </div>}

        {alertType === "warning" && <div className="alert alert-warning">
            <strong>Warning!</strong> Indicates a warning that might need attention.
        </div>}

        {alertType === "danger" && <div className="alert alert-danger">
            <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>}
    </>)
}

export default MyAlerts;