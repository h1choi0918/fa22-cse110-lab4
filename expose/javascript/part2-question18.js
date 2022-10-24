setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    clearTimeout(d);
  }, 1000);