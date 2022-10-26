import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tokenData from '../../../../src/assets/designTokens/tokensMasterTransformed.json';

// Define Tokens //
// ---------------//


// Define Styles //
// ---------------//
const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

// Define Component //
// -----------------//
function Form( { children } ) {
  return (
    <FormWrapper>
        {children}
    </FormWrapper>
  );
}

export default Form;

Form.propTypes = {
  children: PropTypes.node
};