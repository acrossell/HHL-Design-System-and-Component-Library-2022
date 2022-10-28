import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Import style token json data
//----------------//
import tokenData from '../../../assets/designTokens/tokensMasterTransformed.json';

// Charts JS Imports & Registry
//----------------//
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


//Charts JS
//----------------//
export const options = {
  responsive: true,
  plugins: {
    legend: {
        display: false
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
        label: 'Value',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 75, 56, 56, 40]
    },
  ],
};

// Define Tokens //
// ---------------//

//Container
export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
export const cardChart_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
export const cardChart_container_fill = tokenData.cards.chartCard.container.value.fill;
export const cardChart_container_borderColor = tokenData.cards.chartCard.container.value.border;
export const cardChart_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadius;
export const cardChart_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadius;
export const cardChart_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadius;
export const cardChart_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadius;
export const cardChart_container_boxShadow =  `${tokenData.cards.notification.container.value.boxShadow.y} ${tokenData.cards.notification.container.value.boxShadow.x} ${tokenData.cards.notification.container.value.boxShadow.blur} ${tokenData.cards.notification.container.value.boxShadow.spread} ${tokenData.cards.notification.container.value.boxShadow.color}`;
export const cardChart_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Title
export const cardChart_title_fontFamily = tokenData.cards.chartCard.title.value.typography.fontFamily;
export const cardChart_title_fontWeight = tokenData.cards.chartCard.title.value.typography.fontWeight;
export const cardChart_title_fontSize = tokenData.cards.chartCard.title.value.typography.fontSize;
export const cardChart_title_lineHeight = tokenData.cards.chartCard.title.value.typography.lineHeight;
export const cardChart_title_letterSpacing = tokenData.cards.chartCard.title.value.typography.letterSpacing;
export const cardChart_title_textCase = tokenData.cards.chartCard.title.value.typography.textCase;
export const cardChart_title_textDecoration = tokenData.cards.chartCard.title.value.typography.textDecoration;
export const cardChart_title_color = tokenData.cards.chartCard.title.value.fill;

//Chart Wrapper
// export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
// export const cardChart_container_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
// export const cardChart_container_container_fill = tokenData.cards.chartCard.container.value.fill;
// export const cardChart_container_container_borderColor = tokenData.cards.chartCard.container.value.border;
// export const cardChart_container_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadiusTopLeft;
// export const cardChart_container_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadiusTopRight;
// export const cardChart_container_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadiusBottomRight;
// export const cardChart_container_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadiusBottomLeft;
// export const cardChart_container_container_boxShadow =  tokenData.cards.chartCard.container.value.boxShadow;
// export const cardChart_container_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Readout Wrapper
// export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
// export const cardChart_container_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
// export const cardChart_container_container_fill = tokenData.cards.chartCard.container.value.fill;
// export const cardChart_container_container_borderColor = tokenData.cards.chartCard.container.value.border;
// export const cardChart_container_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadiusTopLeft;
// export const cardChart_container_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadiusTopRight;
// export const cardChart_container_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadiusBottomRight;
// export const cardChart_container_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadiusBottomLeft;
// export const cardChart_container_container_boxShadow =  tokenData.cards.chartCard.container.value.boxShadow;
// export const cardChart_container_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Icon Wrapper
// export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
// export const cardChart_container_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
// export const cardChart_container_container_fill = tokenData.cards.chartCard.container.value.fill;
// export const cardChart_container_container_borderColor = tokenData.cards.chartCard.container.value.border;
// export const cardChart_container_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadiusTopLeft;
// export const cardChart_container_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadiusTopRight;
// export const cardChart_container_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadiusBottomRight;
// export const cardChart_container_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadiusBottomLeft;
// export const cardChart_container_container_boxShadow =  tokenData.cards.chartCard.container.value.boxShadow;
// export const cardChart_container_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Readout Wrapper
// export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
// export const cardChart_container_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
// export const cardChart_container_container_fill = tokenData.cards.chartCard.container.value.fill;
// export const cardChart_container_container_borderColor = tokenData.cards.chartCard.container.value.border;
// export const cardChart_container_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadiusTopLeft;
// export const cardChart_container_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadiusTopRight;
// export const cardChart_container_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadiusBottomRight;
// export const cardChart_container_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadiusBottomLeft;
// export const cardChart_container_container_boxShadow =  tokenData.cards.chartCard.container.value.boxShadow;
// export const cardChart_container_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Readout
// export const cardChart_container_paddingVertical = tokenData.cards.chartCard.container.value.verticalPadding;
// export const cardChart_container_container_paddingHorizontal = tokenData.cards.chartCard.container.value.horizontalPadding;
// export const cardChart_container_container_fill = tokenData.cards.chartCard.container.value.fill;
// export const cardChart_container_container_borderColor = tokenData.cards.chartCard.container.value.border;
// export const cardChart_container_container_borderRadius_topLeft = tokenData.cards.chartCard.container.value.borderRadiusTopLeft;
// export const cardChart_container_container_borderRadius_topRight = tokenData.cards.chartCard.container.value.borderRadiusTopRight;
// export const cardChart_container_container_borderRadius_bottomRight = tokenData.cards.chartCard.container.value.borderRadiusBottomRight;
// export const cardChart_container_container_borderRadius_bottomLeft = tokenData.cards.chartCard.container.value.borderRadiusBottomLeft;
// export const cardChart_container_container_boxShadow =  tokenData.cards.chartCard.container.value.boxShadow;
// export const cardChart_container_container_opacity = tokenData.cards.chartCard.container.value.opacity;

//Value
export const cardChart_readoutValue_fontFamily = tokenData.cards.chartCard.value.value.typography.fontFamily;
export const cardChart_readoutValue_fontWeight = tokenData.cards.chartCard.value.value.typography.fontWeight;
export const cardChart_readoutValue_fontSize = tokenData.cards.chartCard.value.value.typography.fontSize;
export const cardChart_readoutValue_lineHeight = tokenData.cards.chartCard.value.value.typography.lineHeight;
export const cardChart_readoutValue_letterSpacing = tokenData.cards.chartCard.value.value.typography.letterSpacing;
export const cardChart_readoutValue_textCase = tokenData.cards.chartCard.value.value.typography.textCase;
export const cardChart_readoutValue_textDecoration = tokenData.cards.chartCard.value.value.typography.textDecoration;
export const cardChart_readoutValue_color = tokenData.cards.chartCard.value.value.fill;

//Value Label
export const cardChart_readoutLabel_fontFamily = tokenData.cards.chartCard.valueLabel.value.typography.fontFamily;
export const cardChart_readoutLabel_fontWeight = tokenData.cards.chartCard.valueLabel.value.typography.fontWeight;
export const cardChart_readoutLabel_fontSize = tokenData.cards.chartCard.valueLabel.value.typography.fontSize;
export const cardChart_readoutLabel_lineHeight = tokenData.cards.chartCard.valueLabel.value.typography.lineHeight;
export const cardChart_readoutLabel_letterSpacing = tokenData.cards.chartCard.valueLabel.value.typography.letterSpacing;
export const cardChart_readoutLabel_textCase = tokenData.cards.chartCard.valueLabel.value.typography.textCase;
export const cardChart_readoutLabel_textDecoration = tokenData.cards.chartCard.valueLabel.value.typography.textDecoration;
export const cardChart_readoutLabel_color = tokenData.cards.chartCard.valueLabel.value.fill;

// Define Styles //
// ---------------//

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-style: solid;
    outline: none;
    padding: 
        ${cardChart_container_paddingVertical} 
        ${cardChart_container_paddingHorizontal};
    background-color: 
        ${cardChart_container_fill};
    border-color: 
        ${cardChart_container_borderColor};
    border-radius: 
        ${cardChart_container_borderRadius_topLeft} 
        ${cardChart_container_borderRadius_topRight} 
        ${cardChart_container_borderRadius_bottomLeft} 
        ${cardChart_container_borderRadius_bottomRight};
    box-shadow: 
        ${cardChart_container_boxShadow};
    opacity: 
        ${cardChart_container_opacity};
`;

const CardTitle = styled.h3`
    margin: 0;
    font-family: ${cardChart_title_fontFamily};
    font-weight: ${cardChart_title_fontWeight};
    font-size: ${cardChart_title_fontSize};
    line-height: ${cardChart_title_lineHeight};
    letter-spacing: ${cardChart_title_letterSpacing};
    text-transform: ${cardChart_title_textCase};
    text-decoration: ${cardChart_title_textDecoration};
    color: ${cardChart_title_color};
`;

const ChartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    canvas{
        max-height: 160px
    }
`;

const ReadoutWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const IconWrapper = styled.div`
    heigth: 24px;
    width: 24px;
`;

const Readout = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
`;

const ReadoutValue = styled.h4`
    margin: 0;
    font-family: ${cardChart_readoutValue_fontFamily};
    font-weight: ${cardChart_readoutValue_fontWeight};
    font-size: ${cardChart_readoutValue_fontSize};
    line-height: ${cardChart_readoutValue_lineHeight};
    letter-spacing: ${cardChart_readoutValue_letterSpacing};
    text-transform: ${cardChart_readoutValue_textCase};
    text-decoration: ${cardChart_readoutValue_textDecoration};
    color: ${cardChart_readoutValue_color};
`;

const ReadoutLabel = styled.h5`
    margin: 0;
    font-family: ${cardChart_readoutLabel_fontFamily};
    font-weight: ${cardChart_readoutLabel_fontWeight};
    font-size: ${cardChart_readoutLabel_fontSize};
    line-height: ${cardChart_readoutLabel_lineHeight};
    letter-spacing: ${cardChart_readoutLabel_letterSpacing};
    text-transform: ${cardChart_readoutLabel_textCase};
    text-decoration: ${cardChart_readoutLabel_textDecoration};
    color: ${cardChart_readoutLabel_color};
`;

// Define Component //
// -----------------//
function CardDonut() {
  return (
      <Container className=""> 
          <CardTitle className="title">Card Title</CardTitle> 
          <ChartWrapper className="chartWrapper">
          <Bar options={options} data={data} />
          </ChartWrapper>
          <ReadoutWrapper className="readoutWrapper">
            <Readout className="readout">
                <ReadoutValue className="readoutValue">Value Here</ReadoutValue>
                <ReadoutLabel className="readoutLabel">Value Title</ReadoutLabel>
            </Readout>
            <IconWrapper className="iconWrapper">
            </IconWrapper>
            <Readout className="readout">
                <ReadoutValue className="readoutValue">Value Here</ReadoutValue>
                <ReadoutLabel className="readoutLabel">Value Title</ReadoutLabel>
            </Readout>
          </ReadoutWrapper>
      </Container>  
    
  );
}

export default CardDonut;

CardDonut.propTypes = {
  hasIcon: PropTypes.string,
  buttonCopy: PropTypes.string
};