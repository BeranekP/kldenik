

// Javascript import observer
const observerJS = new MutationObserver((mutations, obs) => {
    let js = document.querySelector('script[src*="page-article"]')
  
    if (js) {
      js.src="";
      obs.disconnect();
      return;
    }
  });

// Paywall element observer
  const observerEle = new MutationObserver((mutations, obs) => {
    let paywall = document.querySelector('.js-paywall, .paywall');
    
    if (paywall) {
      paywall.classList.remove('paywall');
      paywall.classList.remove('js-paywall');
      obs.disconnect();
      return;
    }
  });

// run observers
  observerJS.observe(document, {
    childList: true,
    subtree: true
  });
  observerEle.observe(document, {
    childList: true,
    subtree: true
  });