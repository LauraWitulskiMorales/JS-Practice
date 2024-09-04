function activityTable(day) {
    return textFile("camera_logs.txt")
      .then(logFileList => {
        let files = logFileList.split("\n");
        
      return Promise.all(files.map(file => textFile (file)));
    })
      .then(logs => {
      let hourlyCounts = new Array(24).fill(0);
        logs.forEach (log => {
          
            let timestamps = log.split("\n").map(Number);

            timestamps.forEach(timestamp => {
              let date = new Date(timestamp);
              
              if (date.getDay() === day) {
                let hour = date.getHours();
                hourlyCounts[hour]++;
              }
            });
          });
    
          return hourlyCounts;
        });
    }