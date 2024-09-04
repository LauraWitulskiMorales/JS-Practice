async function activityTable(day) {
    let logFileList = await textFile("camera_logs.txt");
    let files = logFileList.split("\n");

    let hourlyCounts = new Array(24).fill(0);

    for (let file of files) {
        let logContent = await textFile(file);
        let timestamps = logContent.split("\n").map(Number);
    
        for (let timestamp of timestamps) {
          let date = new Date(timestamp);
          if (date.getDay() === day) {
            let hour = date.getHours();
            hourlyCounts[hour]++;
          }
        }
      }
    
      return hourlyCounts;
    }
  
  activityTable(1)
    .then(table => console.log(activityGraph(table)));