let display = document.getElementById("display");

    // Keyboard Support
    document.addEventListener("keydown", function(event) {
      if((event.key >= "0" && event.key <= "9") || ["+","-","*","/","."].includes(event.key)) {
        display.value += event.key;
      }
      if(event.key === "Enter") calculate();
      if(event.key === "Backspace") display.value = display.value.slice(0,-1);
    });

    function calculate() {
      try {
        display.value = eval(display.value.replace("%","/100"));
      } catch {
        display.value = "Error";
      }
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
    }