import { useEffect, useState } from "react";
import acabo from '../sounds/acabou.mp3';
import './LandingPage.css';

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
      <header style={ { margin: '0 auto', width: '80%' } }>
        <h1>Bem-vindo ao método Pomodoro Personalizado!</h1>
        <p>A Técnica Pomodoro é um método de gerenciamento de tempo desenvolvido por
          Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o
          trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por
          intervalos curtos - 5 minutos.</p>
        <p>Aqui a técnica pode ser aplicada com alguma personalização, mas, para respeitar a técnica original, o intervalo seguirá o parâmetro de 1/5 do tempo da tarefa. </p>
      </header>
      <main className='main-wrapper'>
        <hr />
        { task === 'Nenhuma' ?
          <div className='content-wrapper'>
            <div className='task-wrapper'>
              <label htmlFor='input-task'>Qual é a tarefa? </label>
              <input id='input-task' className='input-tsk' type='text'></input>
            </div>
            <br />
            <div style={ { marginBottom: '2em' } }>
              <label htmlFor='input-time'> E qual o tempo estimado? </label>
              <input id='input-time' className='input-number' type='number' defaultValue={ 25 } min={ 5 }></input>&nbsp;
              <select id='select-time' className='slct-time'>
                <option>segundos</option>
                <option>minutos</option>
              </select>
            </div>
            <br />
            <button id='init-button' className='init-btn' type='submit' onClick={ initPomo }> Iniciar tarefa </button>
          </div>
          : <div className='content-wrapper'>
            <h2>Tarefa: { task }</h2>
            <h2> Tempo restante da tarefa: { taskTime } segundos </h2>
            <h2> Tempo restante do intervalo: { intervalTime } segundos </h2>
          </div> }
      </main>
      <footer style={ { margin: '0 auto', width: '80%' } }>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXJJBul3Ro37snNJJe-1lAXOW2sN4aiGWNV-6ipwrifTxg3kzE3wRwzeaBfL_ItzX8hc&usqp=CAU' alt='pomodoro-clock' />
        <p>O método se chama “Pomodoro” (tomate, em italiano) porque Cirillo usava um daqueles relógios de cozinha em formato de tomate para controlar o seu tempo.</p>
        <a style={ { fontSize: 'large', marginBottom: '2em' } } href='https://github.com/JRGCast/pomo-timer' target="_blank"
          rel="noreferrer noopener">Ir até o repositório</a>
      </footer>
    </div>
  );
};

export default LandingPage;