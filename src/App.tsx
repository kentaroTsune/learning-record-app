import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [inputTime, setInputTime] = useState('');

  const recordsList = [
    {title: "勉強の記録1", time: 1},
    {title: "勉強の記録2", time: 3},
    {title: "勉強の記録3", time: 5}
  ];
  const [records, setRecords] = useState(recordsList);

  let totalTime = records.reduce((sum, element) => {
    return sum + element.time;
  }, 0)

  const onChangeInputText = (e) => setInputText(e.target.value);
  const onChangeTimeText = (e) => setInputTime(e.target.value);

  const onClickAddRecord = () =>{
    const inputRecords = {title: inputText, time: parseInt(inputTime, 10)};
    const newRecords = [...records, inputRecords];

    setRecords(newRecords);

    setInputText('');
    setInputTime('');
  }

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled((!(inputText.length === 0) && !(inputTime.length === 0)) ? false : true);
  }, [inputText, inputTime])

  
  return (
    <>
      <h1>学習記録一覧</h1>
      <br />

      <h2>学習内容</h2>
      <ul>
        {records.map((record, index) => {
          return (
            <li key={index}>
              <p className='record-text'>{record.title}</p>
            </li>
          )
        })}
      </ul>

      <br />

      <h2>学習時間</h2>

      <span>合計{totalTime}時間</span>

      <br />
      <br />

      <div>
        <span>学習内容を入力</span>
        <input value={inputText} onChange={onChangeInputText} />
      </div>
      <div>
        <span>学習時間を入力</span>
        <input type='number' value={inputTime} onChange={onChangeTimeText} />
      </div>

      <br />
      <br />

      {(!(inputText.length === 0) && !(inputTime.length === 0)) || <p style={{color: "red"}}>入力されていない項目があります</p>}

      <button onClick={onClickAddRecord} disabled={isDisabled}>登録</button>

    </>
  )
}

export default App
