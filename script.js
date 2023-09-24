    let loll = location.href;
    document.getElementById("legit").innerHTML = "This url: " + loll;

    function woah() {
      alert('this url: ' + loll);
    }

    function real() {
      document.getElementById("hello").innerHTML = 'Ratio :3'
    }

    function bye() {
      document.getElementById("hello").innerHTML = 'Goodbye world'
    }

    function agelol() {
      let agee = prompt('what is your age?')
      if (agee > 1) {
        document.getElementById("hello").innerHTML = 'bitch you are ' + agee + ' years old'
      } else {
        document.getElementById("hello").innerHTML = 'bitch you are ' + agee + ' year old'
      }
      if (agee < 1) {
        document.getElementById("hello").innerHTML = 'man shut yo lying ass up i know you aint that young'
      }
      if (agee > 120) {
        document.getElementById("hello").innerHTML = 'man shut yo lying ass up i know you aint that old'
      }
      if (agee == 69) {
        document.getElementById("hello").innerHTML = 'damn you a nice number'
      }
      if (agee == 420) {
        document.getElementById("hello").innerHTML = 'damn you a nice number'
      }
    }

    function youabi() {
      let tittle = prompt('write a title im too lazy to make one')
      document.getElementById("tttt").innerHTML = tittle
    }
