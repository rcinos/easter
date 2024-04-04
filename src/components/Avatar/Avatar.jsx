import React from "react";

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAvatarsVisible: false
        }
        this.handleShowAvatars = this.handleShowAvatars.bind(this)
    }

    handleShowAvatars() {
        this.setState((prev) => {
            return {
                isAvatarsVisible: !prev.isAvatarsVisible
            }
        })
    }
    render() {
        return (
            <>
                <button onClick={this.handleShowAvatars}>Click!!!</button>
                {this.state.isAvatarsVisible ?
                    (<div>
                        <div>{this.props.userName}</div>
                        <img alt="old woman" src={this.props.imageSrc}></img>
                    </div>)
                    :
                    <div>Here should be list of avatars</div>}
            </>

        )
    }
}

export default Avatar;