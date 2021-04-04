import {Component} from "react";

class Status extends Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    onStatusChange = (e) => {
        this.setState({status: e.target.value}) ;
    }

    updateStatus = (e) => {
        this.props.updateStatus(e.target.value);
        this.toggleEditMode();
    }

    toggleEditMode = () => {
        this.state.editMode
        ?
            this.setState({editMode: false})
        :
            this.setState({editMode: true})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                    ?
                        <input
                            type="text"
                            autoFocus={true}
                            value={this.props.status}
                            onBlur={this.updateStatus}
                            onChange={this.onStatusChange}
                        />
                    :
                        <p onDoubleClick={this.toggleEditMode}>
                            {this.state.status}
                        </p>
                }
            </div>
        )
    }
}

export default Status;