import React from 'react';
import './App.css';
import { useSaveTimber } from './hooks/api/useSaveTimber';
import { Loading } from './share/components/Loading';

function App() {
  const [timberValue, setTimberValue] = React.useState<string>('');
  const [timberResult, setTimberResult] = React.useState<string>('');
  const timberInputRef = React.useRef<HTMLTextAreaElement>(null);
  const timberResultRef = React.useRef<HTMLTextAreaElement>(null);
  const {mutateAsync, isLoading, isSuccess } = useSaveTimber();

  const onHandleProcessButton = React.useCallback(async ()=>{
    if(!timberValue){
      window.alert("Timber Value is not empty");
      timberInputRef.current?.focus();
      return;
    }
    await mutateAsync(timberValue).then((data)=>{
      setTimberResult(JSON.stringify(data.data));
    }).catch((err)=>{
      window.alert("Server is Error");
    })
  },[timberValue]);


  React.useEffect(()=>{
    if(timberResultRef.current !== null){
      timberResultRef.current.disabled = true;
    }
  },[]);

  return (
    <div className="App">
      <div>
        <textarea ref={timberInputRef} onChange={(e)=>{
          setTimberValue(e.target.value);
        }}>

        </textarea>
      </div>
      <div>
        {!isLoading && <button onClick={onHandleProcessButton}>Process</button>}
      </div>
      <div className="loading">
        {isLoading && <Loading /> }
      </div>
      <div>
      <textarea ref={timberResultRef} value={timberResult}  >
        </textarea>
      </div>
    </div>
  );
}

export default App;
