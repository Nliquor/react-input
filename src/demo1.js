import React,{useState} from 'react';

function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
			<InputNumber value={value} onChange={e=>{}}/>
			<InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}
function InputNumber(){
	return (
		<div>
			<input onChange={
				(e)=>{
					this.props.onChange(e)
				}
			}/>
		</div>
	)
}
export default App;
