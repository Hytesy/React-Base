import React from "react"
class Button extends React.Component {
    render(){
        return(
            <div>
                <h1>Meu botão</h1>
                <MyButton label="Baixar CV"/>
            </div>
        )
    }
}

const MyButton = props => {
    const myLabel = props.label
    const spamAlert = () => {
        alert(`o label do botão é "${myLabel}"`)
    }
    return (
        <button onClick={spamAlert}>{myLabel}</button>
    )
}

export default Button