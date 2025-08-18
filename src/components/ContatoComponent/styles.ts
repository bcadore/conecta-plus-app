import styled from 'styled-components';

export const Card = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  background-color: #f0ebd8;
  border-radius: 8px;
`;

export const CardTitle = styled.h3`
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #0d1321;
`;

export const Tag = styled.span`
  padding: 4px 8px;
  color: #0d1321;
  font-weight: bold;
  font-size: 12px;
  background-color: #fff;
  border-radius: 8px;
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  gap: 8px;

  label {
    font-weight: bold;
    margin-bottom: 2px;
  }

  input {
    width: 50%;
    padding: 8px;
    border: 1px solid #0d1321;
    border-radius: 4px;
  }
`;

export const CardAction = styled.div`
  border-top: 1px solid #0d1321;
  padding-top: 16px;
`;

export const CardButton = styled.button`
  margin-right: 8px;
  padding: 8px 12px;
  font-weight: bold;
  font-size: 12px;
  color: #f0ebd8;
  background-color: #0d1321;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
