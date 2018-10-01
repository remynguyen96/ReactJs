import React, { PureComponent } from 'react';
import Styles from './Styles.scss';
import UndoRedo from "./UndoRedo";

const initialize = {
  step1: 'Step 1: Create a new value and apply it !',
  step2: 'Step 2: Continue create a new value and apply it !',
  step3: 'Done, you effect method undo and redo through button',
};

const initialState = {
  undo: [],
  redo: [],
  process: initialize['step1'],
  txt: '',
  valApply: '',
};

export default class UndoRedoApp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleMethodUndo = this.handleMethodUndo.bind(this);
    this.handleMethodRedo = this.handleMethodRedo.bind(this);
  }

  handleChangeTxt = (e) => {
    this.setState({
      txt: e.currentTarget.value
    });
  };

  checkProcess = (process) => {
    switch (process) {
      case initialize['step1']:
        return initialize['step2'];
      case initialize['step2']:
        return initialize['step3'];
      default :
        return initialize['step3'];
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      const { txt, process, undo, valApply } = prevState;
      return {
        valApply: txt,
        process: this.checkProcess(process),
        txt: '',
        undo: [...undo, valApply],
        redo: [txt],
      }
    });
  };

  clearStash = () => {
    this.setState(initialState);
  };

  handleMethodUndo() {
    const { undo } = this.state;
    if (undo.length === 0) return null;
    /* Change value of state but don't render template */
    const valUndo = undo.pop();
    valUndo && this.setState(prevState => {
      const { redo } = prevState;
      return {
        valApply: valUndo,
        redo: [...new Set([...redo, valUndo])],
      };
    });
  };

  handleMethodRedo() {
    const { redo } = this.state;
    if (redo.length < 2) return null;
    const valRedo = redo.pop();
    const state = redo[redo.length - 1];
    !!valRedo && this.setState(prevState => ({
      valApply: state,
      undo: [...new Set([prevState.undo, valRedo])],
    }));
  };

  render() {
    const { valApply, process, txt } = this.state;
    return (
      <div className={Styles.appUndoRedo}>
        {valApply && <span className={Styles.txtPerform}>{valApply}</span>}
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 required
                 value={txt}
                 className={Styles.inputTxt}
                 onChange={this.handleChangeTxt}  />
          <button type="submit" className={Styles.btnSubmit}>Apply</button>
          <button type="button" onClick={this.clearStash} className={Styles.btnClear}>Clear</button>
        </form>
        <UndoRedo
          handleMethodUndo={this.handleMethodUndo}
          handleMethodRedo={this.handleMethodRedo}
        />
        <p className={Styles.processDoc}>{process}</p>
      </div>
    );
  }
}