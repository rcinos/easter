class avatar extends React.Component {
constructor() {
    this.state={
      isAvatarsVisible: false,
    }
}
    handleshowavatars() {
    this.state.isAvatarsVisible = !this.state.isAvatarsVisible;
}
    return (
          <button onClick={handleshowavatars()}>Click!!!</button>
           {if(isAvatarsVisible) {
               <div>
                  <div>{this.props.userName}</div>
                   <img src={props.imageSrc}></img>
               </div>
           } else {
               <div>Here should be list of avatars</div>
           }
           }
           )
}

export  default avatar;