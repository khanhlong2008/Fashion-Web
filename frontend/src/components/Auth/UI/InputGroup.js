import "./InputGroup.css";
const InputGroup=(props)=>{
    return(
        <div className="input-group">
            <input type={props.htmlType} value={props.value} onChange={props.onChange} placeholder={props.label}/>
        </div>
    )
}
export default InputGroup;