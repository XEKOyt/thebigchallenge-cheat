(function() {
  const numberData = {
    "numbers": [
      {"number": 1, "text": "one"},
      {"number": 2, "text": "two"},
      {"number": 3, "text": "three"},
      {"number": 4, "text": "four"},
      {"number": 5, "text": "five"},
      {"number": 6, "text": "six"},
      {"number": 7, "text": "seven"},
      {"number": 8, "text": "eight"},
      {"number": 9, "text": "nine"},
      {"number": 10, "text": "ten"},
      {"number": 11, "text": "eleven"},
      {"number": 12, "text": "twelve"},
      {"number": 13, "text": "thirteen"},
      {"number": 14, "text": "fourteen"},
      {"number": 15, "text": "fifteen"},
      {"number": 16, "text": "sixteen"},
      {"number": 17, "text": "seventeen"},
      {"number": 18, "text": "eighteen"},
      {"number": 19, "text": "nineteen"},
      {"number": 20, "text": "twenty"},
      {"number": 21, "text": "twenty-one"},
      {"number": 22, "text": "twenty-two"},
      {"number": 23, "text": "twenty-three"},
      {"number": 24, "text": "twenty-four"},
      {"number": 25, "text": "twenty-five"},
      {"number": 26, "text": "twenty-six"},
      {"number": 27, "text": "twenty-seven"},
      {"number": 28, "text": "twenty-eight"},
      {"number": 29, "text": "twenty-nine"},
      {"number": 30, "text": "thirty"},
      {"number": 31, "text": "thirty-one"},
      {"number": 32, "text": "thirty-two"},
      {"number": 33, "text": "thirty-three"},
      {"number": 34, "text": "thirty-four"},
      {"number": 35, "text": "thirty-five"},
      {"number": 36, "text": "thirty-six"},
      {"number": 37, "text": "thirty-seven"},
      {"number": 38, "text": "thirty-eight"},
      {"number": 39, "text": "thirty-nine"},
      {"number": 40, "text": "forty"},
      {"number": 41, "text": "forty-one"},
      {"number": 42, "text": "forty-two"},
      {"number": 43, "text": "forty-three"},
      {"number": 44, "text": "forty-four"},
      {"number": 45, "text": "forty-five"},
      {"number": 46, "text": "forty-six"},
      {"number": 47, "text": "forty-seven"},
      {"number": 48, "text": "forty-eight"},
      {"number": 49, "text": "forty-nine"},
      {"number": 50, "text": "fifty"},
      {"number": 51, "text": "fifty-one"},
      {"number": 52, "text": "fifty-two"},
      {"number": 53, "text": "fifty-three"},
      {"number": 54, "text": "fifty-four"},
      {"number": 55, "text": "fifty-five"},
      {"number": 56, "text": "fifty-six"},
      {"number": 57, "text": "fifty-seven"},
      {"number": 58, "text": "fifty-eight"},
      {"number": 59, "text": "fifty-nine"},
      {"number": 60, "text": "sixty"},
      {"number": 61, "text": "sixty-one"},
      {"number": 62, "text": "sixty-two"},
      {"number": 63, "text": "sixty-three"},
      {"number": 64, "text": "sixty-four"},
      {"number": 65, "text": "sixty-five"},
      {"number": 66, "text": "sixty-six"},
      {"number": 67, "text": "sixty-seven"},
      {"number": 68, "text": "sixty-eight"},
      {"number": 69, "text": "sixty-nine"},
      {"number": 70, "text": "seventy"},
      {"number": 71, "text": "seventy-one"},
      {"number": 72, "text": "seventy-two"},
      {"number": 73, "text": "seventy-three"},
      {"number": 74, "text": "seventy-four"},
      {"number": 75, "text": "seventy-five"},
      {"number": 76, "text": "seventy-six"},
      {"number": 77, "text": "seventy-seven"},
      {"number": 78, "text": "seventy-eight"},
      {"number": 79, "text": "seventy-nine"},
      {"number": 80, "text": "eighty"},
      {"number": 81, "text": "eighty-one"},
      {"number": 82, "text": "eighty-two"},
      {"number": 83, "text": "eighty-three"},
      {"number": 84, "text": "eighty-four"},
      {"number": 85, "text": "eighty-five"},
      {"number": 86, "text": "eighty-six"},
      {"number": 87, "text": "eighty-seven"},
      {"number": 88, "text": "eighty-eight"},
      {"number": 89, "text": "eighty-nine"},
      {"number": 90, "text": "ninety"},
      {"number": 91, "text": "ninety-one"},
      {"number": 92, "text": "ninety-two"},
      {"number": 93, "text": "ninety-three"},
      {"number": 94, "text": "ninety-four"},
      {"number": 95, "text": "ninety-five"},
      {"number": 96, "text": "ninety-six"},
      {"number": 97, "text": "ninety-seven"},
      {"number": 98, "text": "ninety-eight"},
      {"number": 99, "text": "ninety-nine"},
      {"number": 100, "text": "one hundred"}
    ]
  };

  let totalChecks = 0;
  let isRunning = true;
  let timerEndDetected = false;
  
  const numberTextMap = {};
  numberData.numbers.forEach(item => {
    numberTextMap[item.number] = item.text.toLowerCase();
  });
  
  const uiContainer = document.createElement('div');
  uiContainer.style.position = 'fixed';
  uiContainer.style.top = '10px';
  uiContainer.style.right = '10px';
  uiContainer.style.backgroundColor = 'rgba(33, 33, 33, 0.9)';
  uiContainer.style.color = '#fff';
  uiContainer.style.padding = '12px';
  uiContainer.style.borderRadius = '8px';
  uiContainer.style.zIndex = '10000';
  uiContainer.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  uiContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  uiContainer.style.minWidth = '220px';
  uiContainer.style.backdropFilter = 'blur(5px)';
  uiContainer.style.border = '1px solid rgba(255, 255, 255, 0.1)';
  document.body.appendChild(uiContainer);
  
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.alignItems = 'center';
  header.style.justifyContent = 'space-between';
  header.style.marginBottom = '10px';
  header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.2)';
  header.style.paddingBottom = '8px';
  uiContainer.appendChild(header);

  const statusIndicator = document.createElement('div');
  statusIndicator.style.display = 'flex';
  statusIndicator.style.alignItems = 'center';
  header.appendChild(statusIndicator);

  const statusDot = document.createElement('div');
  statusDot.style.width = '10px';
  statusDot.style.height = '10px';
  statusDot.style.borderRadius = '50%';
  statusDot.style.backgroundColor = '#4CAF50';
  statusDot.style.marginRight = '8px';
  statusIndicator.appendChild(statusDot);

  const statusText = document.createElement('div');
  statusText.textContent = 'RUNNING';
  statusText.style.fontWeight = 'bold';
  statusText.style.fontSize = '14px';
  statusIndicator.appendChild(statusText);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  closeBtn.style.background = 'none';
  closeBtn.style.border = 'none';
  closeBtn.style.color = '#fff';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.fontSize = '16px';
  closeBtn.style.padding = '0';
  closeBtn.style.display = 'flex';
  closeBtn.style.alignItems = 'center';
  closeBtn.style.justifyContent = 'center';
  closeBtn.style.width = '20px';
  closeBtn.style.height = '20px';
  closeBtn.onclick = function() {
    window.stopNumberMatcher();
  };
  header.appendChild(closeBtn);
  
  const content = document.createElement('div');
  content.style.fontSize = '14px';
  uiContainer.appendChild(content);

  const checksCounter = document.createElement('div');
  checksCounter.style.display = 'flex';
  checksCounter.style.justifyContent = 'space-between';
  checksCounter.style.marginBottom = '8px';
  content.appendChild(checksCounter);

  const checksLabel = document.createElement('div');
  checksLabel.textContent = 'Checks:';
  checksLabel.style.color = 'rgba(255, 255, 255, 0.7)';
  checksCounter.appendChild(checksLabel);

  const checksValue = document.createElement('div');
  checksValue.textContent = '0';
  checksValue.style.fontWeight = 'bold';
  checksCounter.appendChild(checksValue);
  
  const timerDisplay = document.createElement('div');
  timerDisplay.style.display = 'flex';
  timerDisplay.style.justifyContent = 'space-between';
  timerDisplay.style.marginBottom = '8px';
  content.appendChild(timerDisplay);

  const timerLabel = document.createElement('div');
  timerLabel.textContent = 'Timer:';
  timerLabel.style.color = 'rgba(255, 255, 255, 0.7)';
  timerDisplay.appendChild(timerLabel);

  const timerValue = document.createElement('div');
  timerValue.textContent = 'N/A';
  timerValue.style.fontWeight = 'bold';
  timerDisplay.appendChild(timerValue);
  
  const statusMessage = document.createElement('div');
  statusMessage.style.fontSize = '12px';
  statusMessage.style.color = 'rgba(255, 255, 255, 0.6)';
  statusMessage.style.marginTop = '8px';
  statusMessage.style.paddingTop = '8px';
  statusMessage.style.borderTop = '1px solid rgba(255, 255, 255, 0.1)';
  statusMessage.textContent = 'Matching numbers...';
  content.appendChild(statusMessage);

  function updateUI(timerText, status) {
    checksValue.textContent = totalChecks.toString();
    
    if (timerText) {
      timerValue.textContent = timerText;
      if (timerText === "0:01" || timerText === "0:00" || timerText === "00:01" || timerText === "00:00") {
        timerValue.style.color = '#ff5252';
      } else {
        timerValue.style.color = '#fff';
      }
    }
    
    if (status) {
      statusMessage.textContent = status;
    }
  }

  function getWebsiteTimer() {
    const timerElement = document.querySelector('div[dir="auto"].css-901oao.r-djgu52.r-1sifclg.r-1i10wst');
    if (timerElement) {
      return timerElement.textContent.trim();
    }
    const allElements = document.querySelectorAll('div, span');
    for (const element of allElements) {
      const text = element.textContent.trim();
      if (/^\d{1,2}:\d{2}$/.test(text)) {
        return text;
      }
    }
    return null;
  }

  function clickContinueButton() {
    const exactContinueButton = document.querySelector('div[dir="auto"].css-901oao.r-jwli3a.r-1blvdjr.r-vw2c0b.r-1qxgc49.r-q4m81j');
    if (exactContinueButton && exactContinueButton.textContent.trim() === "Continuer") {
      try {
        console.log("Found exact continue button, clicking:", exactContinueButton);
        exactContinueButton.click();
        const clickEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
        exactContinueButton.dispatchEvent(clickEvent);
        if (exactContinueButton.parentElement) {
          exactContinueButton.parentElement.click();
        }
        statusMessage.textContent = "Clicked exact continue button";
        return true;
      } catch (e) {
        console.log("Exact button click failed:", e);
      }
    }
    
    const continueElements = Array.from(document.querySelectorAll('div[dir="auto"]'))
      .filter(el => el.textContent.trim() === "Continuer");
    if (continueElements.length > 0) {
      try {
        console.log("Found continue element by text, clicking:", continueElements[0]);
        continueElements[0].click();
        statusMessage.textContent = "Clicked continue by text";
        return true;
      } catch (e) {
        console.log("Continue by text click failed:", e);
      }
    }
    
    const similarClassElements = document.querySelectorAll('[class*="r-jwli3a"][class*="r-1blvdjr"]');
    for (const element of similarClassElements) {
      if (element.textContent.trim() === "Continuer") {
        try {
          console.log("Found continue by class, clicking:", element);
          element.click();
          statusMessage.textContent = "Clicked continue by class";
          return true;
        } catch (e) {
          console.log("Continue by class click failed:", e);
        }
      }
    }
    
    const anyElements = document.querySelectorAll('*');
    for (const element of anyElements) {
      if (element.textContent.trim() === "Continuer") {
        try {
          console.log("Found continue in any element, clicking:", element);
          element.click();
          statusMessage.textContent = "Clicked continue (fallback)";
          return true;
        } catch (e) {
          console.log("Fallback click failed:", e);
        }
      }
    }
    
    statusMessage.textContent = "Continue button not found, will retry...";
    return false;
  }
  
  function clickJouerButton() {
    const jouerButton = document.querySelector('div[dir="auto"].css-901oao.r-jwli3a.r-13awgt0.r-ubezar.r-vw2c0b.r-q4m81j.r-13qz1uu');
    if (jouerButton && jouerButton.textContent.trim() === "Jouer") {
      try {
        console.log("Found 'Jouer' button, clicking:", jouerButton);
        jouerButton.click();
        const clickEvent = new MouseEvent('click', { view: window, bubbles: true, cancelable: true });
        jouerButton.dispatchEvent(clickEvent);
        if (jouerButton.parentElement) {
          jouerButton.parentElement.click();
        }
        statusMessage.textContent = "Clicked 'Jouer' button.";
        return true;
      } catch (e) {
        console.log("Failed to click 'Jouer':", e);
      }
    }
    return false;
  }

  function checkTimerAndContinue() {
    const timerText = getWebsiteTimer();
    if (!timerText) return false;

    if ((timerText === "0:00" || timerText === "0:01" || timerText === "00:00" || timerText === "00:01") && !timerEndDetected) {
      timerEndDetected = true;
      statusDot.style.backgroundColor = '#FFC107';
      statusText.textContent = 'WAITING';
      statusMessage.textContent = "Timer ended, waiting to click continue...";
      console.log("Timer reached end, waiting to click Continue...");
      
      // waits 1 sec to click the button
      setTimeout(() => {
        if (clickContinueButton()) {
          statusMessage.textContent = "Continue button clicked!";
          // waits 2 sec to click the play button
          setTimeout(() => {
            if (clickJouerButton()) {
              statusMessage.textContent = "'Jouer' button clicked!";
              }, 1000);
            } else {
              statusMessage.textContent = "'Jouer' button not found.";
            }
          }, 3000);
        } else {
          const retryInterval = setInterval(() => {
            if (clickContinueButton()) {
              clearInterval(retryInterval);
              statusMessage.textContent = "Continue button clicked on retry!";
              setTimeout(() => {
                if (clickJouerButton()) {
                  statusMessage.textContent = "'Jouer' button clicked on retry!";
                  setTimeout(() => {
                    location.reload();
                  }, 1000);
                } else {
                  statusMessage.textContent = "'Jouer' button not found on retry.";
                }
              }, 500);
            }
          }, 1000);
          setTimeout(() => clearInterval(retryInterval), 10000);
        }
      }, 1000);
      
      return true;
    }
    
    return false;
  }

  function checkNumberTextMatch() {
    try {
      const numberSpans = document.querySelectorAll('span.css-901oao.css-16my406.r-1awozwy.r-1gxhoq');
      const textSpans = document.querySelectorAll('span.css-901oao.css-16my406.r-1awozwy.r-1gxhoq');
      const yesSpans = document.querySelectorAll('span:not([class*="r-1gxhoq"])[class*="r-jwli3a"]');
      const noSpans = document.querySelectorAll('span:not([class*="r-1gxhoq"])[class*="r-jwli3a"]');

      let numberSpan = null;
      let textSpan = null;
      let yesSpan = null;
      let noSpan = null;
      
      for (const span of numberSpans) {
        const content = span.textContent.trim();
        const num = parseInt(content);
        if (!isNaN(num)) {
          numberSpan = span;
          break;
        }
      }
      
      for (const span of textSpans) {
        const content = span.textContent.trim();
        if (isNaN(parseInt(content)) &&
            content !== 'Accueil' &&
            content !== 'Entraînement' &&
            content !== 'Activités' &&
            content !== 'Évènements' &&
            content !== 'YES' &&
            content !== 'NO') {
          textSpan = span;
          break;
        }
      }

      for (const span of yesSpans) {
        if (span.textContent.trim() === 'YES') {
          yesSpan = span;
          break;
        }
      }
      
      for (const span of noSpans) {
        if (span.textContent.trim() === 'NO') {
          noSpan = span;
          break;
        }
      }

      if (!yesSpan || !noSpan) {
        const allSpans = document.querySelectorAll('span');
        for (const span of allSpans) {
          const content = span.textContent.trim();
          if (content === 'YES') {
            yesSpan = span;
          } else if (content === 'NO') {
            noSpan = span;
          }
          if (yesSpan && noSpan) break;
        }
      }
      
      if (!numberSpan || !textSpan || !yesSpan || !noSpan) {
        return false;
      }
      
      const numberValue = parseInt(numberSpan.textContent.trim());
      const textValue = textSpan.textContent.trim().toLowerCase();
      const expectedText = numberTextMap[numberValue];
      
      if (!expectedText) {
        return false;
      }
      
      const isMatch = textValue === expectedText;
      totalChecks++;

      if (isMatch) {
        yesSpan.click();
      } else {
        noSpan.click();
      }
      
      return true;
    } catch (error) {
      return false;
    }
  }

  function displayFinalStats() {
    console.log('\n===== FINAL RESULTS =====');
    console.log(`Completed ${totalChecks} checks`);
    console.log('=========================\n');
    
    statusDot.style.backgroundColor = '#4CAF50';
    statusText.textContent = 'COMPLETED';
    statusMessage.textContent = "Task completed successfully";
    
    setTimeout(() => {
      uiContainer.style.transition = 'opacity 1s ease-out';
      uiContainer.style.opacity = '0';
      setTimeout(() => {
        if (uiContainer.parentNode) {
          document.body.removeChild(uiContainer);
        }
      }, 1000);
    }, 10000);
  }

  async function runFastLoop() {
    let lastTimerText = "";
    let updateCounter = 0;
    
    while (isRunning) {
      if (updateCounter % 20 === 0) {
        const timerText = getWebsiteTimer();
        if (timerText && timerText !== lastTimerText) {
          updateUI(timerText);
          lastTimerText = timerText;
          if (checkTimerAndContinue()) {
            break;
          }
        }
      }
      
      checkNumberTextMatch();
      
      if (updateCounter % 50 === 0) {
        updateUI(lastTimerText);
      }
      
      updateCounter++;
      await new Promise(resolve => setTimeout(resolve, 1));
    }
  }
  
  window.stopNumberMatcher = function() {
    isRunning = false;
    console.log('Number matcher stopped manually');
    displayFinalStats();
  };
  
  console.log('Starting high-speed number matching with improved UI...');
  console.log('To stop early, run: window.stopNumberMatcher()');
  runFastLoop();
})();
