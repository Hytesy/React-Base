import React from "react";

class Text extends React.Component {
  render() {
    return (
      <div>
        <h1>Meu texto</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et quas omnis modi voluptate explicabo corrupti aliquam quibusdam non, sapiente nisi laboriosam impedit commodi praesentium, excepturi enim id ratione animi?</p>
        <h1>Mesmo texto, editado</h1>
        <MyComponent textColor="hotpink" fontState="uppercase" fontSize="20px" />
      </div>
    );
  }
}

const MyComponent = (props) => {
  const estiloTexto = {
    color: props.textColor,
    textTransform: props.fontState,
    fontSize: props.fontSize
  };

  return (
    <div>
      <p style={estiloTexto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum et quas omnis modi voluptate explicabo corrupti aliquam quibusdam non, sapiente nisi laboriosam impedit commodi praesentium, excepturi enim id ratione animi?</p>
    </div>
  );
};

export default Text;
