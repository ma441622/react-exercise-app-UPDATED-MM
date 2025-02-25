import React, { Component } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise';

//which exercise is chosen
class App extends Component {
  state = {
    selectedExercise: null,
  };

  //stores exercises
  SelectExercise = (exercise) => {
    this.setState({ selectedExercise: exercise });
  };

  //stores main menu
  ReturnToMenu = () => {
    this.setState({ selectedExercise: null });
  };

  render() {
    const exercises = [
      { name: "Push-ups", type: "repetition" },
      { name: "Bicycling", type: "duration" },
      { name: "Jumping Jacks", type: "repetition" },
      { name: "Running", type: "running" },
      { name: "Sit-ups", type: "repetition" },
    ];

    //stores display
    let content;

    //menu
    if (this.state.selectedExercise === null) {
      content = (
        <div>
          <p>Select an Exercise:</p>
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.name}>
                <button onClick={() => this.SelectExercise(exercise)}>
                  {exercise.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    // repetition exercise
    else if (this.state.selectedExercise.type === 'repetition') {
      content = (
        <div>
          <RepetitionExercise name={this.state.selectedExercise.name} />
          <button onClick={this.ReturnToMenu}>Return</button>
        </div>
      );
    }
    // duration exercise
    else if (this.state.selectedExercise.type === 'duration') {
      content = (
        <div>
          <DurationExercise name={this.state.selectedExercise.name} />
          <button onClick={this.ReturnToMenu}>Return</button>
        </div>
      );
    }
    // running exercise
    else if (this.state.selectedExercise.type === 'running') {
      content = (
        <div>
          <RunningExercise name={this.state.selectedExercise.name} />
          <button onClick={this.ReturnToMenu}>Return</button>
        </div>
      );
    }

    //displays content above and header
    return (
      <div className="Exercises">
        <h1>Go Do Something!</h1>
        {content}
      </div>
    );
  }
}

export default App;

