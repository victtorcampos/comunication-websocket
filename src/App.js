import React from 'react';

function App() {
  var address = "wss://127.0.0.1:22501/services";
  var ws = new WebSocket(address);
  ws.onopen = function () {
    ws.send({"plugin":"listener-vsentinel","action":"Plugin.RetrieveDNA","nonce":760675,"hash":"","content":"{}"})
  }

  ws.onmessage = function (event) {

    var response = JSON.parse(event.data);
    console.log(event.data);
    console.log(response);
    
  };
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
