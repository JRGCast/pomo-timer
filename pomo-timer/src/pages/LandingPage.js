import { useEffect, useState } from "react";
import acabo from '../sounds/acabou.mp3';

const LandingPage = () => {
  const [task, setTask] = useState('Nenhuma');
  const [taskTime, setTaskTime] = useState(-1);
  const [intervalTime, setIntervalTime] = useState(-1);
  // const theInitBtn = document.getElementById('init-button');

  useEffect(() => {
    if (taskTime > 0 && intervalTime < 0) {
      setIntervalTime(Math.round(taskTime / 5));
    };
  }, [taskTime, intervalTime]);
  useEffect(() => {
    if (taskTime > 0) {
      setTimeout(() => setTaskTime(taskTime - 1), 1000);
    }
    if (taskTime === 0) {
      const audio = new Audio(acabo);
      audio.play();
    }
  }, [taskTime]);

  useEffect(() => {
    if (taskTime === 0 && intervalTime > 0) {
      setTimeout(() => setIntervalTime(intervalTime - 1), 1000);
    }
  }, [taskTime, intervalTime]);

  const initPomo = () => {
    const theInput = document.getElementById('input-task');
    const theTimeNumber = document.getElementById('input-time');
    const theTimeMode = document.getElementById('select-time');
    setTask(theInput.value !== '' ? theInput.value : 'Inominada');
    theTimeMode.value === 'minutos' ? setTaskTime(theTimeNumber.value * 60) : setTaskTime(theTimeNumber.value);
  };
  const removeTask = () => {
    setTask('Nenhuma');
    setTaskTime(-1);
    setIntervalTime(-1);
  };

  const timeSelection = () => {
    const theTimeSelect = document.getElementById('select-time');
    console.log(theTimeSelect.value);
  };
  return (
    <div>
      <header>
        <h1>Bem-vindo ao método Pomodoro!</h1>
      </header>
      <main>
        { task === 'Nenhuma' ?
          <div>
            <hr />
            <label htmlFor='input-task'>Qual é a tarefa? </label>
            <input id='input-task' type='text'></input><br />
            <label htmlFor='input-time'>Qual é o tempo estimado da tarefa? </label>
            <input id='input-time' type='number' defaultValue={ 25 } min={ 5 }></input>&nbsp;
            <select id='select-time' onChange={ timeSelection }>
              <option>segundos</option>
              <option>minutos</option>
            </select>
            <p> O intervalo será de 1/5 do tempo da tarefa </p>
            <br />
            <button id='init-button' type='submit' onClick={ initPomo }> Iniciar tarefa </button>
          </div>
          : <div>
            <h2>Tarefa: { task }</h2>
            <h2> Tempo restante da tarefa: { taskTime } segundos </h2>
            <h2> Tempo restante do intervalo: { intervalTime } segundos </h2>
            <button type='button' onClick={ removeTask }> Voltar?</button> </div> }
        <button type='button' onClick={ () => console.log(document.getElementById('input-task').value) }> Console</button>
      </main>
    </div>
  );
};

export default LandingPage;