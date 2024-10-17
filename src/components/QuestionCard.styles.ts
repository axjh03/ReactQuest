import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #1a1a2e; /* Dark blue background */
  border-radius: 12px;
  border: 2px solid #ff914d; /* Orange border */
  padding: 25px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5); /* Darker shadow for a stronger effect */
  text-align: center;
  color: #fff; /* White text for contrast */

  p {
    font-size: 1.2rem; /* Larger font size */
    color: #ebfeff; /* Light blue text for contrast */
  }
`;

type ButtonWrapperProps = {
  $correct: boolean;
  $userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.9;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem; /* Larger font size */
    width: 100%;
    height: 45px; /* Increased height */
    margin: 10px 0;
    background: ${({ $correct, $userClicked }) =>
      $correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)' /* Green gradient for correct */
        : !$correct && $userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)' /* Red gradient for incorrect */
        : 'linear-gradient(90deg, #1a1a2e, #ff914d)'}; /* Dark blue to orange gradient for neutral */
    border: 3px solid #ff914d; /* Orange border */
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4); /* Stronger shadow */
    border-radius: 12px;
    color: #ffffff; /* White text */
    text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3); /* Text shadow for emphasis */
  }
`;
