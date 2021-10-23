import { useEffect, useState } from "react";
import acabo from '../sounds/acabou.mp3';

const LandingPage = () => {
  const [task, setTask] = useState('Nenhuma');
  const [taskTime, setTaskTime] = useState(-1);
  const [intervalTime, setIntervalTime] = useState(-1);
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

  // const dateImplements = (seconds) => {
  //   const options = {
  //     weekday: 'long',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //     hour12: false,
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit"
  //   };
  //   const theDeadline = new Date();
  //   theDeadline.setSeconds(theDeadline.getSeconds() + seconds);
  //   return theDeadline.toLocaleDateString('pt-br', options);
  // };

  const initPomo = () => {
    const theInput = document.getElementById('input-task');
    const theTimeNumber = document.getElementById('input-time');
    const theTimeMode = document.getElementById('select-time');
    setTask(theInput.value !== '' ? theInput.value : 'Inominada');
    theTimeMode.value === 'minutos' ?
      setTaskTime(theTimeNumber.value * 60) : setTaskTime(theTimeNumber.value);
  };

  return (
    <div>
      <header>
        <h1>Bem-vindo ao método Pomodoro!</h1>
        <p>A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por
          Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o
          trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por
          intervalos curtos - 5 minutos.</p>
      </header>
      <main>
        { task === 'Nenhuma' ?
          <div>
            <hr />
            <label htmlFor='input-task'>Qual é a tarefa? </label>
            <input id='input-task' type='text'></input><br />
            <label htmlFor='input-time'> E qual o tempo estimado? </label>
            <input id='input-time' type='number' defaultValue={ 25 } min={ 5 }></input>&nbsp;
            <select id='select-time'>
              <option>segundos</option>
              <option>minutos</option>
            </select>
            <p> O intervalo será de 1/5 do tempo da tarefa </p>
            <br />
            <button id='init-button' type='submit' onClick={ initPomo }> Iniciar tarefa </button>
            <hr />
          </div>
          : <div>
            <hr />
            <h2>Tarefa: { task }</h2>
            <h2> Tempo restante da tarefa: { taskTime } segundos </h2>
            <h2> Tempo restante do intervalo: { intervalTime } segundos </h2>
            <hr />
          </div> }
      </main>
    </div>
  );
};

export default LandingPage;