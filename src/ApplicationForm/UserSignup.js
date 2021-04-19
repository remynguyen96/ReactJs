import React from 'react';

import { useSetState } from './useSetState';

const initialState = {
  userName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  investmentInterest: false,
};

export const UserSignup = () => {
  const [state, setState] = useSetState(initialState);
  console.log(state);
  // const [userName, setUserName] = React.useState('');
  // const [email, setEmail] = React.useState('');
  // const [password, setPassword] = React.useState('');
  // const [passwordConfirmation, setPasswordConfirmation] = React.useState('');
  // const [investmentInterest, setInvestmentInterest] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    clear();
  };

  const clear = () => {
    setState(initialState);
    // setUserName('');
    // setEmail('');
    // setPassword('');
    // setPasswordConfirmation('');
    // setInvestmentInterest(false);
  };

  const handleChange = (event) =>
    setState({
      [event.target.name]: event.target.value,
    });

  return (
    <form className="UserSignup" onSubmit={handleSubmit}>
      <label htmlFor="userName">User Name</label>
      <input
        id="userName"
        name="userName"
        type="text"
        required
        // value={userName}
        // onChange={(event) => {
        //   setUserName(event.target.value);
        // }}
        defaultValue={state.userName}
        value={state.userName}
        onChange={handleChange}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        // value={email}
        // onChange={(event) => {
        //   setEmail(event.target.value);
        // }}
        defaultValue={state.email}
        value={state.email}
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        // value={password}
        // onChange={(event) => {
        //   setPassword(event.target.value);
        // }}
        defaultValue={state.password}
        value={state.password}
        onChange={handleChange}
      />
      <label htmlFor="passwordConfirmation">Confirm Password</label>
      <input
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        required
        // value={passwordConfirmation}
        // onChange={(event) => {
        //   setPasswordConfirmation(event.target.value);
        // }}
        defaultValue={state.passwordConfirmation}
        value={state.passwordConfirmation}
        onChange={handleChange}
      />
      <label htmlFor="investmentInterest" className="UserSignup--checkbox">
        <input
          id="investmentInterest"
          name="investmentInterest"
          type="checkbox"
          checked={state.investmentInterest}
          // onChange={(event) => setInvestmentInterest(event.target.checked)}
          onChange={event => setState({ investmentInterest: !event.target.checked })}
        />
        Do you want to maybe help us out with an angel investment?
      </label>
      <input type="Submit" value="Create account" />
    </form>
  );
};
