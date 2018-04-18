import React from 'react';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: '#ffffff',
    handleFillColor: '#ffffff',
    rippleColor: "#ffffff",     
  },
});

class Budget extends React.Component{ 
  render() { 
    const style ={
        width: '50%',
        textAlign: 'center',
        display:'inline-block',
    }   
    return (
        <div >
          <MuiThemeProvider muiTheme={muiTheme}>
                <Slider
                style={style}
                min={0}
                max={200}
                step={5}
                value={this.props.budgetMax}
                onChange={this.props.handleSlider}
                onDragStop={this.props.post}
                />
                <p style={{color: '#bdbdbd'}}>
                <span><h4>{'Your Budget is $'+ this.props.budgetMax}</h4></span>
                </p>
          </MuiThemeProvider>
        </div>
    );
  }
}

export default Budget;