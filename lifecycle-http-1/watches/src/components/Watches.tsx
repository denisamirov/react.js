import { Watch } from "./Watch"

export const Watches = (props, onDeleteWatch) => {
    const clock = props.props
    console.log(typeof(props.onDeleteWatch))
  return (
    <div className="field">
        <div>{clock.map((i, index:number) => <Watch 
            key={index} 
            name={i.stateName} 
            zone={i.stateZone}
            index = {index} 
            onDelete={props.onDeleteWatch}
            />)}
        </div>
    </div>
  )
}
