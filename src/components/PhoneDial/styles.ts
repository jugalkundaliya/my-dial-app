import { Button, Input } from "antd/lib";
import styled from "styled-components";

export const DialPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  background-color: #1f0257;
  color: white;
`;

export const Display = styled(Input)`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
  height: 40px;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  &:active,
  &:hover {
    background-color: transparent;
  }
`;

export const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
  background-color: transparent;
  color: #000;
  border-radius: 4px;
  min-height: 115px;
`;

export const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: white;
  &:last-child {
    border-bottom: none;
  }
`;

export const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ButtonLabel = styled.div`
  font-size: 0.5em;
  color: white;
`;

export const ActionButton = styled(Button)`
  width: 80px;
  height: 80px;
  font-size: 1.5em;
  border-radius: 50%;
  background-color: #bbaae05b;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  &:hover {
    color: black !important;
    ${ButtonLabel} {
      color: black !important;
    }
  }
`;

export const BottomButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CallButton = styled(Button)`
  background-color: #4caf50;
  border-color: #4caf50;
  color: white;
  width: 60px;
  height: 60px;
  font-size: 1.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EndCallButton = styled(Button)`
  background-color: #f44336;
  border-color: #f44336;
  color: white;
  width: 60px;
  height: 60px;
  font-size: 1.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoCallButton = styled(Button)`
  width: 60px;
  height: 60px;
  font-size: 1.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: white;
`;

export const EraseButton = styled(Button)`
  width: 60px;
  height: 60px;
  font-size: 1.5em;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: white;
`;

export const CallInfo = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const CallOptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;
  margin-bottom: 16px;
`;
